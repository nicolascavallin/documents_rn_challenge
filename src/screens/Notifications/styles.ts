import { StyleSheet } from "react-native";

import { colors, fonts } from "@theme";

export default StyleSheet.create({
  notificationContainer: {
    marginHorizontal: 16,
    paddingVertical: 8,
    paddingRight: 8,
    borderTopWidth: 1,
    borderTopColor: colors.grayLine,
  },
  header: {
    ...fonts.header,
    marginHorizontal: 16,
    marginBottom: 8,
  },
  notificationText: {
    ...fonts.smallText,
    color: colors.blackText,
  },
  notificationName: {
    fontWeight: "700",
  },
  notificationTime: {
    ...fonts.smallText,
    fontSize: 12,
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
