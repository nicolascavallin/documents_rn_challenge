import * as React from "react";
import { memo } from "react";

import Svg, { Path, SvgProps } from "react-native-svg";

import { colors } from "@theme";

const SvgComponent = (props: SvgProps) => (
  <Svg
    fill="none"
    height={18}
    stroke={colors.grayIcon}
    strokeWidth={2.3}
    viewBox="0 0 24 24"
    width={18}
    {...props}>
    <Path d="M1 20v-1a7 7 0 0 1 7-7v0a7 7 0 0 1 7 7v1" strokeLinecap="round" />
    <Path d="M13 14v0a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v.5" strokeLinecap="round" />
    <Path
      d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm10-3a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
