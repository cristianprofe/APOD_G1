import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
import details from "../screens/details";

export default function Routes() {
  const Stack = createNativeStackNavigator();

  return (
    //vamos a devolver el contenedor de vistas
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Inicio",
            headerStyle: {
              backgroundColor: "blue",
            },
          }}
        />
        <Stack.Screen
          name="Detalles"
          component={details}
          options={{
            title: "Detalles",
            headerStyle: {
              backgroundColor: "blue",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
