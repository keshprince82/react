  
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
history.push("/");

}
    return(
        <div>
        id:<input
        type="text"
        value={id}
        onChange={(e)=>setID(e.target.value)}
        
        /> <br/>
        
        name:<input
        type="text"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        
        /><br/>
        
        age:<input
        type="text"
        value={age}
        onChange={(e)=>setAge(e.target.value)}
        
        /><br/>
        <button onClick={handleSubmit}>SUBMIT</button>
        </div>
    )
}