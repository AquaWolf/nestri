import 'react-native-get-random-values';
// @ts-ignore
import { TextEncoder, TextDecoder } from 'text-encoding';
import { Readable } from 'readable-stream';

// Polyfill TextEncoder/TextDecoder
if (typeof global.TextEncoder === 'undefined') {
  global.TextEncoder = TextEncoder;
}
if (typeof global.TextDecoder === 'undefined') {
  global.TextDecoder = TextDecoder;
}

// Polyfill Node.js streams
// @ts-ignore
if (typeof global.Readable === 'undefined') {
    // @ts-ignore
    global.Readable = Readable;
}

// Polyfill localStorage (Simple In-Memory)
if (typeof global.localStorage === 'undefined') {
  const memoryStorage = new Map<string, string>();
  // @ts-ignore
  global.localStorage = {
    getItem: (key: string) => memoryStorage.get(key) || null,
    setItem: (key: string, value: string) => memoryStorage.set(key, value),
    removeItem: (key: string) => memoryStorage.delete(key),
    clear: () => memoryStorage.clear(),
    key: (index: number) => Array.from(memoryStorage.keys())[index] || null,
    get length() { return memoryStorage.size; },
  };
}

// Polyfill navigator
if (typeof global.navigator === 'undefined') {
    // @ts-ignore
    global.navigator = {};
}
// @ts-ignore
if (!global.navigator.userAgent) {
    // @ts-ignore
    global.navigator.userAgent = "React Native";
}
