import React,{useState,useEffect} from 'react';
export default function Task(props){
const[tasks,setTask]=useState();

    return (
    <div>
        <input
        type="text"
        name="task"
        value={props.value}
        />
        </div>

    );
}