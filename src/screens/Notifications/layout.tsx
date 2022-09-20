import React, { FC, useMemo } from "react";
import { useCallback } from "react";
import { Text, View } from "react-native";

import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { Notification } from "@context/notifications/types";
import useSafeArea from "@theme/useSafeArea";

import styles from "./styles";

dayjs.extend(relativeTime);

interface NotificationsLayoutProps {
  notifications: Notification[];
}

const NotificationsLayout: FC<NotificationsLayoutProps> = ({
  notifications,
}) => {
  const { listPaddingBottom: paddingBottom } = useSafeArea();

  const renderItem = useCallback(
    ({ item }: { item: Notification }) => (
      <View
        key={item.DocumentID + item.UserID}
        style={styles.notificationContainer}>
        {!item.Viewed ? <View style={styles.notificationBadge} /> : null}
        <Text style={styles.notificationText}>
          <Text style={styles.notificationName}>{item.UserName}</Text> has
          created "{item.DocumentTitle}"
        </Text>
        <Text style={styles.notificationTime}>
          {dayjs().to(dayjs(item.Timestamp))}
        </Text>
      </View>
    ),
    [],
  );

  const ListHeaderComponent = useMemo(
    () => <Text style={styles.header}>Notifications</Text>,
    [],
  );

  return (
    <BottomSheetFlatList
      contentContainerStyle={{ paddingBottom }}
      data={notifications}
      ListHeaderComponent={ListHeaderComponent}
      renderItem={renderItem}
    />
  );
};

export default NotificationsLayout;
