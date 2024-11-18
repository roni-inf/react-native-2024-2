import { StyleSheet, View, Text, Animated } from "react-native";
import React, { useEffect, useRef } from "react";

export default function App() {
  const larAnimada = useRef(new Animated.Value(0)).current;
  const altAnimada = useRef(new Animated.Value(50)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(larAnimada, {
        toValue: 100,
        duration: 4000,
        useNativeDriver: false,
      }),

      Animated.timing(altAnimada, {
        toValue: 100,
        duration: 4000,
        useNativeDriver: false,
      }),
    ]).start();
  }, []);

  let porcentagemLargura = larAnimada.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
  });

  let porcentagemAltura = altAnimada.interpolate({
    inputRange: [50, 100],
    outputRange: ["5%", "100%"],
  });

  //   useEffect(() => {
  //     Animated.loop(
  //       Animated.loop(
  //         Animated.sequence([
  //           Animated.timing(larAnimada, {
  //             toValue: 300,
  //             duration: 2000,
  //             useNativeDriver: false,
  //           }),

  //           Animated.timing(larAnimada, {
  //             toValue: 150,
  //             duration: 2000,
  //             useNativeDriver: false,
  //           }),
  //         ])
  //       )
  //     ).start();
  //   }, []);
  //   //const opacidadeAnimada = useRef(new Animated.Value(0)).current;

  //   useEffect(() => {
  //     Animated.sequence([
  //       Animated.timing(opacidadeAnimada, {
  //         toValue: 1,
  //         duration: 2000,
  //         useNativeDriver: false,
  //       }),

  //       Animated.parallel([
  //         Animated.timing(larAnimada, {
  //           toValue: 300,
  //           duration: 2000,
  //           useNativeDriver: false,
  //         }),

  //         Animated.timing(altAnimada, {
  //           toValue: 200,
  //           duration: 4000,
  //           useNativeDriver: false,
  //         }),
  //       ]),
  //     ]).start();
  //   }, []);
  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          width: porcentagemLargura,
          height: porcentagemAltura,
          height: altAnimada,
          backgroundColor: "#4169e1",
          justifyContent: "center",
          //   borderRadius: 50,
          //      opacity: opacidadeAnimada,
        }}
      >
        {/* <Text style={styles.texto}>Loading.... </Text> */}
      </Animated.View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  texto: {
    textAlign: "center",
    fontSize: 22,
    color: "#FFF",
  },
});
