import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import * as Animatable from "react-native-animatable";

const ButtonAnimated = Animatable.createAnimatableComponent(TouchableOpacity);
export default function App() {
  return (
    <View style={styles.container}>
      <Animatable.Text
        style={styles.title}
        animation="bounce"
        iterationCount={5}
      >
        Texto da Animação
      </Animatable.Text>

      <ButtonAnimated style={styles.button} animation="fadeInUp">
        <Text>Teste</Text>
      </ButtonAnimated>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
  },
  button:{
    width: "70%",
    height:30,
    color:"blue",
    backgroundColor:"gray",
        
  }
  
});
