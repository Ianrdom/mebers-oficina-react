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

export default function Item({ route, navigation }) {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <MaterialIcons name="arrow-back-ios" size={25} color="orange" />
        </TouchableOpacity>

        <TextInput
          style={styles.textInput}
          placeholderTextColor="#fff"
          placeholder={"Faça a sua pesquisa"}
        />
        <MaterialIcons name="search" size={25} color={"orange"} />
      </View>

      <ScrollView showsVerticalScrollIndicator={true}>
        <View style={styles.detalhe}></View>

        <View style={styles.containerItem}>
          <View style={styles.containerInfo}>
            <Image style={styles.itemImage} source={{ uri: item.offer_url }} />
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
                <Text style={styles.itemTitulo}>{item.title}</Text>
                <View style={{ alignSelf: "flex-end" }}>
                  <Text style={{ color: "white" }}>
                    Adicionar estrelas aqui
                  </Text>
                </View>
                <Text style={styles.itemPrecoAntigo}>{item.price}</Text>
                <Text style={styles.itemPreco}>{item.newPrice}</Text>
                <Text style={{ color: "grey", fontSize: 15 }}>
                  Ou em até 2x de {item.newPrice / 2} sem juros
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomMenu}>
        <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
          <View
            style={{
              flexDirection: "column",
              height: "50%",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              {item.newPrice}
            </Text>
            <Text style={{ color: "grey", fontSize: 15 }}>
              Ou em até 2x de {item.newPrice / 2} sem juros
            </Text>
          </View>
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
    backgroundColor: "rgb(52, 249, 86)",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    padding: 20,
    marginTop: 10,
    marginLeft: 10,
    height: "10%",
    width: "30%",
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
    flexDirection: "row",
    backgroundColor: "#101214",
    height: 150,
    width: "100%",
    marginTop: 10,
  },
});
