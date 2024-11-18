import { useEffect, useRef } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";

export default function App() {
  const larguraAnimada = useRef(new Animated.Value(150)).current;
  const alturaAnimada = useRef(new Animated.Value(150)).current;
  const animacaoOpacidade = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(larguraAnimada, {
          toValue: 400,
          duration: 3000,
          useNativeDriver: false,
        }),

        Animated.timing(alturaAnimada, {
          toValue: 300,
          duration: 3000,
          useNativeDriver: false,
        }),

        Animated.timing(animacaoOpacidade, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: false,
        }),

        Animated.timing(animacaoOpacidade, {
          toValue: 1,
          duration: 1,
          useNativeDriver: false,
        }),

      ])
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          width: larguraAnimada,
          height: alturaAnimada,
          backgroundColor: "#4169e1",
          justifyContent: "center",
          opacity: animacaoOpacidade,
          borderRadius: 50,
        }}
      >
        <Text style={{ textAlign: "center", color: "#FFF" }}>
          Loading......
        </Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
