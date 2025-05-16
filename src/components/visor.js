//Imagen, titulo, fecha y boton ->
import { StyleSheet, View, Image } from "react-native";
import TextWhite from "./textWhite";
import Boton from "./boton";

//recibir y mostrar la fecha
//
export default Card = ({ titulo, url }) => {
  return (
    <View style={styles.container}>
      <TextWhite texto={titulo} />
      <Image source={{ uri: url }} style={styles.img} />
      <TextWhite texto="fecha" />
      <Boton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    padding: 10,
    borderColor: "#fc3d21",
    borderWidth: 2,
    borderRadius: 10,
  },
  img: {
    alignSelf: "center",
    width: 300,
    height: 200,
    borderRadius: 10,
  },
});
