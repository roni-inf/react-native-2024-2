import { View, Text } from "react-native";
import styles from "./style";

export default function Header() {
  return (
    <View>
      <View style={styles.caixa}>
        <Text style={styles.titulo}>Programa de Saúde - 2024</Text>
      </View>
    </View>
  );
}
