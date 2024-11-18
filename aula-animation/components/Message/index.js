import { View, Text } from "react-native";
import { styles } from "./style";
import { MaterialIcons } from "@expo/vector-icons";

export default function Message() {
  return (
    <View style={styles.container}>
      <MaterialIcons name="notifications" color="gold" size={18}/>  
      <Text style={styles.title}>Teste de Mensagem</Text>
    </View>
  );
}
