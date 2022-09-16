import React, { FC } from "react";
import { Text, View } from "react-native";

import IconButton from "@components/IconButton";
import useSafeArea from "@theme/useSafeArea";

import styles from "./styles";

export interface HeaderLayoutProps {
  title?: string;
}

const HeaderLayout: FC<HeaderLayoutProps> = ({ title }) => {
  const { headerHeight: height, paddingTop } = useSafeArea();

  return (
    <View style={[styles.container, { height, paddingTop }]}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <IconButton badge={1} icon="notification" />
      </View>
    </View>
  );
};

export default HeaderLayout;
