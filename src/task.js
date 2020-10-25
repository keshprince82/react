import React,{useState,useEffect} from 'react';
export default function Task(props){
const[textvalue]=useState(props.value);

    return (
    <div>
        <input
        type="text"
        name="task"
        value="text"
        />
        </div>

    );
}