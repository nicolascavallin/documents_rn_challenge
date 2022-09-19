import React, {
  createContext,
  FC,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";

import { useCustomBottomSheet } from "@components/BottomSheet/hook";
import NewDocument from "@screens/NewDocument";

import api from "./api";
import { ApiData, Context, Status } from "./types";

const AppContext = createContext({} as Context);

const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  //
  const {
    ref,
    handleOpenModal: openNewDocument,
    canModalBeClosed,
    handleCloseModal,
    setCanModalBeClosed,
  } = useCustomBottomSheet();

  const [apiData, setApiData] = useState<ApiData>({
    status: Status.idle,
    documents: [],
  });

  /**
   * Considering that there is no extra neededs for initial login,
   * the pull to refresh method is reutilized for the initial .
   */
  const handlePullToRefresh = () => api.getDocuments({ setApiData });

  useEffect(() => {
    handlePullToRefresh();
  }, []);

  const state = {
    apiData,
  };
  const actions = {
    handlePullToRefresh,
    openNewDocument,
  };

  return (
    <AppContext.Provider value={{ state, actions }}>
      {children}
      <NewDocument
        canModalBeClosed={canModalBeClosed}
        handleClose={handleCloseModal}
        ref={ref}
        setCanModalBeClosed={setCanModalBeClosed}
      />
    </AppContext.Provider>
  );
};

export { AppContext as default, AppProvider };
