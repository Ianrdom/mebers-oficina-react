import React from "react";

import { ScrollView, StyleSheet, View } from "react-native";
import Endereco from "../../components/Home/Endereco";
import Input from "../../components/Input";

import Produtos from "../../components/Home/Produtos";
import Categoria from "../../components/Home/Categoria";

export default function Home({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "#1a1f24" }}>
      <View style={{ justifyContent: "center" }}>
        <Input placeholder="Busque por item ou loja" />
        <Endereco />
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={true}
        style={styles.container}
      >
        <Categoria navigation={navigation} />
        <Produtos navigation={navigation} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#171c22",
  },
});
