import { useEffect, useRef, useState } from "react";
import {
  StatusBar,
  View,
  Alert,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Keyboard,
  SafeAreaView,
} from "react-native";
import api from "./service/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [cep, setCep] = useState("");
  const [cepUser, setCepUser] = useState("");
  const inputRef = useRef();

  const limpar = () => {
    setCep("");
    inputRef.current.focus();
    setCepUser("");
  };

  const buscar = async () => {
    if (cep.length !== 8) {
      Alert.alert("O cep deve ter 8 dígitos");
      return;
    }

    try {
      const response = await api.get(`/${cep}/json`);
      if (response.data.erro) {
        setCepUser("");
        Alert.alert("Cep não encontrado!");
        Keyboard.dismiss();
      }
      await AsyncStorage.setItem("@lastcep", cep);
      setCepUser(response.data);
    } catch (error) {
      console.log("Error" + error);
    }
  };

  useEffect(() => {
    async function loadData() {
      const dadoCep = await AsyncStorage.getItem("@lastcep");
      setCep(dadoCep);
    }
    loadData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={{ alignItems: "center" }}>
        <TextInput
          style={styles.input}
          placeholder="Ex.25600123"
          value={cep}
          onChangeText={(texto) => setCep(texto)}
          keyboardType="numeric"
          ref={inputRef}
        />
      </View>

      <View style={styles.areaBtn}>
        <TouchableOpacity
          onPress={buscar}
          style={[styles.botao, { backgroundColor: "#1d75cd" }]}
        >
          <Text style={styles.botaoText}>Buscar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={limpar}
          style={[styles.botao, { backgroundColor: "#cd3e1d" }]}
        >
          <Text style={styles.botaoText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      {cepUser ? (
        <View style={styles.resultado}>
          <Text style={styles.itemText}>Cep:{cepUser.cep}</Text>
          <Text style={styles.itemText}>Rua:{cepUser.logradouro}</Text>
          <Text style={styles.itemText}>Cidade:{cepUser.localidade}</Text>
          <Text style={styles.itemText}>Bairro:{cepUser.bairro}</Text>
          <Text style={styles.itemText}>UF:{cepUser.uf}</Text>
        </View>
      ) : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    marginTop: 25,
    marginBottom: 15,
    fontSize: 25,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    width: "90%",
    padding: 10,
    fontSize: 18,
    marginTop: 15,
  },
  areaBtn: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 15,
    justifyContent: "space-around",
  },
  botao: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    borderRadius: 5,
  },
  botaoText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  resultado: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemText: {
    fontSize: 22,
  },
});
