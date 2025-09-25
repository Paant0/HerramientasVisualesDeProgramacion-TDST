import { useState } from 'react'
import './App.css'
import { Counter } from './CustomHooksYProps/Counter'
import { useCounter } from './CustomHooksYProps/useCounter'
import { BotonHover } from './components/BotonHover'
import { List } from './components/List'
import { StyledButton } from './CustomHooksYProps/StyledButton'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col justify-center items-center h-svh w-svw">
        <h1 className="text-4xl mb-5 text-black">
          {/* <Counter />
          <BotonHover/>
          <List /> */}
          <Counter />


        </h1>
      </div>

    </>
  )
}

export default App
