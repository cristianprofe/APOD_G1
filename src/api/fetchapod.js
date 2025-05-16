const url = "https://api.nasa.gov/planetary/apod";
const api_key = "fmhY1XYjBAzrrFKLxIb0ImZNtgQ01YfP8aPJv3vv";

//Crar o modificar la funcion actual para obtener las imagenes de 5 dias hacia atras

export default fetchApod = async () => {
  //el servidor externo puede fallar
  try {
    //tratar de ejecutar esto
    const response = await fetch(`${url}?api_key=${api_key}`);
    return await response.json();
  } catch (error) {
    console.log("esto es un error del apikey", error);
  }
};
