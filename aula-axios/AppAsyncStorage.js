import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [input, setInput] = useState("");
  const [nome, setNome] = useState("");

  async function gravarNome() {
    await AsyncStorage.setItem("@nome", input);
    setNome(input);
  }

  async function removerNome() {
    await AsyncStorage.removeItem("@nome");
    setNome("");
  }

  useEffect(() => {
    async function loadData() {
      await AsyncStorage.getItem("@nome").then((value) => {
        setNome(value);
      });
    }
    loadData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.viewInput}>
        <TextInput
          value={input}
          onChangeText={(texto) => setInput(texto)}
          style={styles.input}
        />
        <TouchableOpacity onPress={gravarNome}>
          <Text style={styles.botao}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={removerNome}>
          <Text style={styles.botao}>-</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.nome}>{nome ? nome : "Nenhum nome Salvo"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 35,
  },
  viewInput: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    width: 350,
    height: 40,
    borderColor: "#000",
    borderWidth: 1,
    padding: 10,
  },
  botao: {
    backgroundColor: "#222",
    color: "#FFF",
    height: 40,
    padding: 10,
    marginLeft: 4,
  },
  nome: {
    marginTop: 15,
    fontSize: 30,
  },
});
