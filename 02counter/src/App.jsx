import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let Counter = 5;

  // function increamentValue () {
  //   console.log("Increament value:", Math.random());
  // }

  let [counter, setCounter] = useState (5);

  const increamentValue = () => {
    console.log("Increament value:", counter);
    setCounter (counter + 1);
  }

  const decreamentValue = () => {
    console.log ("Decreament value:", counter);
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>Counter</h1>
      <h2>Counter value is : {counter} </h2>

      <div>
        <button onClick={increamentValue}>Increase value {counter}</button>
      </div>
      <br/>
      <div>
        <button onClick={decreamentValue}>Decrease value {counter}</button>
      </div>
    </>
  )
}

export default App
