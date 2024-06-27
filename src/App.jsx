
import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)
  

  const addValue = () =>{
    setCounter(counter + 1)
  }
  const removeValue = () =>{
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>React One</h1>
      <h3>Counter: {counter}</h3>
      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
