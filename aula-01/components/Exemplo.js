import {
  View,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import React, { useState } from "react";

export default function Exemplo() {
  const [nome, setNome] = useState("Maria");
  const [idade, setIdade] = useState(25);
  const [cont, setCont] = useState(0);

  const handleModificar = () => {
    setNome("Lucas");
    setIdade(23);
  };

  const incrementar = () => setCont(cont + 1);

  return (
    <View>
      <Button title="Alterar Nome" onPress={handleModificar} />
      <Text>{nome}</Text>
      <Text>{idade}</Text>

      <TouchableOpacity style={styles.button} onPress={incrementar}>
        <Text style={styles.text}>Incrementar</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{cont}</Text>
      <TextInput
        keyboardType="numeric"
        placeholder="Preencha o número"
        placeholderTextColor={"green"}
        style={styles.input}
      />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    fontSize: 30,
    color: "red",
    textAlign: "center",
  },
  button: {
    backgroundColor: "blue",
  },

  input: {
    backgroundColor: "#121212",
    color: "yellow",
    fontSize: 20,
  },
});
