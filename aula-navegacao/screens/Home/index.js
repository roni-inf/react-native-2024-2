import { StyleSheet, Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  function navigationSobre() {
    navigation.navigate("Sobre");
  }

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button title="Sobre" onPress={navigationSobre}></Button>
      <Text>Abrir Drawer</Text>
      <Button title="Drawer" onPress={() => navigation.jumpTo("Home")} />
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
