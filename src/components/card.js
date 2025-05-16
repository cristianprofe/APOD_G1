//parecida al visor, pero con otra disposicion
import { Image, StyleSheet, View } from "react-native";
import TextWhite from "./textWhite";
import Boton from "./boton";
//lo mismo que con visor
export default Card = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.lcontainer}>
        <TextWhite texto="Titulo" />
        <TextWhite texto="Fecha" />
        <Boton />
      </View>
      <View style={styles.rcontainer}>
        <Image
          source={require("../../assets/images/NASA.png")}
          style={styles.img}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 90,
    borderRadius: 25,
  },
  container: {
    marginTop: 10,
    flexDirection: "row",
    padding: 5,
    borderColor: "#fc3d21",
    borderWidth: 1,
    borderRadius: 10,
  },
  lcontainer: {
    flex: 0.7,
    alignItems: "flex-start",
  },
  rcontainer: {
    flex: 0.3,
    alignContent: "flex-end",
  },
});
