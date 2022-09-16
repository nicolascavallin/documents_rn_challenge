export type Icon = "notification";

import { FunctionComponent } from "react";

import Notification from "@assets/notification";

export const icons: Record<Icon, FunctionComponent<any>> = {
  notification: Notification,
};
