import { StyleSheet, Button, View } from "react-native";
import { useNavigation, StackActions } from "@react-navigation/native";
import React from "react";

export default function Contato() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Button
        title="Home"
        onPress={() => navigation.dispatch(StackActions.popToTop())}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
