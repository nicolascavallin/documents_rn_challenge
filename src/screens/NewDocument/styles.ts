import { StyleSheet } from "react-native";

import { fonts } from "@theme";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: "center",
  },
  title: fonts.header,
  formTitle: {
    ...fonts.title,
    marginBottom: 8,
  },
  closeButton: {
    padding: 4,
  },
  formContainer: {
    padding: 16,
    flex: 1,
  },
  inputContainer: {
    marginVertical: 8,
  },
});
