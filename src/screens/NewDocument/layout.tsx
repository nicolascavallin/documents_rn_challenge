import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";

import { BottomSheetView } from "@gorhom/bottom-sheet";

import CloseIcon from "@assets/icons/close";
import FooterButton from "@components/FooterButton";
import TextInput from "@components/TextInput";
import { CreateDocument, Status } from "@context/app/types";
import { useTextInput } from "@utils/useTextInput";

import styles from "./styles";

interface NewDocumentLayoutProps {
  handleClose: () => void;
  forceClose: () => void;
  setCanModalBeClosed: Dispatch<SetStateAction<boolean>>;
  handleAddDocument: (payload: CreateDocument) => Promise<Document | null>;
}

const NewDocumentLayout: FC<NewDocumentLayoutProps> = ({
  handleClose,
  forceClose,
  setCanModalBeClosed,
  handleAddDocument,
}) => {
  const [status, setStatus] = useState<Status>(Status.idle);

  const [name, setName] = useTextInput();
  const [version, setVersion] = useTextInput();

  useEffect(() => {
    if (name.length === 0 && version.length === 0) {
      setCanModalBeClosed(true);
    } else {
      setCanModalBeClosed(false);
    }
  }, [name, version, setCanModalBeClosed]);

  const isValid = name.length && version.length;

  const handleSubmit = async () => {
    setStatus(Status.loading);

    const response = await handleAddDocument({ name, version });

    if (response) {
      forceClose();
    } else {
      setStatus(Status.error);
      Alert.alert("Error", "Something went wrong, please try again later");
    }
  };

  return (
    <BottomSheetView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Add document</Text>
        <TouchableOpacity
          disabled={status === Status.loading}
          style={styles.closeButton}
          onPress={handleClose}>
          <CloseIcon />
        </TouchableOpacity>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Document informations</Text>
        <TextInput
          containerStyle={styles.inputContainer}
          label="Name"
          textInputProps={{
            value: name,
            onChange: setName,
          }}
        />
        <TextInput
          containerStyle={styles.inputContainer}
          label="Version"
          textInputProps={{
            value: version,
            onChange: setVersion,
          }}
        />
      </View>
      <FooterButton
        isDisabled={!isValid}
        isLoading={status === Status.loading}
        title="Submit"
        onPress={handleSubmit}
      />
    </BottomSheetView>
  );
};

export default NewDocumentLayout;
