import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Sobre from "../screens/Sobre";
import Contato from "../screens/Contato";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Tela de Início",
          headerStyle: {
            backgroundColor: "#121212",
          },
          headerTintColor:"#FFF",
        }}
      />
      <Stack.Screen name="Sobre" component={Sobre} />
      <Stack.Screen name="Contato" component={Contato} />
    </Stack.Navigator>
  );
}
