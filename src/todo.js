import React ,{useState,useEffect} from 'react';
import Task from './task.js'
export default function Todo(){


    const [textvalue,setText]= useState();
    const [textvalue1]= useState([]);



  
function newTask(e){
    setText(e.textvalue)
}




return(
<div >           TODO LIST
                <input
                    type="text"
                    name="counter"
                    value={textvalue}
                    onChange={(e)=>(newTask(e))}
                    />
                
                    

                  <button >
                   ADD
               </button>
               

</div>


);


}