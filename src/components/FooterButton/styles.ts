import { StyleSheet } from "react-native";

import { colors } from "@theme";

export default StyleSheet.create({
  container: {
    borderTopWidth: 1,
    padding: 16,
    borderTopColor: colors.grayLine,
  },
  textButton: {
    color: colors.white,
    fontWeight: "600",
    fontSize: 16,
    marginLeft: 4,
  },
});
