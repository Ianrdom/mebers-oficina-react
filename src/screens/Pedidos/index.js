import React, { useEffect, useState } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import api from "../../services/api";

export default function Pedidos() {
  const [pedidos, setPedidos] = useState([]);
  useEffect(() => {
    async function carregarPedidos() {
      const response = await api.get("compras");
      setPedidos(response.data);
    }

    carregarPedidos();
  }, []);
  // console.log(pedidos);
  return (
    <View style={styles.container}>
      <Text style={styles.aviso}>Você ainda não fez nenhum pedido</Text>
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
  aviso: {
    marginTop: 25,
    fontSize: 18,
    color: "#333",
  },
});
