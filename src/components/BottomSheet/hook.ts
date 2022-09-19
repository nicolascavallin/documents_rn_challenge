import { useRef, useState } from "react";
import { Alert } from "react-native";

import { BottomSheetModal, useBottomSheetModal } from "@gorhom/bottom-sheet";

export const useCustomBottomSheet = () => {
  //
  const { dismiss } = useBottomSheetModal();

  const ref = useRef<BottomSheetModal>(null);
  const [canModalBeClosed, setCanModalBeClosed] = useState(true);

  const handleOpenModal = () => ref?.current?.present();

  const handleCloseModal = () => {
    if (canModalBeClosed) {
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

  return {
    ref,
    handleOpenModal,
    handleCloseModal,
    canModalBeClosed,
    setCanModalBeClosed,
  };
};
