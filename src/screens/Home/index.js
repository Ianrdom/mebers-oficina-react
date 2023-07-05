import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Categorias</Text>
      </View>
      <View>
        <ScrollView horizontal="true"> arrasta pro lado </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "column",
  },
});
