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
          <Text style={styles.itemTitulo}>{item.title}</Text>
          <View style={styles.containerInfo}>
            <Image style={styles.itemImage} source={{ uri: item.offer_url }} />
            <View style={styles.info}>
              <Text style={styles.itemPreco}>{item.newPrice}</Text>
              <Text style={styles.itemPrecoAntigo}>{item.price}</Text>
            </View>
            <TouchableOpacity style={styles.botaoComprar}>
              <Text>Comprar</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.entrega}>
          <View style={styles.wrapper}>
            <MaterialIcons name={item.icon} size={22} color="#F01" />
            <Text style={styles.entregaTitulo}>{item.delivery}</Text>
          </View>
          <Text style={styles.entregaAtraso}>{item.delay}</Text>
        </View>
      </ScrollView>
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
    width: 300,
    resizeMode: "cover",
    borderRadius: 5,
  },
  itemTitulo: {
    fontSize: 32,
    color: "#333",

    marginTop: 10,
  },
  itemIngredientes: {
    fontSize: 18,
    color: "#fff",
    marginTop: 10,
  },
  itemPreco: {
    color: "green",
    fontSize: 22,
  },
  itemPrecoAntigo: {
    color: "#fff",
    fontSize: 22,
    textDecorationLine: "line-through",
    marginLeft: 5,
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
  entregaTitulo: {
    fontSize: 15,
    color: "red",
  },
  entregaAtraso: {
    marginLeft: 10,
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
    padding: 10,
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
});
