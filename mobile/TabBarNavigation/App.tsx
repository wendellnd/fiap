import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import React from "react";

import { StatusBar } from "expo-status-bar";
import StackComponent from "./routes/stack.routes";

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar style="dark" />
      <StackComponent />
    </GestureHandlerRootView>
  );
}

export default App;
