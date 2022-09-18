import React, { Ref } from "react";
import { forwardRef } from "react";

import { BottomSheetModal } from "@gorhom/bottom-sheet";

import BottomSheet from "@components/BottomSheet";
import { Notification } from "@context/notifications/types";

import NotificationsLayout from "./layouts";

interface NotificationsProps {
  notifications: Notification[];
  markNotificationsAsViewed: () => void;
}

const Notifications = forwardRef(
  (
    { notifications, markNotificationsAsViewed }: NotificationsProps,
    ref: Ref<BottomSheetModal>,
  ) => {
    return (
      <BottomSheet
        ref={ref}
        snapPoints={["50%", "80%"]}
        onClose={markNotificationsAsViewed}>
        <NotificationsLayout notifications={notifications} />
      </BottomSheet>
    );
  },
);

export default Notifications;
