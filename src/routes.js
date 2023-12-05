import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { useRecoilValue } from "recoil";
import { MaterialIcons } from "@expo/vector-icons";
import { userState } from "./services/recoilAuth";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Pedidos from "./screens/Pedidos";
import PedidosAnteriores from "./screens/PedidosAnteriores";
// import Pagamentos from "./screens/Pagamentos";
import Perfil from "./screens/Perfil";
import Item from "./screens/Item";
import Categoria from "./screens/Categoria";

const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function HomeRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={Home}
      />
      <Stack.Screen
        name="Item"
        options={{ headerShown: false }}
        component={Item}
      />
      <Stack.Screen
        name="Categoria"
        options={{ headerShown: false }}
        component={Categoria}
      />
    </Stack.Navigator>
  );
}

function PedidosRouter() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Pedidos" component={Pedidos} />
      <Tab.Screen
        name="PedidosAnteriores"
        component={PedidosAnteriores}
        options={{ tabBarLabel: "Pedidos Anteriores" }}
      />
    </Tab.Navigator>
  );
}

// function PerfilRoutes() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Perfil"
//         options={{
//           headerShown: false,
//         }}
//         component={Perfil}
//       />
//       <Stack.Screen name="Pagamentos" component={Pagamentos} />
//     </Stack.Navigator>
//   );
// }

export default function Routes() {
  const currentUserState = useRecoilValue(userState);
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#ff6500",
          tabBarInactiveTintColor: "grey",
          tabBarStyle: {
            backgroundColor: "#171c22",
            borderTopColor: "#171c22",
          },
        }}
      >
        {currentUserState.loggedIn && (
          <>
            <BottomTab.Screen
              name="HomeRouter"
              component={HomeRoutes}
              options={{
                headerShown: false,
                tabBarLabel: "Home",
                tabBarIcon: ({ color }) => (
                  <MaterialIcons name="home" color={color} size={26} />
                ),
              }}
            />
            <BottomTab.Screen
              name="PedidosRouter"
              component={Pedidos}
              options={{
                headerShown: false,
                tabBarLabel: "Pedidos",
                tabBarIcon: ({ color }) => (
                  <MaterialIcons name="assignment" color={color} size={26} />
                ),
              }}
            />
          </>
        )}

        {currentUserState.loggedIn ? (
          <BottomTab.Screen
            name="Perfil"
            options={{
              headerShown: false,
              tabBarLabel: "Perfil",
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="person" color={color} size={26} />
              ),
            }}
            component={Perfil}
          />
        ) : (
          <BottomTab.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
              tabBarLabel: "Login",
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="person" color={color} size={26} />
              ),
            }}
          />
        )}
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
