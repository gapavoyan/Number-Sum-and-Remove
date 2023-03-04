import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Count from './count'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Count></Count>
    </div>
  )
}

export default App
