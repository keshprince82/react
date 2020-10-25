import React ,{useState} from 'react';
import Task from './task.js'
export default function Todo(){


const [textvalue,setText]= useState();
 function addTodo(){

}
function newTask(e){
    setText(e.textvalue)
}




return(
<div >
                 <input
                    type="text"
                    name="counter"
                    value={textvalue}
                    onChange={(e)=>(newTask(e))}
                    />

                    
                  <button onClick={(addTodo)}>
                   ADD
               </button>

</div>


);


}