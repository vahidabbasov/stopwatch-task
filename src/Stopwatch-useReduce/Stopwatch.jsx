import { useReducer, useEffect, useRef } from 'react';
import './Stopwatch.css'
function Stopwatch() {
    function reducer(state, action) {
        switch (action.type) {
          case 'START':
            return { ...state, works: true };
          case 'STOP':
            return { ...state, works: false };
            case 'CHANGE':
              return { ...state, time: ++state.time };
          case 'RESET':
            return { works: false, time: 0 }
        }
      }


  const [state, dispatch] = useReducer(reducer, {
    works: false,
    time: 0
  });
  const intervalId = useRef(0);
  useEffect(() => {
    if (state.works) { 
        intervalId.current = setInterval(() => dispatch({type: 'CHANGE'}), 1000);
    }
    else{
        clearInterval(intervalId.current);
        intervalId.current = 0;
    }
    
}, [state.works]);
    
  
  return (
    <div className='container'>
<div className='time'>

      {state.time}
      </div>
      <div className='btns'>
      <button onClick={() => dispatch({ type: 'START' })} className='startBtn'>
        Start
      </button>
      <button className='stopBtn' onClick={() => dispatch({ type: 'STOP' })}>
        Stop
      </button>
      <button className='resetBtn' onClick={() => dispatch({ type: 'RESET' })}>
        Reset
      </button>

      </div>
      
    </div>
    
  );
}

export default Stopwatch