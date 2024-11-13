import { View, Text, StyleSheet } from "react-native";

export default function Contato() {
  return (
    <View style={styles.container}>
      <Text>Tela de Contato Tab </Text>
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
