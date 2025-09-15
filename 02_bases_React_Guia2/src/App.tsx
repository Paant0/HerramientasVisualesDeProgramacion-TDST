import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BasicTypes } from './Components/BasicTypes'
import { Products } from './Components/Products'
import { Cajas_Hervin_UtilesEscolares } from './Components/Cajas_Hervin_UtilesEscolares'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cajas_Hervin_UtilesEscolares/>
      <Products />
    </>
  )
}

export default App
