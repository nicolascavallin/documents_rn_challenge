import * as React from "react";
import { memo } from "react";

import Svg, { Path, SvgProps } from "react-native-svg";

import { colors } from "@theme";

const SvgComponent = (props: SvgProps) => (
  <Svg
    fill="none"
    height={18}
    stroke={colors.grayIcon}
    strokeWidth={2.5}
    viewBox="0 0 24 24"
    width={18}
    {...props}>
    <Path
      d="M6 12h6m6 0h-6m0 0V6m0 6v6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
