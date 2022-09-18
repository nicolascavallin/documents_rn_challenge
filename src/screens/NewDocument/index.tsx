import React, { Ref } from "react";
import { forwardRef } from "react";

import { BottomSheetModal } from "@gorhom/bottom-sheet";

import BottomSheet from "@components/BottomSheet";

import NewDocumentLayout from "./layout";

interface NewDocumentProps {}

const NewDocument = forwardRef(
  ({}: NewDocumentProps, ref: Ref<BottomSheetModal>) => {
    return (
      <BottomSheet ref={ref} snapPoints={["80%"]}>
        <NewDocumentLayout />
      </BottomSheet>
    );
  },
);

export default NewDocument;
