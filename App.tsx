import React from "react";

import { AppProvider } from "@context";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import HomeScreen from "@screens/Home";
import { SafeAreaProvider } from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaProvider>
      <BottomSheetModalProvider>
        <AppProvider>
          <HomeScreen />
        </AppProvider>
      </BottomSheetModalProvider>
    </SafeAreaProvider>
  );
};

export default App;
