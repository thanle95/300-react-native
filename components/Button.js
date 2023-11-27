import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export default function Button({ title, onPress, icon, color }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="h-10 flex flex-row items-center justify-center"
    >
      <Entypo name={icon} size={28} color={color ? color : "#f1f1f1"} />
      <Text className="text-base font-bold m-0 text-[#f1f1f1]">{title}</Text>
    </TouchableOpacity>
  );
}
