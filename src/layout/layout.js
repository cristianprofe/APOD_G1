//es un contenedor de todas las imagenes - recibir hijos(childres) y mostrarlos dentro de una view y una safeareaview. y que esto sea azul.(#0d3d91)
import { SafeAreaView, StyleSheet, View, Platform, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

export default Layout = ({ children }) => {
  return (
    <View style={styles.contaier}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style="light" />
        {children}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  contaier: {
    flex: 1,
    paddingTop: Platform.OS === "android" && 10,
    backgroundColor: "rgb(7,26,93)",
    paddingHorizontal: 15,
  },
});
