import { useRef, useState } from "react";
import { Alert } from "react-native";

import { BottomSheetModal, useBottomSheetModal } from "@gorhom/bottom-sheet";

export const useCustomBottomSheet = () => {
  //
  const { dismiss } = useBottomSheetModal();

  const ref = useRef<BottomSheetModal>(null);
  const [canBeClosed, setCanBeClosed] = useState(false);

  const onClose = () => {
    if (canBeClosed) {
      dismiss();
    } else {
      Alert.alert(
        "Are you sure you want to close the bottom sheet?",
        undefined,
        [
          {
            style: "destructive",
            text: "Yes",
            onPress: dismiss,
          },
          {
            style: "cancel",
            text: "No",
          },
        ],
      );
    }
  };

  const onPresent = () => ref?.current?.present();

  return { ref, canBeClosed, setCanBeClosed, onPresent, onClose };
};
