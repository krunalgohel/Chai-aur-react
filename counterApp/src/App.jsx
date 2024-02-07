import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(9)

  const addValue = () => {
    if(counter >= 20) {
      alert("You can not add more then 20");
    }
    else {
      setCounter(counter+1);
    }
  }

  const removeValue = () => {
    if(counter <= 0) {
      alert("You can not remove less then 0");
    }
    else {
      setCounter(counter-1);
    }
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>Count number : {counter}</h2>
      <button
        onClick={addValue}
      >Add Value</button>
      <button
        onClick={removeValue}
      >Remove Value</button>
    </>
  )
}

export default App
