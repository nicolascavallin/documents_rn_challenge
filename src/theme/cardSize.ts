import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const cardGrid = width / 2 - 24;
const cardColumn = width - 32;

export { cardGrid, cardColumn };
