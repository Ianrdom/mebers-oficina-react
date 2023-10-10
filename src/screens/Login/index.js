import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import * as SecureStore from "expo-secure-store";
import { useSetRecoilState } from "recoil";
import api from "../../services/api";
import { userState } from "../../services/recoilAuth";
export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);

  const setUser = useSetRecoilState(userState);

  class LoginApi {
    async login(email, password) {
      try {
        const { data } = await api.post("/token/", {
          email,
          password,
        });
        return Promise.resolve(data);
      } catch (error) {
        return Promise.error(error);
      }
    }
  }

  const login = async () => {
    try {
      const data = await LoginApi.login(email, password);
      setUser({
        loggedIn: true,
        access: data.access,
        refresh: data.refresh,
      });
      setEmail("");
      setPassword("");
      setErrorMsg(null);
      await SecureStore.setItemAsync("access", data.access);
      navigation.goBack();
    } catch (error) {
      setUser({ loggedIn: false, access: null, refresh: null });
      setErrorMsg("Email ou senha inválidos!");
      await SecureStore.deleteItemAsync("access");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        activeUnderlineColor="orange"
        label="Email"
        style={{
          width: "90%",
          borderColor: "#ff6500",
          marginBottom: 10,
          backgroundColor: "grey",
        }}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        activeUnderlineColor="orange"
        label="Password"
        type="password"
        secureTextEntry={true}
        style={{
          width: "90%",
          borderColor: "#ff6500",
          marginBottom: 10,
          backgroundColor: "grey",
        }}
        value={password}
        onChangeText={setPassword}
      />
      <Button
        mode="contained"
        style={{ backgroundColor: "#ff6500" }}
        onPress={() => login()}
      >
        Entrar
      </Button>
      <Text>{errorMsg}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#171c22",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});
