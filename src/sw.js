import React, {useState} from 'react';

 export default function Stopwatch(){
     const[clock,setClock]=useState(0);
     const[timerId,setTimerid]=useState(0)

     const startTimer = () => {
         let timerId = setInterval(()=>{
             setClock((clock)=>clock+1);
         },1000)
         setTimerid(timerId)
         
     }
     const stopTimer=()=>{
         
         clearInterval(timerId);
     }
     function reset(){
         setClock(0);
     }
    

     return (

        <div>
            <span> {(clock/60).toFixed(0)}  ::  {clock%60}</span>
        <br></br>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick= {reset}> reset</button>
        </div>
     );

}