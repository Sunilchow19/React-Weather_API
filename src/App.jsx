import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Weather from './Components/weather'
import First from './Components/first'
import Sec from './Components/sec'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Weather/>
    </>
  )
}

export default App
