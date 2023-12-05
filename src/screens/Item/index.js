import React from "react";
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
import { userState } from "../../services/recoilAuth";
import { useSetRecoilState } from "recoil";
export default function Item({ route, navigation }) {
  const { item } = route.params;
  const imagens = item.imagens;
  const setUser = useSetRecoilState(userState);
  class ComprarApi {
    async comprar(item, usuario) {
      try {
        const { data } = await api.post("/compras/", {
          usuario: 1,
          itens: [
            {
              item,
              quantidade: 1,
            },
          ],
        });
        return Promise.resolve(data);
      } catch (error) {
        return Promise.error(error);
      }
    }
  }

  const comprar = async () => {
    try {
      await new ComprarApi().comprar(item.id, 1);
      console.log("compra bem sucedida");
    } catch (error) {
      console.log("compra mal sucedida");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TouchableOpacity
          style={{ marginTop: 10 }}
          onPress={() => navigation.navigate("Home")}
        >
          <MaterialIcons name="arrow-back-ios" size={25} color="#ff6500" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={true}>
        <View style={styles.detalhe}></View>

        <View style={styles.containerItem}>
          <View style={styles.containerInfo}>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal
              style={styles.slideImage}
            >
              {imagens.map((imagem) => (
                <Image
                  style={styles.itemImage}
                  source={{ uri: imagem.imagem.url }}
                  key={imagem.id}
                />
              ))}
            </ScrollView>

            <View style={{ marginHorizontal: 10 }}>
              <View style={styles.opcoes}>
                <TouchableOpacity style={styles.curtida}>
                  <MaterialIcons
                    name="favorite-border"
                    size={15}
                    color="white"
                  />
                  <Text style={{ color: "white", fontSize: 12 }}>
                    Adicionar aos favoritos
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.compartilhar}>
                  <MaterialIcons name="share" size={15} color="white" />
                  <Text style={{ color: "white", fontSize: 12 }}>
                    Compartilhar
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.info}>
                <Text style={styles.itemTitulo}>{item.nome}</Text>
                <View style={{ alignSelf: "flex-end" }}>
                  <Text style={{ color: "white" }}>
                    Adicionar estrelas aqui
                  </Text>
                </View>

                <Text style={styles.itemPreco}>{item.preco}</Text>
                <Text style={{ color: "grey", fontSize: 15 }}>
                  Ou em até 2x de {parseInt(item.precoRAW) / 2} sem juros
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomMenu}>
        <View style={{ flexDirection: "row", height: "50%" }}>
          <View
            style={{
              flexDirection: "column",
              width: "100%",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              {item.preco}
            </Text>
            <Text style={{ color: "grey", fontSize: 15 }}>
              Ou em até 2x de {item.precoRAW / 2} sem juros
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            marginHorizontal: "3%",
          }}
        >
          <TouchableOpacity
            style={styles.botaoComprar}
            onPress={() => comprar()}
          >
            <Text style={{ color: "white" }}>Comprar</Text>
          </TouchableOpacity>
        </View>
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
});
