import React, {useState} from 'react';
 export default function Stopwatch(){
     const[clock,setClock]=useState({ss:0,mm:0,hh:0});



     function start(){
         let x=true;
         setClock(clock.ss+1)
        //  while(true){
        //      if(clock.ss==59){
        //          setClock(clock.mm+1);
        //          setClock(clock.ss=0);
        //      }else{
        //          setClock(clock.ss+1);
                 
        //      }

        //  }
     }
return(
<>

    STOPWATCCH<input
    type="text"
    value={clock.mm}
    /> 
    
    
    
    
        {clock.hh}:{clock.mm}:{clock.ss}
    <button onClick={(start)}>
        start
        </button>

</>
);

 }