import { Dispatch, SetStateAction } from "react";

import { Document, Status } from "./types";

const API_URL = "http://localhost:8080/documents";
// const WS_URL = "ws://localhost:8080/notifications";

export default {
  getDocuments: async ({
    setStatus,
    setDocuments,
  }: {
    setStatus: Dispatch<SetStateAction<Status>>;
    setDocuments: Dispatch<SetStateAction<Document[]>>;
  }) => {
    try {
      setStatus(Status.loading);
      const request = await fetch(API_URL);
      const response = await request.json();

      /**
       * Probably is missing a normalization function, not needed now considering
       * the API response is already normalized.
       */

      setStatus(Status.ready);
      setDocuments(response);
    } catch (error) {
      setStatus(Status.error);
      setDocuments([]);
    }
  },
};
