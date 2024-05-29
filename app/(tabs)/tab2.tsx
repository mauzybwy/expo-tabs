import { Link } from "expo-router";
import { View } from "react-native";

export default function TabOneScreen() {
  return (
    <View
      style={{ alignItems: "center", justifyContent: "center", height: "100%" }}
    >
      <Link href={"/user/1000"}>User 1000</Link>
      <Link href={"/user/2000"}>User 2000</Link>
    </View>
  );
}
