import React, { FC, useCallback, useMemo, useState } from "react";
import { FlatList, RefreshControl, View } from "react-native";

import DocumentItem from "@components/DocumentItem";
import FooterButton from "@components/FooterButton";
import Header from "@components/Header";
import ListHeader from "@components/ListHeader";
import useApp from "@context/app/hook";
import { Document, Status } from "@context/app/types";

import styles from "./styles";

interface HomeScreenLayoutProps {}

const HomeScreenLayout: FC<HomeScreenLayoutProps> = ({}) => {
  const {
    apiData: { documents, status },
    handlePullToRefresh,
  } = useApp();

  const [useGrid, setUseGrid] = useState(() => false);

  const handleSetGrid = () => setUseGrid(true);
  const handleSetColumn = () => setUseGrid(false);

  const ListHeaderComponent = useMemo(
    () => (
      <ListHeader
        setColumn={handleSetColumn}
        setGrid={handleSetGrid}
        useGrid={useGrid}
      />
    ),
    [useGrid],
  );

  const refreshControl = useMemo(
    () => (
      <RefreshControl
        refreshing={status === Status.loading}
        onRefresh={handlePullToRefresh}
      />
    ),
    [handlePullToRefresh, status],
  );

  const renderItem = useCallback(
    ({ item }: { item: Document }) => (
      <DocumentItem document={item} key={item.ID} smallVersion={useGrid} />
    ),
    [useGrid],
  );

  const documentsSorted = useMemo(() => {
    return documents.sort((a, b) => {
      const dateA = new Date(a.CreatedAt);
      const dateB = new Date(b.CreatedAt);
      return dateB.getTime() - dateA.getTime();
    });
  }, [documents]);

  return (
    <View style={styles.container}>
      <Header title="Documents" />
      <FlatList
        contentContainerStyle={[styles.contentContainerStyle]}
        data={documentsSorted}
        key={useGrid ? "grid" : "list"}
        ListHeaderComponent={ListHeaderComponent}
        numColumns={useGrid ? 2 : 1}
        refreshControl={refreshControl}
        renderItem={renderItem}
      />
      <FooterButton />
    </View>
  );
};

export default HomeScreenLayout;
