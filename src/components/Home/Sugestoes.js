import React, { useState, useEffect } from "react";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import api from "../../services/api";

export default function Sugestoes() {
  const [sugestoes, setSugestoes] = useState([]);
  useEffect(() => {
    async function carregarSugestoes() {
      const response = await api.get("suggestions");
      setSugestoes(response.data);
    }
    carregarSugestoes();
  }, []);
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      style={styles.lista}
    >
      {sugestoes.map((sugestao) => (
        <TouchableOpacity style={styles.item} key={sugestao.id}>
          <Image source={{ uri: sugestao.sugg_url }} style={styles.imagem} />
          <Text style={styles.titulo}>{sugestao.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  lista: {
    marginTop: 20,
    paddingLeft: 5,
  },
  item: {
    alignItems: "center",
    marginLeft: 10,
    marginBottom: 10,
  },
  imagem: {
    width: 300,
    height: 150,
  },
  titulo: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontWeight: "bold",
    fontSize: 30,
    color: "white",
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 6,
  },
});
