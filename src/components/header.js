//un texto y una imagen que se vea como en la app

import { Image, StyleSheet, View } from "react-native";
import TextWhite from "./textWhite";

export default Header = (props) => {
  const { texto = "Descubre" } = props;
  return (
    <View style={styles.container}>
      <View style={styles.titulo}>
        <TextWhite texto={texto} />
      </View>
      <View style={styles.imgcontainer}>
        <Image
          source={require("../../assets/images/NASA.png")}
          style={styles.img}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  img: {
    width: 60,
    height: 60,
  },
  titulo: {
    flex: 1,
    alignItems: "flex-start",
  },
  imgcontainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});
