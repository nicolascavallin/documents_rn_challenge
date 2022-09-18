import React, { FC } from "react";
import { Text, View } from "react-native";

import IconButton from "@components/IconButton";
import useNotifications from "@context/notifications/hook";
import useSafeArea from "@theme/useSafeArea";

import styles from "./styles";

export interface HeaderLayoutProps {
  title?: string;
}

const HeaderLayout: FC<HeaderLayoutProps> = ({ title }) => {
  const { headerHeight: height, paddingTop } = useSafeArea();
  const { notifications } = useNotifications();

  return (
    <View style={[styles.container, { height, paddingTop }]}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <IconButton
          badge={notifications.length}
          icon="notification"
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

export default HeaderLayout;
