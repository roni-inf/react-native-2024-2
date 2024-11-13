import { View, Button, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

export default function Sobre({ route }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Tela de Sobre</Text>
      <Text>{route.params?.nome ?? "nome não inserido"}</Text>
      <Text>{route.params?.email ?? "email não informado"}</Text>
      <Text>
        {route.params?.nome} {route.params?.email}
      </Text>
      <Button
        title="Contato"
        onPress={() => navigation.navigate("Contato")}
      ></Button>
      <Text/>
      <Button title="Voltar" onPress={()=> navigation.goBack()}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
