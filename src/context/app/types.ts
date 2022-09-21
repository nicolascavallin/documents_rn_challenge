export interface Context {
  state: {
    apiData: ApiData;
  };
  actions: {
    handlePullToRefresh: () => void;
    openNewDocument: () => void;
    handleAddDocument: (payload: CreateDocument) => Promise<Document | null>;
  };
}

export interface ApiData {
  status: Status;
  documents: Document[];
}

export enum Status {
  idle = "IDLE",
  loading = "LOADING",
  error = "ERROR",
  ready = "READY",
}

export interface Document {
  ID: string;
  CreatedAt: Date;
  UpdatedAt: Date;
  Title: string;
  Attachments: string[];
  Contributors: Contributor[];
  Version: string;
}

export interface Contributor {
  ID: string;
  Name: string;
}

export interface CreateDocument {
  name: string;
  version: string;
}
