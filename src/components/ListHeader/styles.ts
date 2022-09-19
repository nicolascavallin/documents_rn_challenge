import { StyleSheet } from "react-native";

import { colors, fonts } from "@theme";

export default StyleSheet.create({
  container: {
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  actionsContainer: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.grayLine,
    overflow: "hidden",
    height: 36,
    minWidth: 118,
    flexDirection: "row",
    backgroundColor: colors.white,
  },
  dropdown: {
    width: 190,
  },
  dropdownOption: {
    ...fonts.selector,
  },
  dropdownSelected: {
    ...fonts.selector,
    marginLeft: 16,
  },
  squareButton: {
    height: 36,
    width: 36,
    alignItems: "center",
    justifyContent: "center",
    borderLeftWidth: 1,
    borderLeftColor: colors.grayLine,
  },
  actionButton: {
    flex: 1,
    backgroundColor: colors.bodyGray,
    alignItems: "center",
    justifyContent: "center",
  },
  actionButtonSelected: {
    backgroundColor: colors.white,
  },
});
