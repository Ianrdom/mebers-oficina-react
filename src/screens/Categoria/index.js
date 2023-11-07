import React, { useEffect, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

import {
  Image,
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

import api from "../../services/api";
import { formatNumber } from "../../helpers/formatNumber";
export default function Item({ route, navigation }) {
  const { categoria } = route.params;
  const [produtos, setprodutos] = useState([]);

  useEffect(() => {
    async function carregarprodutos() {
      const response = await api.get("produtos/?categoria=1");
      const data = response.data.map((produto) => ({
        id: produto.id,
        capa: produto.imagens.find((imagem) => imagem.principal).imagem.url,
        imagens: produto.imagens,
        nome: produto.nome,
        precoRAW: produto.preco,
        preco: formatNumber(produto.preco),
      }));

      setprodutos(data);
    }
    carregarprodutos();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TouchableOpacity
          style={{ marginTop: 15 }}
          onPress={() => navigation.navigate("Home")}
        >
          <MaterialIcons name="arrow-back-ios" size={25} color="#ff6500" />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text style={styles.titulo}>Produtos da categoria Pneu</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.vejaMais}>Ver mais</Text>
          </TouchableOpacity>
        </View>
        <ScrollView showsHorizontalScrollIndicator={false} style={styles.lista}>
          {produtos.map((produto) => (
            <TouchableOpacity
              style={styles.item}
              key={produto.id}
              onPress={() => navigation.navigate("Item", { item: produto })}
            >
              <Image source={{ uri: produto.capa }} style={styles.imagem} />

              <View style={styles.info}>
                <Text style={styles.tituloItem}>{produto.nome}</Text>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#171c22",
    height: "100%",
  },
  detalhe: {
    marginTop: 10,
    marginBottom: 0,
    marginHorizontal: 20,
  },
  itemImage: {
    height: 250,
    width: 250,
    resizeMode: "cover",
    borderRadius: 5,
    alignSelf: "center",
  },
  itemTitulo: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    marginTop: 10,
  },
  itemIngredientes: {
    fontSize: 18,
    color: "#fff",
    marginTop: 10,
  },
  itemPreco: {
    color: "white",
    fontSize: 23,
    fontWeight: "bold",
  },
  itemPrecoAntigo: {
    color: "grey",
    fontSize: 15,
    textDecorationLine: "line-through",
  },
  entrega: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 2,
    padding: 15,
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
  },

  containerItem: {
    marginLeft: 10,
  },

  containerInfo: {
    flexDirection: "column",
  },
  botaoComprar: {
    padding: 10,
    marginVertical: 10,
    flexDirection: "row",
    marginRight: 10,
    backgroundColor: "green",
    width: "45%",
    fontWeight: "bold",
    borderRadius: 5,
    justifyContent: "center",
  },

  containerInput: {
    background: "#EEE",
    height: "auto",
    flexDirection: "row",
    alignItems: "center",
    margin: 20,
    paddingLeft: 10,
    borderRadius: 4,
    width: "auto",
  },
  textInput: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    color: "#fff",
    width: "80%",
  },
  curtida: {
    padding: 10,
    marginVertical: 10,
    flexDirection: "row",
    marginLeft: 10,
    backgroundColor: "#383f47",
    borderRadius: 30,
  },
  compartilhar: {
    padding: 10,
    marginVertical: 10,
    flexDirection: "row",
    marginRight: 10,
    backgroundColor: "#383f47",
    borderRadius: 30,
  },
  opcoes: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bottomMenu: {
    flexDirection: "column",
    backgroundColor: "#101214",
    height: 150,
    width: "100%",
    marginTop: 10,
  },
  adicionarCarrinho: {
    borderColor: "#ff6500",
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    flexDirection: "row",
    marginRight: 10,
    width: "45%",
    fontWeight: "bold",
    borderRadius: 5,
    justifyContent: "center",
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
    height: "100%",
  },
  imagem: {
    height: 120,
    resizeMode: "contain",
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
