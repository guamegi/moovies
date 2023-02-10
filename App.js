import { StatusBar } from "expo-status-bar";
import React from "react";
import AppLoading from "expo-app-loading";
import { useAssets } from "expo-asset";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import Root from "./navigation/Root";

export default function App() {
  const [assets] = useAssets([require("./myImage.jpg")]);
  const [fonts] = Font.useFonts(Ionicons.font);
  if (!assets || !fonts) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
}
