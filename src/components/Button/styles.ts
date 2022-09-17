import { StyleSheet } from "react-native";

import { colors } from "@theme";

export default StyleSheet.create({
  container: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.blueAccent,
    borderRadius: 8,
    flexDirection: "row",
  },
  disabled: {
    opacity: 0.7,
  },
});
