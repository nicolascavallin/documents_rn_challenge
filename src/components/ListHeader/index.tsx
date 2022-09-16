import React, { FC } from "react";
import { TouchableOpacity, View } from "react-native";

import ArrowDownIcon from "@assets/icons/arrow-down";
import ColumnIcon from "@assets/icons/column";
import GridIcon from "@assets/icons/grid";
import { colors } from "@theme";

import styles from "./styles";

interface ListHeaderProps {
  useGrid: boolean;
  setGrid: () => void;
  setColumn: () => void;
}

const ListHeader: FC<ListHeaderProps> = ({ useGrid, setGrid, setColumn }) => {
  return (
    <View style={styles.container}>
      <View style={styles.actionsContainer}>
        <View
          style={{
            flex: 1,
            borderRightWidth: 1,
            borderRightColor: colors.grayLine,
          }}
        />
        <TouchableOpacity style={styles.squareButton}>
          <ArrowDownIcon />
        </TouchableOpacity>
      </View>
      <View style={styles.actionsContainer}>
        <TouchableOpacity
          style={[styles.actionButton, !useGrid && styles.actionButtonSelected]}
          onPress={setColumn}>
          <ColumnIcon stroke={!useGrid ? colors.blueAccent : colors.grayText} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.actionButton, useGrid && styles.actionButtonSelected]}
          onPress={setGrid}>
          <GridIcon stroke={useGrid ? colors.blueAccent : colors.grayText} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ListHeader;
