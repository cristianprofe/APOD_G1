import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./src/components/header";
import Visor from "./src/components/visor";
import Card from "./src/components/card";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Visor />
      <Card />

      <StatusBar style="light" />
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
