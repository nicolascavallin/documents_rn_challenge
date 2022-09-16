import { StyleSheet } from "react-native";

import colors from "@theme/colors";

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
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