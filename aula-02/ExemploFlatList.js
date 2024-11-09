import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";

export default function App() {
  const alunos = [
    { matricula: 123, nome: "Jose" },
    { matricula: 121, nome: "Maria" },
    { matricula: 124, nome: "Ana" },
    { matricula: 323, nome: "Maurício" },
    { matricula: 423, nome: "Flávio" },
    { matricula: 223, nome: "Alberto" },
  ];

  const renderItem = ({item}) => {
    return(
    <View style={styles.item}>
      <Text>{item.nome}</Text>
    </View>
    )
  };
  return (
    <View style={styles.container}>
      <FlatList data={alunos} renderItem={renderItem} keyExtractor={(item)=>item.matricula}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    backgroundColor: "#d9d9d9",
    padding: 20,
    marginVertical: 40,
    marginHorizontal: 16,
    alignItems:"center"
  },
});
