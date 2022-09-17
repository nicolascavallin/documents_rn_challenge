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
    <Path d="M14 20.4v-5.8a.6.6 0 0 1 .6-.6h5.8a.6.6 0 0 1 .6.6v5.8a.6.6 0 0 1-.6.6h-5.8a.6.6 0 0 1-.6-.6zm-11 0v-5.8a.6.6 0 0 1 .6-.6h5.8a.6.6 0 0 1 .6.6v5.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6zm11-11V3.6a.6.6 0 0 1 .6-.6h5.8a.6.6 0 0 1 .6.6v5.8a.6.6 0 0 1-.6.6h-5.8a.6.6 0 0 1-.6-.6zm-11 0V3.6a.6.6 0 0 1 .6-.6h5.8a.6.6 0 0 1 .6.6v5.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6z" />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
