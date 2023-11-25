import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


//EL ASYNC DEVUELVE UNA PROMESA Y EL AWAIT LA ESPERA 
export const useFetchGifs = (categoria) =>{
    const [img,setImg]=useState([]);
    const [isLoader,setIsLoader]=useState(true);
    const getImages = async()=>{
        const nuevaImagen = await getGifs(categoria); //hace la peticion
        setImg(nuevaImagen);
        setIsLoader(false);

    }
  //DISPARA UN EFECTO PARA MANTENER EL ESTADO CUANDO SE EJECUTA LA FUNCION GETGIFS QUE CONSUME LA API 
  useEffect(()=>{
    setTimeout(() => {
        getImages();
    }, 1500);
  },[]) //LOS [] HACEN QUE SE EJECUTA UNICAMENTE CUANDO SE MONTA EL COMPONENTE
  return{
    img,
    isLoader
  }
}
 