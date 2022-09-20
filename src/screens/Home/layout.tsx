import React, { FC, useCallback, useMemo, useState } from "react";
import { FlatList, RefreshControl, View } from "react-native";

import PlusIcon from "@assets/icons/plus";
import DocumentItem from "@components/DocumentItem";
import FooterButton from "@components/FooterButton";
import Header from "@components/Header";
import ListHeader from "@components/ListHeader";
import useApp from "@context/app/hook";
import { Document, Status } from "@context/app/types";
import { colors } from "@theme";

import styles from "./styles";
import { sortDocuments, SortOption } from "./utils";

interface HomeScreenLayoutProps {}

const HomeScreenLayout: FC<HomeScreenLayoutProps> = ({}) => {
  const {
    apiData: { documents, status },
    handlePullToRefresh,
    openNewDocument,
  } = useApp();

  const [sortOption, setSortOption] = useState(SortOption.created_new);
  const [useGrid, setUseGrid] = useState(() => false);

  const handleSetGrid = () => setUseGrid(true);
  const handleSetColumn = () => setUseGrid(false);

  const ListHeaderComponent = useMemo(
    () => (
      <ListHeader
        setColumn={handleSetColumn}
        setGrid={handleSetGrid}
        setSortOption={setSortOption}
        sortOption={sortOption}
        useGrid={useGrid}
      />
    ),
    [sortOption, useGrid],
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

  const documentsSorted = useMemo(
    () => sortDocuments(documents, sortOption),
    [documents, sortOption],
  );

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
      <FooterButton
        leftIcon={<PlusIcon stroke={colors.white} />}
        title="Add document"
        onPress={openNewDocument}
      />
    </View>
  );
};

export default HomeScreenLayout;
