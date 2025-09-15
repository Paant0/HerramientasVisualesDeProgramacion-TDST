import React, { useState } from 'react'
export const BasicTypes = () => {
  const name: string = "yo";
  const age: number = 19;
  const [isActive, setisActive] = useState(true);

  const names = [
    "alberto romanio1",
    "alberto romanio2",
    "alberto romanio3",
    "alberto romanio4",
    "alberto romanio5",
    "alberto romanio6",
  ];

  const mascotas = [
    "Palomino",
    "Romino",
    "Firulais",
    "Fermin",
    "Atanasio",
    "Lulu",
  ];
  const users: User[] = [
    {
      name: "hola1",
      email: "hola1@gmail.com",
      age: 1,
      isActive: true
    },
    {
      name: "hola2",
      email: "hola2@gmail.com",
      age: 2,
      isActive: true
    },
    {
      name: "hola3",
      email: "hola4@gmail.com",
      age: 3,
      isActive: true
    },
  ]
  interface User {
    name?: String;
    email: String;
    age: number;
    isActive: boolean
  }


  const usuario = {
    //llave : valor
    name: "juanito alimaña",
    edad: 19,
    email: "juan@gmail.com",
    role: "ejecutivo",
    marialStatus: "soltero",
    isActive: true
  }

  const llaves = Object.keys(usuario);

  return (
    <>
      <div>Hola Mundo</div>
      <h2>{name} + name</h2>
      <ul>
        <li><b>name </b><span>{name}</span></li>
        <li><b>edad </b><span>{age}</span></li>
        <li><b>Boleano </b><span>{isActive ? "UsuarioActivo" : "UsuarioInactivo"}</span></li>
        <button onClick={() => setisActive(!isActive)}>{isActive ? "Desactivar" : "Activar"}</button>
      </ul>

      {names[0]}

      {names.map((name, index) =>
        <li key={index}>
          {name}
        </li>

      )}


      {mascotas.map((mascota, index) =>
        <div key={index}>
          {mascota}
        </div>

      )}
      <ul>
        {users.map(
          (value, index) => <div key={index}>
            <div>{value.name}</div>
            <div>{value.age}</div>
            <div>{value.email}</div>
            <hr />

          </div>
        )

        }
      </ul>

=======


      {mascotas.join(", ")

      }

      //<h2>Objetos literales</h2>
      //console.log({llaves});
      
      <h2>Objetos literales</h2>

      <ul>
        {llaves.map((keyName, index) =>
          <li key={index}>
            <b>{keyName}:</b> {usuario[keyName as keyof typeof usuario]}
          </li>
        )}
      </ul>

      <div>console.log(llaves)</div>
      
      
    </>
  )
} 