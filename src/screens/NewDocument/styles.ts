import { StyleSheet } from "react-native";

import { fonts } from "@theme";

export default StyleSheet.create({
  container: {},
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: "center",
  },
  title: fonts.header,
  closeButton: {
    padding: 4,
  },
});
