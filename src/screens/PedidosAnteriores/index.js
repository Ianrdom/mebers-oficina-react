import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function PedidosAnteriores() {
  return (
    <View style={styles.container}>
      <Text>Pedidos Anteriores</Text>
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
});
