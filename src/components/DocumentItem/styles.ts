import { StyleSheet } from "react-native";

import { colors, defaultShadow } from "@theme";

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
  title: {
    color: colors.blackText,
    fontSize: 18,
    fontWeight: "600",
  },
  titleRow: {
    marginBottom: 12,
  },
  titleColumn: {
    marginRight: 12,
  },
  smallText: {
    color: colors.grayText,
    fontSize: 13,
    fontWeight: "500",
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
    color: colors.blackText,
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 8,
  },
  rowDataText: {
    marginTop: 4,
  },
});
