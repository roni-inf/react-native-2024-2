import { View, Text, StyleSheet } from "react-native";

export default function UsuariosList({ data }) {
    console.log(data);
  return (
    <View style={styles.container}>
      <Text>Nome:{data.nome}</Text>
      <Text>Nome:{data.email}</Text>
      <Text>Nome:{data.cargo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f0f0",
    padding: 8,
    borderRadius: 4,
    marginBottom: 14,
  },
});
