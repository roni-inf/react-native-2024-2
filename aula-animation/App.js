import { View, Text, StyleSheet, Button } from "react-native";
import React, { useState } from "react";
import Message from "./components/Message";

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <View style={styles.container}>
      {show && <Message />}

      <Button
        title={show ? "Fechar Mensagem" : "Exibir Mensagem"}
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
  },
});
