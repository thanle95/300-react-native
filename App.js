import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import CameraScreen from './screens/CameraScreen';
import { Header } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  return (
    <View className="flex-1  w-screen items-center justify-center bg-teal-100">
      <Header></Header>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <CameraScreen/>
      <StatusBar style="auto" />
    </View>
  );
}