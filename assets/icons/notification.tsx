import * as React from "react";
import { memo } from "react";

import Svg, { Path, SvgProps } from "react-native-svg";

import { colors } from "@theme";

const SvgComponent = (props: SvgProps) => (
  <Svg
    fill="none"
    height={18}
    stroke={colors.grayIcon}
    strokeWidth={2.1}
    viewBox="0 0 24 24"
    width={18}
    {...props}>
    <Path
      d="M18 8.4c0-1.697-.632-3.325-1.757-4.525C15.117 2.675 13.59 2 12 2c-1.591 0-3.117.674-4.243 1.875C6.632 5.075 6 6.703 6 8.4 6 15.867 3 18 3 18h18s-3-2.133-3-9.6zM13.73 21a1.999 1.999 0 0 1-3.46 0"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
