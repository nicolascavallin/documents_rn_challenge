import React, { FC, ReactNode } from "react";
import { Text, View } from "react-native";

import Button from "@components/Button";
import useSafeArea from "@theme/useSafeArea";

import styles from "./styles";

interface FooterButtonProps {
  title: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onPress: () => void;
  isDisabled?: boolean;
  isLoading?: boolean;
}

const FooterButton: FC<FooterButtonProps> = ({
  title,
  leftIcon,
  rightIcon,
  onPress,
  isDisabled,
  isLoading,
}) => {
  const { paddingBottom } = useSafeArea();

  console.log("leftIcon", leftIcon);
  console.log("rightIcon", rightIcon);
  return (
    <>
      <View style={[styles.container, { paddingBottom }]}>
        <Button disabled={isDisabled} isLoading={isLoading} onPress={onPress}>
          {leftIcon ? leftIcon : null}
          <Text style={styles.textButton}>{title}</Text>
          {rightIcon ? rightIcon : null}
        </Button>
      </View>
    </>
  );
};

export default FooterButton;
