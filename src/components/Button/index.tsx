import React, { FC, PropsWithChildren } from "react";
import {
  ActivityIndicator,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import { activeOpacity, colors } from "@theme";

import styles from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  isLoading?: boolean;
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  isLoading,
  disabled,
  style,
  ...props
}) => {
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      disabled={disabled || isLoading}
      style={[styles.container, disabled && styles.disabled, style]}
      {...props}>
      {isLoading ? <ActivityIndicator color={colors.white} /> : children}
    </TouchableOpacity>
  );
};

export default Button;
