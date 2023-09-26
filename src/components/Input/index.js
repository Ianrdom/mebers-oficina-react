import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { TextInput, View, StyleSheet } from "react-native";

export default function Input(props) {
  return (
    <View style={styles.container}>
      <MaterialIcons name="search" size={25} color={"rgb(128, 0, 128)"} />

      <TextInput
        style={styles.textInput}
        placeholderTextColor="#fff"
        placeholder={props.placeholder}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    background: "#EEE",
    height: "auto",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 30,
    paddingLeft: 10,
    borderRadius: 4,
    marginBottom: 0,
  },
  textInput: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    color: "#fff",
  },
});
