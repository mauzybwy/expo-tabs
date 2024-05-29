import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <Tabs backBehavior="history">
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="tab1" options={{ title: "Tab 1" }} />
      <Tabs.Screen name="tab2" options={{ title: "Tab 2" }} />
      <Tabs.Screen name="(shared)" options={{ href: null }} />
    </Tabs>
  );
}
