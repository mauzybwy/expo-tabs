import { Link, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function Screen() {
  const { id } = useLocalSearchParams();

  return (
    <View
      style={{ alignItems: "center", justifyContent: "center", height: "100%" }}
    >
      <Text>USER #{id}</Text>
      <Link href={`/post/${id}`}>GO TO POST</Link>
    </View>
  );
}
