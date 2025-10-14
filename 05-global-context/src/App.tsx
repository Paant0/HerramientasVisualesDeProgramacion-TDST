import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './Content/ThemeContext'
import { MostrarContexto } from './Content/MostrarContexto'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ThemeProvider>
        <MostrarContexto/> 
    </ThemeProvider>
    </>
  )
}

export default App
