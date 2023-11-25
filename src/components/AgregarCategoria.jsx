import  { useState } from 'react'

const AgregarCategoria = ({agregarNuevaCategoria}) => {
    const[valorInput,setvalorInput]=useState('');

    const cambiarValorInput=({target})=>{
        setvalorInput(target.value);
    }
    
    const onSub=(e)=>{
        e.preventDefault();
        if(valorInput.trim().length <=1) return;
        agregarNuevaCategoria(valorInput.trim())
        setvalorInput('')
    }
  return (
    <>
    <form onSubmit={onSub}>
      <input
      type='text'
      placeholder='Buscar gifs'
      value={valorInput}
      onChange={cambiarValorInput}
      />
    </form>
    </>
  )
}

export default AgregarCategoria
