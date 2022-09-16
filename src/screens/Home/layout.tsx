import React, { FC, useMemo, useState } from "react";
import { FlatList, View } from "react-native";

import DocumentItem from "@components/DocumentItem";
import Header from "@components/Header";
import ListHeader from "@components/ListHeader";
import useSafeArea from "@theme/useSafeArea";

import styles from "./styles";

interface HomeScreenLayoutProps {}

const HomeScreenLayout: FC<HomeScreenLayoutProps> = ({}) => {
  const { listPaddingBottom: paddingBottom } = useSafeArea();

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
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}
        key={useGrid ? "grid" : "list"}
        ListHeaderComponent={ListHeaderComponent}
        numColumns={useGrid ? 2 : 1}
        renderItem={({ item }) => (
          <DocumentItem item={item} key={item} smallVersion={useGrid} />
        )}
      />
    </View>
  );
};

export default HomeScreenLayout;
