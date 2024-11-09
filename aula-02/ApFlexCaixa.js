// import { View, Text, StyleSheet } from "react-native";

// export default function App() {
//   return (
//   <View style={styles.container}>
//     <View style={[styles.box, {alignSelf:"flex-end"}]}></View>
//     <View style={styles.box}></View>
//     <View style={styles.box}></View>
//     <View style={styles.box}></View>
//   </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#FFF",
//     flexDirection:"column",
//     alignItems:"stretch",
//     justifyContent:"space-between"
//   },
//   box: {
//     width: 100,
//     height: 100,
//     backgroundColor: "#9d9d9d",
//     margin: 10,
//   },
// });
import { View, Text, StyleSheet, LogBox } from "react-native";
import React from "react";

export default function App() {
  return(
      <View style={styles.container}>
        <View style={styles.box}>
          <Text>Voltar</Text>
          <Text>Home</Text>
          <Text>Detalhes</Text>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  box: {
    backgroundColor: '#9d9d9d',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 100,
    fontSize: 15,
    padding: 10
  }
});