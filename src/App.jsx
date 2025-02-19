import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ReferenceForm from './componenets/ReferenceForm'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ReferenceForm />
    </>
  )
}

export default App
