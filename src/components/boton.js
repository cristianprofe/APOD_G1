import { Pressable } from "react-native";
import TextWhite from "./textWhite";
import { useNavigation } from "@react-navigation/native";

//texto detalles tiene que tener un oppress (console.log)
const navigation = useNavigation();
const handlerPress = () => {
  navigation.navigate("Detalles");
};
export default boton = () => {
  return (
    <Pressable
      onPress={() => handlerPress()}
      style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
    >
      <TextWhite texto="Detalles" />
    </Pressable>
  );
};
