import { View, Text, StyleSheet, Button } from "react-native";
import Message from "./components/Message";
import { useState } from "react";

export default function App() {
  const [show, setShow] = useState(false);
  return (
    <View style={styles.container}>
      {show && <Message />}

      <Button
        title={show ? "Fechar Mensage" : "Exibir Mensagem"}
        onPress={() => setShow((prevState) => !prevState)}
      ></Button>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
  },
});
