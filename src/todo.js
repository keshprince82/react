import React ,{useState} from 'react';
import Task from './task.js'
export default function Todo(){


const [textvalue,setText]= useState({
    id:1, task:"enter task"
});
 function addTodo(e){
     e.preventDefault();
    //  ([...textvalue,{id:2,task:"new"}])

}
function newTask(){
    setText(textvalue.task)

}




return(
<div >
                 <input
                    type="text"
                    name="counter"
                    value={textvalue.task}
                    onChange={()=>(newTask())}
                    />

                    
                  <button onClick={<Task />}>
                   ADD 
               </button>
               

</div>


);


}