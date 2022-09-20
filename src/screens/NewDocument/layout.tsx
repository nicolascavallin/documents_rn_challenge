import React, { Dispatch, FC, SetStateAction } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { BottomSheetView } from "@gorhom/bottom-sheet";

import CloseIcon from "@assets/icons/close";
import FooterButton from "@components/FooterButton";
import TextInput from "@components/TextInput";

import styles from "./styles";

interface NewDocumentLayoutProps {
  handleClose: () => void;
  setCanModalBeClosed: Dispatch<SetStateAction<boolean>>;
}

const NewDocumentLayout: FC<NewDocumentLayoutProps> = ({
  handleClose,
  setCanModalBeClosed,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const setUnsavedChanges = () => setCanModalBeClosed(false);

  return (
    <BottomSheetView style={{ flex: 1 }}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Add document</Text>
        <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
          <CloseIcon />
        </TouchableOpacity>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Document informations</Text>
        <TextInput containerStyle={styles.inputContainer} label="Name" />
        <TextInput containerStyle={styles.inputContainer} label="Version" />
      </View>
      {/* <TouchableOpacity
        style={{ height: 10, backgroundColor: "red" }}
        onPress={() => setCanModalBeClosed(false)}
      />
      <TouchableOpacity
        style={{ height: 10, backgroundColor: "blue" }}
        onPress={() => setCanModalBeClosed(true)}
      /> */}
      <FooterButton title="Submit" onPress={() => {}} />
    </BottomSheetView>
  );
};

export default NewDocumentLayout;
