import { useState } from 'react'
import './App.css'
import Weather from './Components/weather'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Weather/>
    </>
  )
}

export default App
