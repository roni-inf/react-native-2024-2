import Home from "../screens/Home";
import Sobre from "../screens/Sobre";
import Contato from "../screens/Contato";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feather from "react-native-vector-icons/Feather";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "red",
        tabBarActiveBackgroundColor: "gray",
        tabBarInactiveBackgroundColor: "yellow",
        tabBarShowLabel: true,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Feather name="home" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Sobre"
        component={Sobre}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Feather name="file-text" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Contato"
        component={Contato}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Feather name="phone-call" color={color} size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
