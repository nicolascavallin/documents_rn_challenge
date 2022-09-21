import React, { Dispatch, Ref, SetStateAction } from "react";
import { forwardRef } from "react";

import { BottomSheetModal } from "@gorhom/bottom-sheet";

import BottomSheet from "@components/BottomSheet";
import { CreateDocument } from "@context/app/types";

import NewDocumentLayout from "./layout";

interface NewDocumentProps {
  canModalBeClosed: boolean;
  handleClose: () => void;
  forceClose: () => void;
  setCanModalBeClosed: Dispatch<SetStateAction<boolean>>;
  handleAddDocument: (payload: CreateDocument) => Promise<Document | null>;
}

const NewDocument = forwardRef(
  (
    {
      canModalBeClosed,
      handleClose,
      setCanModalBeClosed,
      forceClose,
      handleAddDocument,
    }: NewDocumentProps,
    ref: Ref<BottomSheetModal>,
  ) => {
    return (
      <BottomSheet
        enablePanDownToClose={canModalBeClosed}
        ref={ref}
        snapPoints={["50%"]}>
        <NewDocumentLayout
          forceClose={forceClose}
          handleAddDocument={handleAddDocument}
          handleClose={handleClose}
          setCanModalBeClosed={setCanModalBeClosed}
        />
      </BottomSheet>
    );
  },
);

export default NewDocument;
