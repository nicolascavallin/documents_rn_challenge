export type Icon = "notification";

import { FunctionComponent } from "react";

import Notification from "@assets/icons/notification";

export const icons: Record<Icon, FunctionComponent<any>> = {
  notification: Notification,
};
