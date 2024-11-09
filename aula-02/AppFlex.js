import { ScrollView, Text, View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "#121212" }}>
      <View style={{ flex: 1, backgroundColor: "green" }}>
        <ScrollView>
          <Text>oi</Text>
          <Text>oi</Text>
          <Text>oi</Text>
          <Text>olá</Text>
          <Text>olá</Text>
          <Text>olá</Text>
          <Text>olá</Text>
          <Text>olá</Text>
          <Text>olá</Text>
          <Text>teste</Text>
        </ScrollView>
      </View>
      <View style={{ flex: 1, backgroundColor: "red" }}>
        <Text>oi</Text>
      </View>
      <View style={{ flex: 2, backgroundColor: "blue" }}>
        <Text>oi</Text>
      </View>
    </View>
  );
}
