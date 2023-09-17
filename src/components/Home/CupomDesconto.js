import React from "react";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";

export default function CupomDesconto() {
  return (
    <TouchableOpacity style={styles.cupom}>
      <View style={styles.divisor}>
        <View style={styles.conteudo}>
          <MaterialCommunityIcons
            name="ticket-percent"
            color={"#ff6500"}
            size={35}
          />
          <View style={styles.info}>
            <Text style={styles.titulo}>Cupom de R$10</Text>
            <Text style={styles.validade}>Válido até as 17:30</Text>
          </View>
        </View>
        <MaterialIcons
          name="keyboard-arrow-right"
          color={"#ff6500"}
          size={20}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cupom: {
    borderColor: "rgba(0,0,0,.1)",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginVertical: 0,
    marginHorizontal: 20,
    marginBottom: 5,
  },
  divisor: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  conteudo: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 50,
    height: 50,
  },
  info: {
    marginLeft: 10,
  },
  titulo: {
    fontWeight: "bold",
    color: "#ff6500",
  },
  validade: {
    marginTop: 5,
    color: "#ff6500",
  },
});
