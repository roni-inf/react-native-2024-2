import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";

const ButtonAnimated = Animatable.createAnimatableComponent(TouchableOpacity);
export default function App() {
  return (
    <View style={styles.container}>
      <Animatable.Text animation="bounce" duration={5000}>
        Teste de Animação
      </Animatable.Text>

      <ButtonAnimated animation="fadeInUp" style={styles.button}>
        <Text>Teste</Text>
      </ButtonAnimated>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    color: "#FFF",
    backgroundColor: "#121212",
    width: "50%",
    height: 30,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  texto: {
    fontSize: 28,
  },
});
