import React, { Dispatch, FC, SetStateAction } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { BottomSheetView } from "@gorhom/bottom-sheet";

import CloseIcon from "@assets/icons/close";

import styles from "./styles";

interface NewDocumentLayoutProps {
  handleClose: () => void;
  setCanModalBeClosed: Dispatch<SetStateAction<boolean>>;
}

const NewDocumentLayout: FC<NewDocumentLayoutProps> = ({
  handleClose,
  setCanModalBeClosed,
}) => {
  return (
    <BottomSheetView>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Add document</Text>
        <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
          <CloseIcon />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{ height: 10, backgroundColor: "red" }}
        onPress={() => setCanModalBeClosed(false)}
      />
      <TouchableOpacity
        style={{ height: 10, backgroundColor: "blue" }}
        onPress={() => setCanModalBeClosed(true)}
      />
    </BottomSheetView>
  );
};

export default NewDocumentLayout;
