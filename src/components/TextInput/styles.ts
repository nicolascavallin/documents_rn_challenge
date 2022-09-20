import { StyleSheet } from "react-native";

import { colors, fonts } from "@theme";

export default StyleSheet.create({
  label: {
    ...fonts.subtitle,
    marginBottom: 8,
  },
  textInput: {
    padding: 8,
    paddingVertical: 12,
    fontSize: 15,
    borderWidth: 1,
    borderColor: colors.grayLine,
    borderRadius: 4,
  },
});
