import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import * as SecureStore from "expo-secure-store";
import { useSetRecoilState } from "recoil";
import api from "../../services/api";
import { userState } from "../../services/recoilAuth";
global.Buffer = require("buffer").Buffer;
export default function Login({ navigation }) {
  const [email, setEmail] = useState("aluno@aluno.com");
  const [password, setPassword] = useState("aluno");
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

  const parseJwt = (token) => {
    return JSON.parse(Buffer.from(token.split(".")[1], "base64").toString());
  };

  const login = async () => {
    try {
      const data = await new LoginApi().login(email, password);
      const { user_id } = parseJwt(data.access);
      setUser({
        loggedIn: true,
        access: data.access,
        refresh: data.refresh,
        user_id: user_id,
      });
      setEmail("");
      setPassword("");
      setErrorMsg(null);
      await SecureStore.setItemAsync("access", data.access);
      navigation.navigate("Perfil");
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
      <Text style={{ color: "#FFFF" }}>{errorMsg}</Text>
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
