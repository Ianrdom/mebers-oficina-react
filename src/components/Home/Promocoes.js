import React, { useState, useEffect } from "react";
import { Image, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import api from "../../services/api";
import { View } from "react-native-web";

export default function Promocoes({ navigation }) {
  const [promocoes, setPromocoes] = useState([]);

  useEffect(() => {
    async function carregarPromocoes() {
      const response = await api.get("promotions");
      setPromocoes(response.data);
    }
    carregarPromocoes();
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
      showsHorizontalScrollIndicator={false}
      horizontal
    >
      {promocoes.map((promocao) => (
        <TouchableOpacity style={styles.item} key={promocao.id}>
          <Image source={{ uri: promocao.promo_url }} style={styles.imagem} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  lista: {
    marginVertical: 20,
    marginHorizontal: 0,
    paddingLeft: 5,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  item: {
    marginLeft: 15,
  },
  imagem: {
    width: 300,
    height: 150,
  },
});
