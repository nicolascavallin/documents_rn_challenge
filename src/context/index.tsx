import React, {
  createContext,
  FC,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";

import api from "./api";
import { Context, Document, Status } from "./types";

const AppContext = createContext({} as Context);

const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  // const ws = useRef(new WebSocket("ws://localhost:8080/notifications")).current;

  // React.useEffect(() => {
  //   // const serverMessagesList = [];
  //   ws.onopen = () => {
  //     // setServerState('Connected to the server')
  //     // setDisableButton(false);
  //     console.log("open");
  //   };
  //   ws.onclose = e => {
  //     // setServerState('Disconnected. Check internet or server.')
  //     // setDisableButton(true);
  //     console.log("close");
  //   };
  //   ws.onerror = e => {
  //     // setServerState(e.message);
  //     console.log("error");
  //   };
  //   ws.onmessage = e => {
  //     // serverMessagesList.push(e.data);
  //     // setServerMessages([...serverMessagesList])
  //     console.log("msg", e.data);
  //   };
  // }, [ws]);
  const [status, setStatus] = useState<Status>(Status.idle);
  const [documents, setDocuments] = useState<Document[]>([]);

  /**
   * Considering that there is no extra neededs for initial login,
   * the pull to refresh method is reutilized for the initial .
   */
  const handlePullToRefresh = () =>
    api.getDocuments({ setStatus, setDocuments });

  useEffect(() => {
    handlePullToRefresh();
  }, []);

  const state = {
    status,
    documents,
  };
  const actions = {
    handlePullToRefresh,
  };

  return (
    <AppContext.Provider value={{ state, actions }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext as default, AppProvider };
