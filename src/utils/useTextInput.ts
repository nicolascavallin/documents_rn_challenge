import { useState } from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";

export const useTextInput = (): [
  string,
  (e: NativeSyntheticEvent<TextInputChangeEventData>) => void,
] => {
  const [value, setValue] = useState("");
  const onChangeText = (e: NativeSyntheticEvent<TextInputChangeEventData>) =>
    setValue(e.nativeEvent.text);

  return [value, onChangeText];
};
