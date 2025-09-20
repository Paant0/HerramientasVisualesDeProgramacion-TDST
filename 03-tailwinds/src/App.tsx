import { useState } from 'react'
import './App.css'
import { Counter } from './components/Counter'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col justify-center items-center h-svh w-svw">
        <h1 className="text-4xl mb-5 text-red-500">
          <Counter />
        </h1>
      </div>

    </>
  )
}

export default App
