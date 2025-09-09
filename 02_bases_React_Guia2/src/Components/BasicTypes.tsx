import React, { useState } from 'react'
export const BasicTypes = () => {
const name: string= "yo";
const age: number= 19;
const [isActive, setisActive] = useState(true);

  return (
    <>
    <div>Hola Mundo</div>
    <h2>{name} + name</h2>
    <ul>
        <li><b>name </b><span>{name}</span></li>
        <li><b>edad </b><span>{age}</span></li>
        <li><b>Boleano </b><span>{isActive?"UsuarioActivo":"UsuarioInactivo"}</span></li>
        <button onClick={()=> setisActive(!isActive)}>{isActive?"Desactivar":"Activar"}</button>
    </ul>
    </>
    
  )
}