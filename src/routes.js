import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

import Home from "./screens/Home";
import Busca from "./screens/Busca";
import Perfil from "./screens/Perfil";
import Pedidos from "./screens/Pedidos";

const BottomTab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "purple",
          tabBarInactiveTintColor: "grey",
        }}
      >
        <BottomTab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Busca"
          component={Busca}
          options={{
            tabBarLabel: "Busca",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="search" color={color} size={26} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Pedidos"
          component={Pedidos}
          options={{
            tabBarLabel: "Pedidos",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="assignment" color={color} size={26} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Perfil"
          component={Perfil}
          options={{
            tabBarLabel: "Perfil",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="person" color={color} size={26} />
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
