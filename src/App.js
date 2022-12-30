import { useState } from 'react';
import './App.css'
function App() {
let [count, setCount] = useState(0)
let [intervalId, setIntervalId] = useState()
let start = ()=>{
  setIntervalId(
    setInterval(()=>{
      setCount(prevCount=>prevCount+1)
    }, 1000)
  )
  
}

let stop = ()=>{
  clearInterval(intervalId)
}

let reset = ()=>{
  clearInterval(intervalId) 
  setCount(0);

}


  return (
    <div className="App">
     <h1>{count}</h1>
     <div className='btns'>
     <button onClick={start}>Start</button>
     <button onClick={stop}>Stop</button>
     <button onClick={reset}>Reset</button>
     </div>
     
    </div>
  );
}

export default App;
