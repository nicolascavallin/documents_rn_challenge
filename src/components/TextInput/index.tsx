import React, { FC } from "react";
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  Text,
  View,
  ViewStyle,
} from "react-native";

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
      <RNTextInput style={styles.textInput} {...textInputProps} />
    </View>
  );
};

export default TextInput;
