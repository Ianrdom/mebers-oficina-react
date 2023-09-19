import React from "react";
import CupomDesconto from "../../components/Carrinho/CupomDesconto";
import TotalCompra from "../../components/Carrinho/TotalCompra";

import { View, Text, StyleSheet } from "react-native";

export default function Carrinho() {
  return (
    <View style={styles.container}>
      <Text>Carrinho</Text>
      <View style={styles.comprasContainer}>
        <CupomDesconto />
        <TotalCompra />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#171c22",
    alignItems: "center",
    justifyContent: "center",
  },
  comprasContainer: {
    flex: 1,
    backgroundColor: "#171c22",
    alignContent: "center",
    justifyContent: "flex-end",
    width: "100%",
  },
});
