import React, { FC } from "react";
import {
  TextInputProps as RNTextInputProps,
  Text,
  View,
  ViewStyle,
} from "react-native";

import { BottomSheetTextInput } from "@gorhom/bottom-sheet";

import styles from "./styles";

interface TextInputProps {
  containerStyle?: ViewStyle;
  textInputProps?: RNTextInputProps;
  label?: string;
}

const TextInput: FC<TextInputProps> = ({
  containerStyle,
  label,
  textInputProps,
}) => {
  return (
    <View style={containerStyle}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <BottomSheetTextInput style={styles.textInput} {...textInputProps} />
    </View>
  );
};

export default TextInput;
