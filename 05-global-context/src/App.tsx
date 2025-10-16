import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeContext, ThemeProvider } from './Ejercicio1y2/ThemeContext'
import { ThemeSwitcher } from './Ejercicio1y2/ThemeSwitcher'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ThemeProvider>
        <ThemeSwitcher/>
    </ThemeProvider>
    </>
  )
}

export default App
