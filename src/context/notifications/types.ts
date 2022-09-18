export interface Context {
  state: {
    notifications: Notification[];
  };
  actions: {};
}

export interface Notification {
  Timestamp: Date;
  UserID: string;
  UserName: string;
  DocumentID: string;
  DocumentTitle: string;
}
