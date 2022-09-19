import React, { Dispatch, FC, SetStateAction } from "react";
import { TouchableOpacity, View } from "react-native";

import { Dropdown } from "react-native-element-dropdown";

import ArrowDownIcon from "@assets/icons/arrow-down";
import ColumnIcon from "@assets/icons/column";
import GridIcon from "@assets/icons/grid";
import { SortOption, sortOptions } from "@screens/Home/utils";
import { colors } from "@theme";

import styles from "./styles";

interface ListHeaderProps {
  useGrid: boolean;
  setGrid: () => void;
  setColumn: () => void;
  sortOption: SortOption;
  setSortOption: Dispatch<SetStateAction<SortOption>>;
}

const ListHeader: FC<ListHeaderProps> = ({
  useGrid,
  setGrid,
  setColumn,
  sortOption,
  setSortOption,
}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.actionsContainer, styles.dropdown]}>
        <Dropdown
          data={sortOptions}
          itemTextStyle={styles.dropdownOption}
          labelField="label"
          renderRightIcon={() => (
            <View style={styles.squareButton}>
              <ArrowDownIcon />
            </View>
          )}
          selectedTextProps={{ numberOfLines: 1 }}
          selectedTextStyle={styles.dropdownSelected}
          style={{ flex: 1 }}
          value={sortOption}
          valueField="value"
          onChange={item => setSortOption(item.value)}
        />
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
