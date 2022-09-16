import React, { FC, useEffect } from "react";
import { Pressable, Text } from "react-native";

import { colors } from "@theme/";
import { springIn, springOut } from "@utils/reanimated";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import styles from "./styles";
import { Icon, icons } from "./utils";

interface IconButtonProps {
  icon: Icon;
  badge?: number;
}

const IconButton: FC<IconButtonProps> = ({ icon, badge = 0 }) => {
  const badgeAnimatedValue = useSharedValue(0);

  const badgeAnimatedStyle = useAnimatedStyle(() => ({
    opacity: badgeAnimatedValue.value,
    transform: [
      {
        scale: badgeAnimatedValue.value,
      },
    ],
  }));

  useEffect(() => {
    if (badge > 0) {
      badgeAnimatedValue.value = withSpring(1, springIn);
    } else {
      badgeAnimatedValue.value = withSpring(0, springOut);
    }
  }, [badge, badgeAnimatedValue]);

  const badgeValue = badge > 9 ? "+9" : badge;

  const IconComponent = icons[icon];

  return (
    <Pressable style={styles.container}>
      <IconComponent stroke={colors.grayIcon} />
      <Animated.View style={[styles.badgeContainer, badgeAnimatedStyle]}>
        <Text style={styles.badgeText}>{badgeValue}</Text>
      </Animated.View>
    </Pressable>
  );
};

export default IconButton;
