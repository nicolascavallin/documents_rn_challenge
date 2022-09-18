import React, {
  forwardRef,
  PropsWithChildren,
  Ref,
  useCallback,
  useMemo,
} from "react";

import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
} from "@gorhom/bottom-sheet";

import { colors } from "@theme";

interface BottomSheetProps {
  snapPoints?: string[];
  enablePanDownToClose?: boolean;
}

const BottomSheet = forwardRef(
  (
    {
      snapPoints: _snapPoints,
      enablePanDownToClose = true,
      children,
    }: PropsWithChildren<BottomSheetProps>,
    bottomSheetModalRef: Ref<BottomSheetModal>,
  ) => {
    const snapPoints = useMemo(() => _snapPoints || ["50%"], [_snapPoints]);

    const handleSheetChanges = useCallback((index: number) => {
      console.log("handleSheetChanges", index);
    }, []);

    const renderBackdrop = useCallback(
      (props: BottomSheetBackdropProps) => (
        <BottomSheetBackdrop
          {...props}
          appearsOnIndex={0}
          disappearsOnIndex={-1}
          pressBehavior={enablePanDownToClose ? "close" : "none"}
          style={[props.style, { backgroundColor: colors.blackText }]}
        />
      ),
      [enablePanDownToClose],
    );

    return (
      <BottomSheetModal
        backdropComponent={renderBackdrop}
        enableDismissOnClose={true}
        enablePanDownToClose={enablePanDownToClose}
        handleIndicatorStyle={{}}
        index={0}
        ref={bottomSheetModalRef}
        snapPoints={snapPoints}
        onAnimate={console.log}
        onChange={handleSheetChanges}>
        {children}
      </BottomSheetModal>
    );
  },
);

export default BottomSheet;
