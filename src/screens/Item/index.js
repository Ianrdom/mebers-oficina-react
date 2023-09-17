import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

import {
  Image,
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function Item({ route, navigation }) {
  const { item } = route.params;

  return (
    <ScrollView showsVerticalScrollIndicator={true} style={styles.container}>
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
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#171c22",
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
  // info: {
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   width: "60%",
  // },
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
});
