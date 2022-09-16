import React from "react";

import HomeScreen from "@screens/Home";
import { SafeAreaProvider } from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaProvider>
      <HomeScreen />
    </SafeAreaProvider>
  );
};

export default App;
