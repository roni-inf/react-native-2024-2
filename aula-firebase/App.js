import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { db } from "./firebaseConnection";
import { useEffect, useState } from "react";
import { doc, getDoc, onSnapshot, setDoc } from "firebase/firestore";

export default function App() {
  const [nome, setNome] = useState("");

  useEffect(() => {
    async function getDados() {
      // const docRef = doc(db, "usuarios", "1");
      // getDoc(docRef)
      //   .then((snapshot) => {
      //     console.log(snapshot.data()?.nome);
      //     setNome(snapshot.data()?.nome);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
      onSnapshot(doc(db, "usuarios", "1"), (doc) => {
        setNome(doc.data()?.nome);
      });
    }
    getDados();
  }, []);

  async function handleRegister() {
    await setDoc(doc(db, "usuarios", "3"), {
      nome: "Roni",
      email: "roni_inf@hotmail.com",
      cargo: "Programador",
    })
      .then(() => {
        console.log("Cadastrado com sucesso");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <View style={styles.container}>
      <Text>Nome:{nome}</Text>
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.text}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#121212",
  },
  text: {
    color: "#FFF",
  },
});
