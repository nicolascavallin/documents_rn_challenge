import React, { FC } from "react";
import { Text, View } from "react-native";

import PlusIcon from "@assets/icons/plus";
import { useCustomBottomSheet } from "@components/BottomSheet/hook";
import Button from "@components/Button";
import NewDocument from "@screens/NewDocument";
import { colors } from "@theme";
import useSafeArea from "@theme/useSafeArea";

import styles from "./styles";

interface FooterButtonProps {}

const FooterButton: FC<FooterButtonProps> = ({}) => {
  const { paddingBottom } = useSafeArea();
  const { ref, handleOpenModal } = useCustomBottomSheet();

  return (
    <>
      <View style={[styles.container, { paddingBottom }]}>
        <Button onPress={handleOpenModal}>
          <PlusIcon stroke={colors.white} />
          <Text style={styles.textButton}>Add document</Text>
        </Button>
      </View>
      <NewDocument ref={ref} />
    </>
  );
};

export default FooterButton;
