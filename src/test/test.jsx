import React, { useEffect, useReducer, useRef } from 'react'

function Test() {
    let reducer = (state, action)=>{
        switch(action.type){
            case 'START':
                return{
                    ...state,
                    works:true
                }
            case 'STOP':
                return{
                    ...state,
                    works: false
                }
            case 'CHANGE':
                return{
                    ...state,
                    time: ++state.time
                }    

             case 'RESET':
                return{
                    works: false,
                    time:0
                }   
        }
    }

    let [state, dispatch] = useReducer(reducer, {
        time: 0,
        works:false
    })
    let intervalId = useRef(0);

    useEffect(()=>{
        if (state.works) {
            
            intervalId.current=setInterval(() => dispatch({type:'CHANGE'}), 1000);
        }
        else{
            clearInterval(intervalId.current)
            intervalId.current=0;
        }
    }, [state.works])


  return (
    <div>
        <div>{state.time}</div>

<button onClick={()=>dispatch({type:'START'})}>start</button>
<button onClick={()=>dispatch({type: 'STOP'})}>stop</button>
<button  onClick={()=>dispatch({type:'RESET'})}>reset</button>
    </div>
  )
}

export default Test