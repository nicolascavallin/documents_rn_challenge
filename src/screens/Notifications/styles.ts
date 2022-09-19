import { StyleSheet } from "react-native";

import { colors } from "@theme";

export default StyleSheet.create({
  notificationContainer: {
    marginHorizontal: 16,
    paddingVertical: 8,
    paddingRight: 8,
    borderTopWidth: 1,
    borderTopColor: colors.grayLine,
  },
  notificationText: {
    fontSize: 13,
    fontWeight: "500",
    color: colors.blackText,
  },
  notificationName: {
    fontWeight: "700",
  },
  notificationTime: {
    color: colors.grayText,
    fontSize: 12,
    fontWeight: "500",
    marginTop: 4,
  },
  notificationBadge: {
    position: "absolute",
    top: 13,
    right: 4,
    width: 6,
    height: 6,
    borderRadius: 6,
    backgroundColor: colors.blueAccent,
  },
});