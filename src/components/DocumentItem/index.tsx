import React, { FC } from "react";
import { Text, View } from "react-native";

import AttachedIcon from "@assets/attached";
import GroupIcon from "@assets/group";
import { cardColumn, cardGrid } from "@theme/cardSize";

import styles from "./styles";

interface DocumentItemProps {
  item: number;
  smallVersion?: boolean;
}

const DocumentItem: FC<DocumentItemProps> = ({ item, smallVersion }) => {
  const width = smallVersion ? cardGrid : cardColumn;

  return (
    <View key={`${item}`} style={[styles.container, { width }]}>
      <View style={[!smallVersion && styles.row]}>
        <Text
          numberOfLines={1}
          style={[
            styles.title,
            smallVersion ? styles.titleRow : styles.titleColumn,
          ]}>
          Hop Rod Rye
        </Text>
        <Text style={[styles.smallText]}>Version 2.6.16</Text>
      </View>
      {!smallVersion ? (
        <View style={styles.dataContainer}>
          <View style={styles.rowDataContainer}>
            <View style={styles.rowTitleContainer}>
              <GroupIcon />
              <Text style={styles.rowTitle}>Contributors</Text>
            </View>
            <Text
              numberOfLines={1}
              style={[styles.smallText, styles.rowDataText]}>
              Carlie Abott
            </Text>
            <Text
              numberOfLines={1}
              style={[styles.smallText, styles.rowDataText]}>
              Zoe Buckridge
            </Text>
            <Text
              numberOfLines={1}
              style={[styles.smallText, styles.rowDataText]}>
              Carmen Kohler
            </Text>
            <Text
              numberOfLines={1}
              style={[styles.smallText, styles.rowDataText]}>
              Americo
            </Text>
            <Text
              numberOfLines={1}
              style={[styles.smallText, styles.rowDataText]}>
              Comier
            </Text>
          </View>
          <View style={styles.rowDataContainer}>
            <View style={styles.rowTitleContainer}>
              <AttachedIcon />
              <Text style={styles.rowTitle}>Attachments</Text>
            </View>
            <Text
              numberOfLines={1}
              style={[styles.smallText, styles.rowDataText]}>
              Light Lager
            </Text>
            <Text
              numberOfLines={1}
              style={[styles.smallText, styles.rowDataText]}>
              Porter
            </Text>
            <Text
              numberOfLines={1}
              style={[styles.smallText, styles.rowDataText]}>
              Sour Ale
            </Text>
            <Text
              numberOfLines={1}
              style={[styles.smallText, styles.rowDataText]}>
              German Wheat
            </Text>
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default DocumentItem;
