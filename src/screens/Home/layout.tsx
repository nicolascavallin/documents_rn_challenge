import React, { FC, useMemo, useState } from "react";
import { FlatList, RefreshControl, View } from "react-native";

import DocumentItem from "@components/DocumentItem";
import Header from "@components/Header";
import ListHeader from "@components/ListHeader";
import useApp from "@context/hook";
import { Status } from "@context/types";
import useSafeArea from "@theme/useSafeArea";

import styles from "./styles";

interface HomeScreenLayoutProps {}

const HomeScreenLayout: FC<HomeScreenLayoutProps> = ({}) => {
  const { listPaddingBottom: paddingBottom } = useSafeArea();
  const { documents, status } = useApp();

  const [useGrid, setUseGrid] = useState(false);

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

  return (
    <View style={styles.container}>
      <Header title="Documents" />
      <FlatList
        contentContainerStyle={[
          styles.contentContainerStyle,
          { paddingBottom },
        ]}
        data={documents}
        key={useGrid ? "grid" : "list"}
        ListHeaderComponent={ListHeaderComponent}
        numColumns={useGrid ? 2 : 1}
        refreshControl={
          <RefreshControl
            refreshing={status === Status.loading}
            onRefresh={() => {}}
          />
        }
        renderItem={({ item }) => (
          <DocumentItem document={item} key={item.ID} smallVersion={useGrid} />
        )}
      />
    </View>
  );
};

export default HomeScreenLayout;
