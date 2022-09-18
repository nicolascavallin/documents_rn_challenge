import React, {
  createContext,
  FC,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react";

import { Context, Notification } from "./types";

const WS_URL = "ws://localhost:8080/notifications";

const NotificationsContext = createContext({} as Context);

const NotificationsProvider: FC<PropsWithChildren> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const ws = useRef(new WebSocket(WS_URL)).current;
  useEffect(() => {
    ws.onmessage = (event: WebSocketMessageEvent) => {
      setNotifications(oldStatus => [JSON.parse(event.data), ...oldStatus]);
    };
    return () => {
      setNotifications([]);
      ws.close();
    };
  }, [ws]);

  const state = {
    notifications,
  };
  const actions = {};

  return (
    <NotificationsContext.Provider value={{ state, actions }}>
      {children}
    </NotificationsContext.Provider>
  );
};

export { NotificationsContext as default, NotificationsProvider };
