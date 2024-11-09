import { useState } from "react";
import {  View,  Text, StyleSheet,  TextInput,  Button,  FlatList,} from "react-native";

export default function ExemploInputFlatList() {
  const [inputText, setInputText] = useState("");
  const [data, setData] = useState([]);

  const handleInputChange = (text) => {
    setInputText(text);
  };

  const handleButtonPress = (item) => {
    setData([ ...data, { key: inputText }]);
    setInputText("");
  };
  return (
    <View style={styles.container}>
      <TextInput  style={styles.input}   placeholder="Digite algo"   onChangeText={handleInputChange}  value={inputText}  />
      <Button title="Adicionar" onPress={handleButtonPress} />

      <FlatList  data={data}  renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#d9d9d9",
  },
  input: {
    height: 40,
    backgroundColor: "#121212",
    color: "#FFF",
    borderWidth: 2,
    marginBottom: 10,
    paddingHorizontal: 10,
  },

  item: {
    padding: 10,
    fontSize: 20,
    height: 44,
  },
});
