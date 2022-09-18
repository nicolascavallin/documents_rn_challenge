import React from "react";

import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { AppProvider } from "@context/app";
import { NotificationsProvider } from "@context/notifications";
import HomeScreen from "@screens/Home";

const App = () => {
  return (
    <SafeAreaProvider>
      <BottomSheetModalProvider>
        <AppProvider>
          <NotificationsProvider>
            <HomeScreen />
          </NotificationsProvider>
        </AppProvider>
      </BottomSheetModalProvider>
    </SafeAreaProvider>
  );
};

export default App;
