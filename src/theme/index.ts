import { StyleSheet } from "react-native";

export const colors = {
  white: "#FFFFFF",
  bodyGray: "#F3F4F6",
  blackText: "#1F2937",
  grayText: "#808692",
  grayIcon: "#434D5C",
  blueAccent: "#4181F2",
  grayLine: "#CFD3D9",
  shadowColor: "#D9D9D9",
};

export const defaultShadow = {
  shadowColor: colors.shadowColor,
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 1,
  shadowRadius: 3.84,
  elevation: 5,
};

export const fonts = StyleSheet.create({
  header: {
    fontWeight: "bold",
    fontSize: 24,
    color: colors.blackText,
  },
  title: {
    color: colors.blackText,
    fontSize: 18,
    fontWeight: "600",
  },
  subtitle: {
    color: colors.blackText,
    fontSize: 14,
    fontWeight: "600",
  },
  smallText: {
    color: colors.grayText,
    fontSize: 13,
    fontWeight: "500",
  },
  button: {
    color: colors.grayText,
    fontWeight: "600",
    fontSize: 16,
  },
  badge: {
    color: colors.grayText,
    fontWeight: "700",
    fontSize: 9,
  },
  selector: {
    color: colors.blackText,
    fontSize: 13,
    fontWeight: "500",
  },
});

export const activeOpacity = 0.7;
