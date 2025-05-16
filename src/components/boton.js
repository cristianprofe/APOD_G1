import { Pressable } from "react-native";
import TextWhite from "./textWhite";

//texto detalles tiene que tener un oppress (console.log)
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
