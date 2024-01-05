import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(5);
  const addValue = () => {
    setCounter(counter + 1);
  }
  const remValue = () => {
    setCounter(counter - 1);
  }
  return (

    <>
      <h1>This is Second project {counter}</h1>
      <h2>Counter value: {counter} </h2>
      <button className="add" onClick={addValue}>Add Value</button>
      <button className="remove" onClick={remValue}>Remove value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
