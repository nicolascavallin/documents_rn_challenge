import { Dispatch, SetStateAction } from "react";

import { ApiData, CreateDocument, Document, Status } from "./types";

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
  createDocument: async (
    payload: CreateDocument,
    setApiData: Dispatch<SetStateAction<ApiData>>,
  ): Promise<Document | null> => {
    try {
      /**
       * In terms to simulate an HTTP Post Request, I'm using a "pause" timer
       */

      // @ts-ignore
      await new Promise(resolve => setTimeout(resolve, 1000));

      const newDocument: Document = {
        ID: new Date().toISOString(),
        CreatedAt: new Date(),
        UpdatedAt: new Date(),
        Title: payload.name,
        Attachments: ["Notes template"],
        Contributors: [{ ID: "1", Name: "John Doe" }],
        Version: payload.version,
      };

      setApiData(oldState => ({
        ...oldState,
        documents: [newDocument, ...oldState.documents],
      }));

      return newDocument;
    } catch (error) {
      return null;
    }
  },
};
