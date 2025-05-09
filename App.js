import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TextWhite from "./src/components/textWhite";

export default function App() {
  return (
    <View style={styles.container}>
      <TextWhite texto="Hola Mundo" fontSize={25} />
      <TextWhite texto="Hola Mundo" fontSize={6} />
      <TextWhite texto="Hola Mundo" fontSize={50} />
      <TextWhite texto="Hola Mundo" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
