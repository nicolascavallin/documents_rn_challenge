import { StyleSheet } from "react-native";

import { colors, fonts } from "@theme";

export default StyleSheet.create({
  container: {
    borderTopWidth: 1,
    padding: 16,
    borderTopColor: colors.grayLine,
  },
  textButton: {
    ...fonts.button,
    color: colors.white,
    marginLeft: 4,
  },
});
