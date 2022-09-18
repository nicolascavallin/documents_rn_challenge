import React, { FC, useCallback } from "react";
import { Text, View } from "react-native";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import AttachedIcon from "@assets/icons/attached";
import GroupIcon from "@assets/icons/group";
import { Contributor, Document } from "@context/app/types";
import { cardColumn, cardGrid } from "@theme/cardSize";

dayjs.extend(relativeTime);

import styles from "./styles";

interface DocumentItemProps {
  document: Document;
  smallVersion?: boolean;
}

const DocumentItem: FC<DocumentItemProps> = ({ document, smallVersion }) => {
  const width = smallVersion ? cardGrid : cardColumn;

  const renderContributor = useCallback(
    (contributor: Contributor) => (
      <Text
        key={contributor.ID}
        numberOfLines={1}
        style={[styles.smallText, styles.rowDataText]}>
        {contributor.Name}
      </Text>
    ),
    [],
  );

  const renderAttachment = useCallback(
    (attachment: string, index: number) => (
      <Text
        key={`${index}-${attachment}`}
        numberOfLines={1}
        style={[styles.smallText, styles.rowDataText]}>
        {attachment}
      </Text>
    ),
    [],
  );

  return (
    <View key={document.ID} style={[styles.container, { width }]}>
      <View style={[!smallVersion && styles.row]}>
        <Text
          numberOfLines={1}
          style={[
            styles.title,
            smallVersion ? styles.titleRow : styles.titleColumn,
            !smallVersion && styles.textLimiter,
          ]}>
          {document.Title}
        </Text>
        <Text style={[styles.smallText]}>Version {document.Version}</Text>
      </View>
      {!smallVersion ? (
        <>
          <View style={styles.dataContainer}>
            <View style={styles.rowDataContainer}>
              <View style={styles.rowTitleContainer}>
                <GroupIcon />
                <Text style={styles.rowTitle}>Contributors</Text>
              </View>
              {document.Contributors.map(renderContributor)}
            </View>
            <View style={styles.rowDataContainer}>
              <View style={styles.rowTitleContainer}>
                <AttachedIcon />
                <Text style={styles.rowTitle}>Attachments</Text>
              </View>
              {document.Attachments.map(renderAttachment)}
            </View>
          </View>
          <View style={styles.dataContainer}>
            <View style={styles.rowDataContainer}>
              <Text numberOfLines={1} style={[styles.smallText]}>
                Created {dayjs().to(document.CreatedAt)}
              </Text>
            </View>
            <View style={styles.rowDataContainer}>
              <Text numberOfLines={1} style={[styles.smallText]}>
                Updated {dayjs().to(document.UpdatedAt)}
              </Text>
            </View>
          </View>
        </>
      ) : null}
    </View>
  );
};

export default DocumentItem;
