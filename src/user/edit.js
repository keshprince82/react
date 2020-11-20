// import { useState } from "react";
import React,{useState} from "react";
import {useParams,useHistory} from "react-router-dom"

export default function Edit(){
    const [id,setID]=useState("");
    const[name,setName]=useState("");
    const[age,setAge]=useState("");
    let {index}=useParams();
    let history=useHistory();
    function handleSubmit(){
        let userdata = JSON.parse(localStorage.getItem("users"));
        let olddata=userdata[index];
        let newdata={id,name,age}
        olddata.id=newdata.id?newdata.id:olddata.id;
        olddata.name=newdata.name?newdata.name:olddata.name;
        olddata.age=newdata.age?newdata.age:olddata.age;
       userdata.splice(index,1,olddata);
       localStorage.setItem("users",JSON.stringify(userdata));
        history.push("/")
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