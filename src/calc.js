import React, { useState } from 'react';
import './App.css';
export default function Calc(){
    const[textfield,setText]=useState(" ");
    


    function operation(value){
      
      setText(textfield + value );
      console.log(textfield + value);
    }
    function op(){
      
     
      setText(eval(textfield));
      console.log(textfield);
    }
   
    function reset(){
      setText("");
    }
    function back(){
      setText(textfield.slice(0, textfield.length - 1))
    }
   return(
   <> 
   <h1>CALCULATOR</h1>
   <row>
    <input
   type="text"
   name="textfield"
   value={textfield}
   />
   </row>
  <row>
  <button  onClick={()=>operation(0) }>0</button>
  <button value="1" onClick={()=>operation(1) }>1</button>
  <button value="2" onClick={()=>operation(2) }>2</button>
  <button value="+" onClick={()=>operation("+") }>+</button>
  </row>
  <row>
  <button value="0" onClick={()=>operation(3) }>3</button>
  <button value="0" onClick={()=>operation(4) }>4</button>
  <button value="0" onClick={()=>operation(5) }>5</button>
  <button value="0" onClick={()=>operation("-") }>-</button>
  
  </row>
  <row>
  <button onClick={()=>operation(6) }>6</button>
  <button onClick={()=>operation(7) }>7</button>
  <button onClick={()=>operation(8) }>8</button>
  <button onClick={()=>operation("/") }>/</button>

  </row>
  <row>
  <button onClick={()=>operation("*") }>*</button>
      <button onClick={()=>operation(9) }> 9 </button>
      <button onClick={(op) }> = </button>
      <button onClick={(back)}> back</button>
  </row>
  <row>
  <button onClick={(reset)}> AC</button>
  </row>

   
 
   
   


        

  




   </>
   ) 
}