import { StyleSheet } from "react-native";

import { colors, defaultShadow, fonts } from "@theme";

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    margin: 8,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 24,
    ...defaultShadow,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  title: fonts.title,
  titleRow: {
    marginBottom: 12,
  },
  titleColumn: {
    marginRight: 12,
  },
  smallText: fonts.smallText,
  textLimiter: {
    flex: 1,
  },
  dataContainer: {
    marginTop: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowDataContainer: {
    flex: 1,
  },
  rowTitleContainer: {
    flexDirection: "row",
    alignContent: "center",
    marginBottom: 4,
  },
  rowTitle: {
    ...fonts.subtitle,
    marginLeft: 8,
  },
  rowDataText: {
    marginTop: 4,
  },
});
