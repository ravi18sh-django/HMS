import { useState } from 'react'
import Login from "./component/Login"
import Dashboard from './component/Dashboard'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Dashboard />
    </>
  )
}

export default App
