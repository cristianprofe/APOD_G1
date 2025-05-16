import { StatusBar } from "expo-status-bar";
import Header from "../components/header";
import Visor from "../components/visor";
import { useNavigation } from "@react-navigation/native";
import Layout from "../layout/layout";
import { useEffect, useState } from "react";
import fetchApod from "../api/fetchapod";

export default Home = () => {
  const navigation = useNavigation();
  const [imagen, setImagen] = useState({});
  //otro estado con las imagenes de 5 dias pa atras
  useEffect(() => {
    const getImage = async () => {
      const Data = await fetchApod();
      console.log(Data);
      setImagen(Data);
    };

    //otra funcion para obtener las imagenes - fomrato y la url para solicitar
    //las imagenes del dia se guardan en un arreglo

    getImage();
  }, []);
  return (
    <Layout>
      <Header />
      <Visor
        titulo={imagen.title}
        url={imagen.url}
        onPress={() => navigation.navigate("Detalles")}
      />

      {/* se recorrar el arreglo de imagenes y dibujar una card, para eso usar el componente flatList */}

      <StatusBar style="light" />
    </Layout>
  );
};
