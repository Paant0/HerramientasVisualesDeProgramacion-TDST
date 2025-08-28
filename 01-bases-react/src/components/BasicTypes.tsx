import React, { useState } from 'react'

export const BasicTypes = () => {
   const name: string = "Hervinsito";
   const [age, setAge] = useState(19);
   const [isActive, setIsActive] = useState(true);
  return (
    <>
    <h3>Basic Types</h3>
    {isActive?
    <ul>
      <li>Nombre: {name} </li>
      <li>Edad:  {age} </li>
      
      </ul>:
      
<p> Usuarios inactivos, lo lamento brother  </p>
          }

<div>
        Hello world
      </div>
      <div>
        {name}
      </div>
      <div>
        {" " + age}
      </div>
      <div>
        {" " + isActive}
      </div>
    
    <h2>
      Modificar tin
      
    </h2>
    <button onClick={() => {
      setIsActive(!isActive);
      setAge(20);
      
      }
    }
    

>Modificar</button>

    </>
  )
}
