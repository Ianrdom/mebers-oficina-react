import React, { useEffect, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";

import api from "../../services/api";
import { formatNumber } from "../../helpers/formatNumber";

export default function produtos({ navigation }) {
  const [produtos, setprodutos] = useState([]);
  useEffect(() => {
    async function carregarprodutos() {
      const response = await api.get("produtos");
      const data = response.data.map((produto) => ({
        id: produto.id,
        produto_url: produto.imagens.imagem,
        nome: produto.nome,
        precoRAW: produto.preco,
        preco: formatNumber(produto.preco),
      }));
      console.log(data);
      setprodutos(data);
    }
    carregarprodutos();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.titulo}>Produtos Novos!</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.vejaMais}>Ver mais</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.lista}
      >
        {produtos.map((produto) => (
          <TouchableOpacity
            style={styles.item}
            key={produto.id}
            onPress={() => navigation.navigate("Item", { item: produto })}
          >
            <Image
              source={{ uri: produto.produto_url }}
              style={styles.imagem}
            />

            <View style={styles.info}>
              <Text numberOfLines={2} style={styles.tituloItem}>
                {produto.nome}
              </Text>
              <View style={styles.itemPreco}>
                <Text style={styles.preco}>{produto.preco}</Text>
              </View>
              <Text
                style={{
                  marginBottom: 5,
                  color: "grey",
                  fontSize: 12,
                  alignSelf: "center",
                }}
              >
                Em até 12x Sem Juros
              </Text>
              <TouchableOpacity
                style={{
                  alignSelf: "center",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#4263f5",
                  height: 32,
                  width: 70,
                  borderRadius: 4,
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    color: "#fff",
                  }}
                >
                  Frete Grátis
                </Text>
              </TouchableOpacity>
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
    marginHorizontal: 0,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 0,
    marginRight: 10,
    marginBottom: 15,
    marginLeft: 20,
  },
  titulo: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff",
  },
  tituloItem: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#fff",
    alignSelf: "center",
  },
  subTitulo: {
    color: "#fff",
  },
  vejaMais: {
    color: "#ff6500",
  },
  lista: {
    paddingLeft: 20,
  },
  item: {
    width: 200,
    marginRight: 15,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rbga(0,0,0, 0.06)",
    borderRadius: 4,
  },
  imagem: {
    height: 120,
    resizeMode: "stretch",
    backgroundColor: "#000",
  },
  info: {
    marginTop: "auto",
    padding: 10,
  },
  itemPreco: {
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  preco: {
    color: "#ff6500",
    fontWeight: "bold",
    fontSize: 18,
  },
});
