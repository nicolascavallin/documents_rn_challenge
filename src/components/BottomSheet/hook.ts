import { useRef, useState } from "react";
import { Alert } from "react-native";

import { BottomSheetModal, useBottomSheetModal } from "@gorhom/bottom-sheet";

export const useCustomBottomSheet = () => {
  const { dismiss } = useBottomSheetModal();

  const ref = useRef<BottomSheetModal>(null);
  const [canModalBeClosed, setCanModalBeClosed] = useState(true);

  const handleOpenModal = () => ref?.current?.present();

  const handleCloseModal = () => {
    if (canModalBeClosed) {
      dismiss();
    } else {
      Alert.alert(
        "Wait a minute...",
        "You will lose your changes. Are you sure you want to close the modal?",
        [
          {
            style: "destructive",
            text: "Yes, close",
            onPress: dismiss,
          },
          {
            style: "cancel",
            text: "No, cancel",
          },
        ],
      );
    }
  };

  const forceClose = dismiss;

  return {
    ref,
    handleOpenModal,
    handleCloseModal,
    canModalBeClosed,
    setCanModalBeClosed,
    forceClose,
  };
};
