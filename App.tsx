import React from "react";
import { Provider as PaperProvider, MD3LightTheme } from "react-native-paper";
import RootNavigator from "./src/navigation/RootNavigator";
import "./src/globalFont";

const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: "#000",   // your blue for active states
    onSurface: "#000",    // main text color (black)
    outline: "#000",      // border/outline color
    surface: "#fff",      // card/background surface white
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <RootNavigator />
    </PaperProvider>
  );
}
