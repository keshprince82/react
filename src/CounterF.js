import React ,{useState} from 'react';
  
export default function StateF(){
    const [count,setCount] = useState(0);
    function addition(){
        setCount(count+1);
    }
    function subtraction(){
        setCount(count-1);
    }
    function reset(){
        setCount(0);
    }

 return(
     <div>
         
                 COUNTER: <input
                    type="text"
                    name="counter"
                    value={count}
                    
                    />

                  <button onClick={(addition)}>
                   plus
               </button>
                 <button onClick={(subtraction)}>
                   MINUs
               </button>
                  <button onClick={(reset)}>
                   reset
               </button>
                  
     </div>




 );




 


}
 