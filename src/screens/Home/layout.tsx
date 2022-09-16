import React, { FC } from "react";
import { View } from "react-native";

import Header from "@components/Header";

import styles from "./styles";

interface HomeScreenLayoutProps {}

const HomeScreenLayout: FC<HomeScreenLayoutProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Header title="Documents" />
    </View>
  );
};

export default HomeScreenLayout;
