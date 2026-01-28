import { WebRTCStream } from "@nestri/input";
// @ts-ignore
import { createMessage } from "@nestri/input/src/utils";
import { create, toBinary } from "@bufbuild/protobuf";
import {
    ProtoMessageSchema,
} from "@nestri/input/src/proto/messages_pb";
import {
    ProtoMouseMoveSchema,
    ProtoMouseKeyDownSchema,
    ProtoMouseKeyUpSchema,
} from "@nestri/input/src/proto/types_pb";

export class RNMouse {
    private wrtc: WebRTCStream;
    private sendInterval = 10;
    private movementX = 0;
    private movementY = 0;
    private intervalId: any = null;

    constructor(wrtc: WebRTCStream) {
        this.wrtc = wrtc;
        this.startProcessing();
    }

    public move(dx: number, dy: number) {
        this.movementX += dx;
        this.movementY += dy;
    }

    public down(button: number) {
        // 0: Left, 1: Middle, 2: Right
        const linuxCode = this.buttonToLinuxCode(button);
        if (!linuxCode) return;

        const data = create(ProtoMouseKeyDownSchema, {
            key: linuxCode,
        });
        const message = createMessage(data, "input");
        this.wrtc.sendBinary(toBinary(ProtoMessageSchema, message));
    }

    public up(button: number) {
        const linuxCode = this.buttonToLinuxCode(button);
        if (!linuxCode) return;

        const data = create(ProtoMouseKeyUpSchema, {
            key: linuxCode,
        });
        const message = createMessage(data, "input");
        this.wrtc.sendBinary(toBinary(ProtoMessageSchema, message));
    }

    private startProcessing() {
        this.intervalId = setInterval(() => {
            if (this.movementX !== 0 || this.movementY !== 0) {
                this.sendAggregatedMouseMove();
                this.movementX = 0;
                this.movementY = 0;
            }
        }, this.sendInterval);
    }

    private sendAggregatedMouseMove() {
        const data = create(ProtoMouseMoveSchema, {
            x: Math.round(this.movementX),
            y: Math.round(this.movementY),
        });

        const message = createMessage(data, "input");
        this.wrtc.sendBinary(toBinary(ProtoMessageSchema, message));
    }

    private buttonToLinuxCode(button: number): number | undefined {
        switch (button) {
            case 0: return 272; // Left
            case 1: return 274; // Middle
            case 2: return 273; // Right
            default: return undefined;
        }
    }

    public dispose() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }
}
