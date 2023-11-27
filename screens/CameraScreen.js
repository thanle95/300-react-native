import { Camera, CameraType, FlashMode } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { useEffect, useRef, useState } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Button from '../components/Button'

export default function CameraScreen() {
  const [hasCameraPermission, setHasCameraPermission] = useState(
    Camera.useCameraPermissions()
  );
  const [image, setImage] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [flash, setFlash] = useState(FlashMode.off);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        setImage(data.uri);
      } catch (e) {
        console.log(e);
      }
    }
  };

  const saveImage = async () => {
    if (image) {
      try {
        await MediaLibrary.createAssetAsync(image);
        alert("Picture saved!");
        setImage(null);
      } catch (e) {
        console.log(e);
      }
    }
  };

  if (!hasCameraPermission) return <Text>No access to camera</Text>;

  return (
    <SafeAreaView className="flex-1 bg-black">
      {!image ? (
        <Camera
          className="flex-1 w-screen pb-20"
          type={type}
          flashMode={flash}
          ref={cameraRef}
        >
          <View className="flex flex-row justify-between px-20">
            <Button
              title=""
              icon="retweet"
              onPress={() =>
                setType(
                  type === CameraType.back ? CameraType.front : CameraType.back
                )
              }
            />
            <Button
              title=""
              icon="flash"
              color={flash === FlashMode.off ? "gray" : "#f1f1f1"}
              onPress={() =>
                setFlash(flash === FlashMode.off ? FlashMode.on : FlashMode.off)
              }
            />
          </View>
        </Camera>
      ) : (
        <Image
          source={{ uri: image }}
          className="flex-1 w-screen pb-20"
        ></Image>
      )}
      <View className="flex flex-row justify-between items-center px-20">
        {image ? (
          <View className="flex flex-row justify-between px-20">
            <Button
              title=""
              icon="retweet"
              onPress={() => setImage(null)}
            />
            <Button title="Save" icon="check" onPress={saveImage} />
          </View>
        ) : (
          <Button
            title=""
            icon="camera"
            onPress={takePicture}
          ></Button>
        )}
      </View>
    </SafeAreaView>
  );
}
