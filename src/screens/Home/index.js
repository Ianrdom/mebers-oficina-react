import React from "react";

import { ScrollView, StyleSheet, View } from "react-native";
import Endereco from "../../components/Home/Endereco";
import Input from "../../components/Input";
import Promocoes from "../../components/Home/Promocoes";
import Ofertas from "../../components/Home/Ofertas";
import Categorias from "../../components/Home/Categorias";

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
        {/* <Promocoes />
        <Categorias /> */}
        <Ofertas navigation={navigation} />
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
