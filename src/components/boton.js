import { Pressable } from "react-native";
import TextWhite from "./textWhite";

//texto detalles tiene que tener un oppress (console.log)

export default boton = ({ onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
    >
      <TextWhite texto="Detalles" />
    </Pressable>
  );
};
