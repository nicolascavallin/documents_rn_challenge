import React from "react";

import { AppProvider } from "@context";
import HomeScreen from "@screens/Home";
import { SafeAreaProvider } from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaProvider>
      <AppProvider>
        <HomeScreen />
      </AppProvider>
    </SafeAreaProvider>
  );
};

export default App;
