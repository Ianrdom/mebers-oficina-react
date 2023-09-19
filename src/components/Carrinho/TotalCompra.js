import React from "react";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Image, Text, View, StyleSheet } from "react-native";

export default function CupomDesconto() {
  return (
    <View style={styles.container}>
      <View style={styles.divisor}>
        <Text style={{ color: "#fff" }}>Total: 20 reais</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "flex-start",
    paddingVertical: 15,
    borderColor: "rgba(0,0,0,.1)",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 15,
  },
  divisor: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
