import { Link } from "expo-router";
import { View } from "react-native";

export default function TabOneScreen() {
  return (
    <View
      style={{ alignItems: "center", justifyContent: "center", height: "100%" }}
    >
      <Link href={"/user/69"}>User 69</Link>
      <Link href={"/user/420"}>User 420</Link>
    </View>
  );
}
