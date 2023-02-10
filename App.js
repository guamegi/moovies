import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import { useAssets } from "expo-asset";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/Tabs";
import Stack from "./navigation/Stack";

export default function App() {
  const [assets] = useAssets([require("./myImage.jpg")]);
  const [fonts] = Font.useFonts(Ionicons.font);
  if (!assets || !fonts) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      {/* <Tabs /> */}
      <Stack />
    </NavigationContainer>
  );
}
