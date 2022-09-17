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

  useEffect(() => {
    api.getDocuments(setStatus).then(setDocuments);
  }, []);

  const state = {
    status,
    documents,
  };
  const actions = {};

  return (
    <AppContext.Provider value={{ state, actions }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext as default, AppProvider };
