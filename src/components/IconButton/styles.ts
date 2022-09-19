import { StyleSheet } from "react-native";

import { colors, fonts } from "@theme";

const BUTTON_SIZE = 36;
const BADGE_SIZE = 18;

export default StyleSheet.create({
  container: {
    height: BUTTON_SIZE,
    width: BUTTON_SIZE,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: colors.grayLine,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeContainer: {
    width: BADGE_SIZE,
    height: BADGE_SIZE,
    borderRadius: BADGE_SIZE,
    backgroundColor: colors.blueAccent,
    position: "absolute",
    top: 1,
    right: 1,
    borderWidth: 2,
    borderColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    ...fonts.badge,
    color: colors.white,
    textAlign: "center",
  },
});
