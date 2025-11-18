import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeContext, ThemeProvider } from './Contexto global/ThemeContext'
import { ThemeSwitcher } from './Ejercicio1y2/ThemeSwitcher'
import { LanguageProvider } from './Contexto global/LanguageContext';
import { Settings } from './Contexto global/Settings'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ThemeProvider>
        <LanguageProvider>
          <Settings />
        </LanguageProvider>
      </ThemeProvider>
    </>
  )
}

export default App
