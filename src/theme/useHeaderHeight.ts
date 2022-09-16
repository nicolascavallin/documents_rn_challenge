import { useMemo } from "react";

import { useSafeAreaInsets } from "react-native-safe-area-context";

const HEADER_HEIGHT = 62;

export const useHeaderHeight = () => {
  const { top } = useSafeAreaInsets();

  return useMemo(
    () => ({
      height: HEADER_HEIGHT + top,
      paddingTop: top,
    }),
    [top],
  );
};
