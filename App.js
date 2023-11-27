import { Header } from '@rneui/themed';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import CameraScreen from './screens/CameraScreen';
import TodoListScreen from './screens/TodoListScreen';

export default function App() {
  return (
    <View className="flex-1">
      <Header centerComponent={{text: "300-react-native"}}></Header>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      {/* <CameraScreen/> */}
      <TodoListScreen/>
      <StatusBar style="auto" />
    </View>
  );
}