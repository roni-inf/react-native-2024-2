import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import { db } from "./firebaseConnection";
import { useEffect, useState } from "react";
import {
  getDocs,
  addDoc,
  collection,
  doc,
  getDoc,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import UsuariosList from "./components/usuarios";

export default function App() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cargo, setCargo] = useState("");
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    async function getDados() {
      const userRef = collection(db, "usuarios");
      onSnapshot(userRef, (snapshot) => {
        let lista = [];
        snapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            nome: doc.data().nome,
            email: doc.data().email,
            cargo: doc.data().cargo,
          });
        });
        console.log(lista);
        setUsuarios(lista);
      }).catch((error) => {
        console.log(error);
      });
    }
    getDados();
  }, []);

    async function handleRegister() {
    await addDoc(collection(db, "usuarios"), {
      nome: nome,
      email: email,
      cargo: cargo,
    })
      .then(() => {
        console.log("Cadastrado com sucesso");
        setNome("");
        setEmail("");
        setCargo("");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome:</Text>
      <TextInput
        value={nome}
        placeholder="Digite seu nome..."
        onChangeText={(text) => setNome(text)}
        style={styles.input}
      />

      <Text style={styles.label}>Email:</Text>
      <TextInput
        value={email}
        placeholder="Digite seu email..."
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />

      <Text style={styles.label}>Cargo:</Text>
      <TextInput
        value={cargo}
        placeholder="Digite seu cargo..."
        onChangeText={(text) => setCargo(text)}
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      <Text style={styles.labelUsuarios}>Lista de Usuários</Text>
      <FlatList
        style={styles.list}
        data={usuarios}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <UsuariosList data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  button: {
    backgroundColor: "#000",
    marginLeft: 8,
    marginRight: 8,
  },
  buttonText: {
    padding: 8,
    color: "#FFF",
    textAlign: "center",
  },
  label: {
    color: "#000",
    fontSize: 18,
    marginBottom: 4,
    marginLeft: 8,
  },
  labelUsuarios: {
    marginTop: 14,
    marginLeft: 8,
    fontSize: 20,
    color: "#000",
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 8,
  },
  list: {
    marginTop: 8,
    marginLeft: 8,
    marginRight: 8,
  },
});
