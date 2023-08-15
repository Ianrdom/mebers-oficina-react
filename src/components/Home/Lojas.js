import React, { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import api from "../../services/api";

export default function Lojas() {
  const [Lojas, setLojas] = useState([]);

  useEffect(() => {
    async function carregarLojas() {
      const response = await api.get("sellers");
      setLojas(response.data);
    }
    carregarLojas();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titulo}>Lojas</Text>
      </View>
      <ScrollView style={styles.lista}>
        {Lojas.map((seller) => (
          <TouchableOpacity style={styles.item} key={seller.id}>
            <Image source={{ uri: seller.sellers_url }} style={styles.imagem} />
            <View style={styles.info}>
              <Text style={styles.sellerTitulo}>{seller.title}</Text>
              <View style={styles.descricao}>
                <MaterialIcons name="star" size={20} color="#FF7C01" />
                <Text style={styles.estrela}>{seller.star || "Novo!"}</Text>
                <Text style={styles.categorias}> {seller.categories}</Text>
                <Text style={styles.distancia}> {seller.distance}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginLeft: 20,
    marginRight: 0,
  },
  titulo: {
    fontSize: 23,
    fontWeight: "bold",
  },
  lista: {
    marginTop: 10,
  },
  item: {
    flexDirection: "row",
    padding: 20,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(0,0,0,0.1)",
    borderRadius: 4,
    marginTop: 5,
    marginRight: 15,
  },
  imagem: {
    width: 60,
    height: 60,
    borderRadius: 30,
    resizeMode: "contain",
  },
  info: {
    marginLeft: 15,
  },
  sellerTitulo: {
    fontWeight: "bold",
    color: "#333",
  },
  descricao: {
    flexDirection: "row",
    marginTop: 3,
    alignItems: "center",
  },
  estrela: {
    fontSize: 14,
    color: "#999",
  },
  categorias: {
    fontSize: 14,
    color: "#999",
  },
  distancia: {
    fontSize: 14,
    color: "#999",
  },
  atraso: {
    marginTop: 15,
    fontSize: 14,
    color: "#999",
  },
});
