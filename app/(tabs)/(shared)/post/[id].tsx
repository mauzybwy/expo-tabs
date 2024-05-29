import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";

export default function Screen() {
  const { id } = useLocalSearchParams();

  return <Text>Post #{id}</Text>;
}
