import { Header } from '@rneui/themed';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import CameraScreen from './screens/CameraScreen';

export default function App() {
  return (
    <View className="flex-1  w-screen items-center justify-center bg-teal-100">
      <Header centerComponent={{text: "300-react-native"}}></Header>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <CameraScreen/>
      <StatusBar style="auto" />
    </View>
  );
}