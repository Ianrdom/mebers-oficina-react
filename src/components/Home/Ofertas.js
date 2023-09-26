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

export default function Ofertas({ navigation }) {
  const [ofertas, setOfertas] = useState([]);
  useEffect(() => {
    async function carregarOfertas() {
      const response = await api.get("offers");
      const data = response.data.map((offer) => ({
        id: offer.id,
        offer_url: offer.offer_url,
        title: offer.title,
        priceOriginalFormat: offer.price,
        newPrice: formatNumber(offer.newPrice),
        price: formatNumber(offer.price),
        ingredients: offer.ingredients,
        delivery: offer.delivery,
        delay: offer.delay,
        icon: offer.icon,
      }));
      setOfertas(data);
    }
    carregarOfertas();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.titulo}>Abaixaram o preço!</Text>
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
        {ofertas.map((oferta) => (
          <TouchableOpacity
            style={styles.item}
            key={oferta.id}
            onPress={() => navigation.navigate("Item", { item: oferta })}
          >
            <Image source={{ uri: oferta.offer_url }} style={styles.imagem} />
            <View style={styles.info}>
              <Text numberOfLines={2} style={styles.tituloItem}>
                {oferta.title}
              </Text>
              <View style={styles.itemPreco}>
                <Text style={styles.precoAntigo}>
                  {oferta.price}
                  <MaterialIcons name="local-offer" size={12} color="grey" />
                </Text>
                <Text style={styles.preco}>{oferta.newPrice}</Text>
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
  precoAntigo: {
    marginLeft: 5,
    fontWeight: "bold",
    color: "grey",
    fontSize: 12,
    textDecorationLine: "line-through",
  },
});
