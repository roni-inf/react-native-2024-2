import { StyleSheet, View, StatusBar } from "react-native";
import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Main />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 90,
    backgroundColor:"#e0e5e5"
  },
});
