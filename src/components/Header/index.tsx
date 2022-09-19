import React, { FC } from "react";
import { Text, View } from "react-native";

import IconButton from "@components/IconButton";
import useNotifications from "@context/notifications/hook";
import useSafeArea from "@theme/useSafeArea";

import styles from "./styles";

export interface HeaderProps {
  title?: string;
}

const Header: FC<HeaderProps> = ({ title }) => {
  const { headerHeight: height, paddingTop } = useSafeArea();

  const { notifications, openNotifications } = useNotifications();

  const unviewedNotifications = notifications.filter(
    notification => !notification.Viewed,
  ).length;

  return (
    <>
      <View style={[styles.container, { height, paddingTop }]}>
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <IconButton
            badge={unviewedNotifications}
            icon="notification"
            onPress={openNotifications}
          />
        </View>
      </View>
    </>
  );
};

export default Header;
