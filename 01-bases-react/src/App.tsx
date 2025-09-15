import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Ejercicio1 } from './Cajas_Hervin_Actividad_2/Ejercicio1'
import { BasicTypes } from './components/BasicTypes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BasicTypes/>
    </>
  )
}

export default App
