import React, { FC } from "react";
import { Text, View } from "react-native";

import { useCustomBottomSheet } from "@components/BottomSheet/hook";
import IconButton from "@components/IconButton";
import useNotifications from "@context/notifications/hook";
import Notifications from "@screens/Notifications";
import useSafeArea from "@theme/useSafeArea";

import styles from "./styles";

export interface HeaderLayoutProps {
  title?: string;
}

const HeaderLayout: FC<HeaderLayoutProps> = ({ title }) => {
  const { headerHeight: height, paddingTop } = useSafeArea();

  const { notifications, markNotificationsAsViewed } = useNotifications();
  const { ref, onPresent } = useCustomBottomSheet();

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
            onPress={onPresent}
          />
        </View>
      </View>
      <Notifications
        markNotificationsAsViewed={markNotificationsAsViewed}
        notifications={notifications}
        ref={ref}
      />
    </>
  );
};

export default HeaderLayout;
