import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, ActivityIndicator } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { RTCView } from 'react-native-webrtc';
import { WebRTCStream } from '@nestri/input';
import { RNMouse } from './src/input/RNMouse';

// Default values
const DEFAULT_PEER_URL = "/dnsaddr/relay.dathorse.com/p2p/12D3KooWPK4v5wKYNYx9oXWjqLM8Xix6nm13o91j1Feqq98fLBsw";

type Screen = 'connect' | 'play';

export default function App() {
  const [screen, setScreen] = useState<Screen>('connect');
  const [roomId, setRoomId] = useState('');
  const [peerUrl, setPeerUrl] = useState(DEFAULT_PEER_URL);

  const handleConnect = () => {
    if (roomId.trim().length > 0) {
      setScreen('play');
    } else {
        console.warn("Please enter a Room ID");
    }
  };

  const handleDisconnect = () => {
    setScreen('connect');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      {screen === 'connect' ? (
        <ConnectScreen
          roomId={roomId}
          setRoomId={setRoomId}
          peerUrl={peerUrl}
          setPeerUrl={setPeerUrl}
          onConnect={handleConnect}
        />
      ) : (
        <PlayScreen
          roomId={roomId}
          peerUrl={peerUrl}
          onDisconnect={handleDisconnect}
        />
      )}
    </SafeAreaView>
  );
}

function ConnectScreen({ roomId, setRoomId, peerUrl, setPeerUrl, onConnect }: any) {
  return (
    <View style={styles.content}>
        <Text style={styles.title}>Nestri Play</Text>
        <View style={styles.form}>
            <Text style={styles.label}>Room ID</Text>
            <TextInput
                style={styles.input}
                value={roomId}
                onChangeText={setRoomId}
                placeholder="Enter Room ID"
                autoCapitalize="none"
            />
            <Text style={styles.label}>Peer URL</Text>
            <TextInput
                style={styles.input}
                value={peerUrl}
                onChangeText={setPeerUrl}
                placeholder="Enter Peer URL"
                autoCapitalize="none"
                multiline
            />
            <TouchableOpacity style={styles.button} onPress={onConnect}>
                <Text style={styles.buttonText}>Connect</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

function PlayScreen({ roomId, peerUrl, onDisconnect }: any) {
    const [stream, setStream] = useState<any>(null);
    const [status, setStatus] = useState('Connecting...');
    const [rnMouse, setRnMouse] = useState<RNMouse | null>(null);

    const lastTouch = useRef<{x: number, y: number} | null>(null);

    useEffect(() => {
        let wrtc: WebRTCStream | null = null;
        let mouse: RNMouse | null = null;

        const init = async () => {
             try {
                console.log("Connecting to", peerUrl, "room", roomId);
                wrtc = new WebRTCStream(peerUrl, roomId, (mediaStream) => {
                    console.log("Connected callback", mediaStream);
                     if (mediaStream) {
                         setStream(mediaStream);
                         setStatus('Connected');
                     } else {
                         setStream(null);
                         setStatus('Disconnected (or Reconnecting...)');
                     }
                });

                mouse = new RNMouse(wrtc);
                setRnMouse(mouse);
            } catch (e: any) {
                console.error("Failed to init WebRTC", e);
                setStatus('Error: ' + e.message);
            }
        };

        init();

        return () => {
            console.log("Cleaning up WebRTC");
            if (mouse) mouse.dispose();
            if (wrtc) wrtc.disconnect();
        };
    }, [roomId, peerUrl]);

    const handleTouchStart = (e: any) => {
        const { pageX, pageY } = e.nativeEvent;
        lastTouch.current = { x: pageX, y: pageY };
        return true;
    };

    const handleTouchMove = (e: any) => {
         const { pageX, pageY } = e.nativeEvent;
         if (lastTouch.current && rnMouse) {
             const dx = pageX - lastTouch.current.x;
             const dy = pageY - lastTouch.current.y;
             rnMouse.move(dx, dy);
         }
         lastTouch.current = { x: pageX, y: pageY };
         return true;
    };

    const handleTouchEnd = () => {
        lastTouch.current = null;
        return true;
    };

    return (
        <View style={styles.playContainer}
             onStartShouldSetResponder={() => true}
             onMoveShouldSetResponder={() => true}
             onResponderGrant={handleTouchStart}
             onResponderMove={handleTouchMove}
             onResponderRelease={handleTouchEnd}
        >
           {stream ? (
               <RTCView
                   streamURL={stream.toURL()}
                   objectFit="contain"
                   style={styles.video}
               />
           ) : (
               <View style={styles.loadingContainer}>
                   <ActivityIndicator size="large" color="#007AFF" />
                   <Text style={styles.statusText}>{status}</Text>
               </View>
           )}

           <View style={styles.overlay}>
               <TouchableOpacity onPress={onDisconnect} style={styles.disconnectButton}>
                    <Text style={styles.disconnectText}>✕</Text>
               </TouchableOpacity>

               <View style={styles.mouseButtons}>
                    <TouchableOpacity
                        style={styles.mouseBtn}
                        onPressIn={() => rnMouse?.down(0)}
                        onPressOut={() => rnMouse?.up(0)}
                    >
                        <Text style={styles.mouseBtnText}>L</Text>
                    </TouchableOpacity>
                     <TouchableOpacity
                        style={styles.mouseBtn}
                        onPressIn={() => rnMouse?.down(2)}
                        onPressOut={() => rnMouse?.up(2)}
                    >
                        <Text style={styles.mouseBtnText}>R</Text>
                    </TouchableOpacity>
               </View>
           </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  form: {
    width: '100%',
    maxWidth: 400,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  // Play Screen Styles
  playContainer: {
    flex: 1,
    backgroundColor: '#000',
    position: 'relative',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusText: {
    color: '#fff',
    marginTop: 10,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'box-none',
    justifyContent: 'space-between',
    padding: 20,
  },
  disconnectButton: {
      alignSelf: 'flex-end',
      backgroundColor: 'rgba(255, 0, 0, 0.5)',
      width: 40,
      height: 40,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
  },
  disconnectText: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
  },
  mouseButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 40,
      width: '100%',
  },
  mouseBtn: {
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      width: 80,
      height: 80,
      borderRadius: 40,
      justifyContent: 'center',
      alignItems: 'center',
  },
  mouseBtnText: {
      color: '#fff',
      fontSize: 24,
      fontWeight: 'bold',
  },
});
