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
