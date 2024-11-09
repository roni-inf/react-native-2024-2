import { View, Text, ScrollView, StyleSheet, StatusBar } from "react-native";
import React from "react";

export default function App() {
  return (
    <View>
        <StatusBar/>
      <ScrollView horizontal style={styles.scroll}>
        <Text style={styles.text}>Exemplo1</Text>
        <Text style={styles.text}>Exemplo2</Text>
        <Text style={styles.text}>Exemplo3</Text>
        <Text style={styles.text}>Exemplo4</Text>
        <Text style={styles.text}>Exemplo5</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "red",
    fontSize: 28,
    padding:20
  },

  scroll: {
    backgroundColor: "#d9d9d9",
    height: 130,
  },
});
