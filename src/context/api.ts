import { Dispatch, SetStateAction } from "react";

import { Status } from "./types";

const API_URL = "http://localhost:8080/documents";
// const WS_URL = "ws://localhost:8080/notifications";

export default {
  getDocuments: async (setStatus: Dispatch<SetStateAction<Status>>) => {
    try {
      setStatus(Status.loading);
      const request = await fetch(API_URL);
      const response = await request.json();
      setStatus(Status.ready);
      return response;
    } catch (error) {
      setStatus(Status.error);
    }
  },
};
