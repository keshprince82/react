import React,{useState} from "react";
import { useHistory } from "react-router-dom";
export default function Add(props){
    let history=useHistory();
    const [id,setID]=useState("");
    const[name,setName]=useState("");
    const[age,setAge]=useState("");

function handleSubmit(){
   let a={id,name,age};
   console.log(a);
props.add(a);
history.goBack();

}
    return(
        <div>
        id:<input
        type="text"
        value={id}
        onChange={(e)=>setID(e.target.value)}
        
        />
        
        name:<input
        type="text"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        
        />
        
        age:<input
        type="text"
        value={age}
        onChange={(e)=>setAge(e.target.value)}
        
        />
        <button onClick={handleSubmit}>SUBMIT</button>
        </div>
    )
}