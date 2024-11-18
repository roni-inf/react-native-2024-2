import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Message() {
  return (
    <View style={styles.container}>
      <MaterialIcons name="notifications" color="red" size={18} />
      <Text style={styles.title}>Teste de Mensagem</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 84,
    position: "absolute",
    top: 0,
    backgroundColor: "#4863f7",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingBottom: 12,
  },
  title: {
    color: "#FFF",
    fontSize: 16,
    marginLeft: 7,
  },
});
