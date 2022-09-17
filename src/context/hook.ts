import { useContext } from "react";

import AppContext from "./";

const useApp = () => {
  const { actions, state } = useContext(AppContext);
  return {
    ...actions,
    ...state,
  };
};

export default useApp;
