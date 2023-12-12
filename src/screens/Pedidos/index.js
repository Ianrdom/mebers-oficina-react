import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  RefreshControl,
  ScrollView,
} from "react-native";
import api from "../../services/api";

export default function Pedidos() {
  const [refreshing, setRefreshing] = useState(false);
  const [pedidos, setPedidos] = useState([]);

  const carregarPedidos = async () => {
    const response = await api.get("compras");
    setPedidos(response.data);
  };
  useEffect(() => {
    carregarPedidos();
  }, []);
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await carregarPedidos();
    setRefreshing(false);
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView
        style={{ height: "100%" }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {pedidos.map((pedido) => (
          <View key={pedido.id} style={styles.pedidoContainer}>
            <Text style={{ color: "white" }}>Id do pedido: {pedido.id}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#171c22",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 100,
  },
  aviso: {
    marginTop: 25,
    fontSize: 18,
    color: "#333",
  },
  pedidoContainer: {
    backgroundColor: "grey",
  },
});
