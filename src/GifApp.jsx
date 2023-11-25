import  { useState } from 'react'
import AgregarCategoria from './components/AgregarCategoria';
import GifGrid from './components/GifGrid';

const GifApp = () => {
  const [categorias, setCategorias]=useState(['NBA']);
  
  const agregarCategoria=(agregarNuevaCategoria)=>{
    if(categorias.includes(agregarNuevaCategoria))return;
    setCategorias([agregarNuevaCategoria,...categorias])
  }

  return (
    <>
      <h1>Gif app</h1>
      <AgregarCategoria agregarNuevaCategoria={agregarCategoria} />
      {categorias.map((categoria) => (
        <GifGrid key={categoria} categoria={categoria} />
      ))}
    </>
  )
}

export default GifApp
