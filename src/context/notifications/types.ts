export interface Context {
  state: {
    notifications: Notification[];
  };
  actions: {
    markNotificationsAsViewed: () => void;
    openNotifications: () => void;
  };
}

export interface Notification {
  Timestamp: Date;
  UserID: string;
  UserName: string;
  DocumentID: string;
  DocumentTitle: string;
  Viewed: boolean;
}
