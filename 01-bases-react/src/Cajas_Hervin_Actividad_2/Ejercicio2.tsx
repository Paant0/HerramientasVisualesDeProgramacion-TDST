import React, { useEffect, useState } from 'react'

export const Ejercicio2 = () => {
  const name: String = "Ermenegildo";
  const price: number = 2000;
  const description: String = "Es muy bonito";
  const [showDetails, setShowDetails] = useState(true)

  useEffect(() => {
    if (showDetails == true) {
      console.log(`Encendido`);
    } else {
      console.log(`Oculto`);
    }
  }, [showDetails]);

  return (
    <>
      {showDetails ?
        <ul>
          <li>Nombre: {name} </li>
          <li>Edad:  {price} </li>
          <li>descripcion: {description}</li>
        </ul> :
        <p> </p>
      }
      <h3>Ejercicio2-Mostrar/ocultar detalles de un producto</h3>
      <button onClick={() => {
        setShowDetails(!showDetails);
      }
      }>{showDetails ? "Ocultar" : "Mostrar"} informacion</button>
    </>
  )
}
