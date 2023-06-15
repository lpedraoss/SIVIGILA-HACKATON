/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";

const UseDiccionario = () => {

    const [rutina, setrutina] = useState([]);
    const urlApi = "https://api.sheety.co/f3d41739f79e26e0bcca4c9d027df686/sivigilaRutinaria/rutina2019";
  
    useEffect(() => {
      fetchData(urlApi);
    }, []);
  
    const fetchData = async (url) => {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setrutina(jsonData.rutina2019);
        console.log( jsonData.rutina2019)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    return {rutina}
};

export default UseDiccionario;
