import React, { FC } from "react";
import { Text, View } from "react-native";

import PlusIcon from "@assets/icons/plus";
import Button from "@components/Button";
import { colors } from "@theme";
import useSafeArea from "@theme/useSafeArea";

import styles from "./styles";

interface FooterButtonProps {}

const FooterButton: FC<FooterButtonProps> = ({}) => {
  const { paddingBottom } = useSafeArea();
  return (
    <View style={[styles.container, { paddingBottom }]}>
      <Button>
        <PlusIcon stroke={colors.white} />
        <Text style={styles.textButton}>Add document</Text>
      </Button>
    </View>
  );
};

export default FooterButton;
