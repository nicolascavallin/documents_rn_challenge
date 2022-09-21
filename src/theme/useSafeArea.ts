import { useMemo } from "react";

import { useSafeAreaInsets } from "react-native-safe-area-context";

const HEADER_HEIGHT = 62;
const SMALL_MARGIN = 8;
const MEDIUM_MARGIN = 16;

export default () => {
  const { top, bottom } = useSafeAreaInsets();

  return useMemo(
    () => ({
      headerHeight: HEADER_HEIGHT + top,
      paddingTop: top,
      paddingBottom: bottom > 0 ? bottom : MEDIUM_MARGIN,
      listPaddingBottom: bottom + SMALL_MARGIN,
    }),
    [top, bottom],
  );
};
