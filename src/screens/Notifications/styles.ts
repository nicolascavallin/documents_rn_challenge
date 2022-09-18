import { StyleSheet } from "react-native";

import { colors } from "@theme";

export default StyleSheet.create({
  notificationContainer: {
    marginHorizontal: 16,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: colors.grayLine,
  },
  notificationText: {
    fontSize: 15,
    fontWeight: "500",
    color: colors.blackText,
  },
  notificationName: {
    fontWeight: "700",
  },
  notificationTime: {
    color: colors.grayText,
    fontSize: 13,
    fontWeight: "500",
    marginTop: 4,
  },
});
