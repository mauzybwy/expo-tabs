import { Link } from "expo-router";
import { View } from "react-native";

export default function IndexScreen() {
  return (
    <View
      style={{ alignItems: "center", justifyContent: "center", height: "100%" }}
    >
      <Link href={"/user/1"}>User 1</Link>
      <Link href={"/user/2"}>User 2</Link>
    </View>
  );
}
