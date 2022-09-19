import React, { Dispatch, Ref, SetStateAction } from "react";
import { forwardRef } from "react";

import { BottomSheetModal } from "@gorhom/bottom-sheet";

import BottomSheet from "@components/BottomSheet";

import NewDocumentLayout from "./layout";

interface NewDocumentProps {
  canModalBeClosed: boolean;
  handleClose: () => void;
  setCanModalBeClosed: Dispatch<SetStateAction<boolean>>;
}

const NewDocument = forwardRef(
  (
    { canModalBeClosed, handleClose, setCanModalBeClosed }: NewDocumentProps,
    ref: Ref<BottomSheetModal>,
  ) => {
    return (
      <BottomSheet
        enablePanDownToClose={canModalBeClosed}
        ref={ref}
        snapPoints={["80%"]}>
        <NewDocumentLayout
          handleClose={handleClose}
          setCanModalBeClosed={setCanModalBeClosed}
        />
      </BottomSheet>
    );
  },
);

export default NewDocument;
