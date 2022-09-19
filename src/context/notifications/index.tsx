import React, {
  createContext,
  FC,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react";

import { useCustomBottomSheet } from "@components/BottomSheet/hook";
import Notifications from "@screens/Notifications";

import { Context, Notification } from "./types";

const WS_URL = "ws://localhost:8080/notifications";

const NotificationsContext = createContext({} as Context);

const NotificationsProvider: FC<PropsWithChildren> = ({ children }) => {
  //
  const { ref, handleOpenModal } = useCustomBottomSheet();

  const openNotifications = handleOpenModal;

  const [notifications, setNotifications] = useState<Notification[]>([]);

  const ws = useRef(new WebSocket(WS_URL)).current;
  useEffect(() => {
    ws.onmessage = (event: WebSocketMessageEvent) => {
      setNotifications(oldStatus => [
        {
          ...JSON.parse(event.data),
          Viewed: false,
        },
        ...oldStatus,
      ]);
    };
    return () => {
      setNotifications([]);
      ws.close();
    };
  }, [ws]);

  const markNotificationsAsViewed = () => {
    setNotifications(oldStatus =>
      oldStatus.map(notification => ({
        ...notification,
        Viewed: true,
      })),
    );
  };

  const state = {
    notifications,
  };
  const actions = {
    markNotificationsAsViewed,
    openNotifications,
  };

  return (
    <NotificationsContext.Provider value={{ state, actions }}>
      {children}
      <Notifications
        markNotificationsAsViewed={markNotificationsAsViewed}
        notifications={notifications}
        ref={ref}
      />
    </NotificationsContext.Provider>
  );
};

export { NotificationsContext as default, NotificationsProvider };
