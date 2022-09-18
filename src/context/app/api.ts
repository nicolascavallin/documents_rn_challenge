import { Dispatch, SetStateAction } from "react";

import { ApiData, Status } from "./types";

const API_URL = "http://localhost:8080/documents";

export default {
  getDocuments: async ({
    setApiData,
  }: {
    setApiData: Dispatch<SetStateAction<ApiData>>;
  }) => {
    try {
      setApiData(oldStatus => ({ ...oldStatus, status: Status.loading }));
      const request = await fetch(API_URL);
      const response = await request.json();

      /**
       * Probably is missing a normalization function. Not needed now considering
       * the API response is already normalized.
       */

      setApiData({ status: Status.ready, documents: response });
    } catch (error) {
      setApiData({ status: Status.error, documents: [] });
    }
  },
};
