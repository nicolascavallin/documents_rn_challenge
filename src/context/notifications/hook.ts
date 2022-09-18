import { useContext } from "react";

import AppContext from "./";

const useNotifications = () => {
  const { actions, state } = useContext(AppContext);
  return {
    ...actions,
    ...state,
  };
};

export default useNotifications;
