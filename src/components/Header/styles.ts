import { StyleSheet } from "react-native";

import { colors } from "@theme";

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.grayLine,
  },
  content: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 16,
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    color: colors.blackText,
  },
});
