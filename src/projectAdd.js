import React,{useState,useEffect} from "react";
export default function Add(){
    const [entry,setEntry]=useState([{id,name,age}])
    function Submit(props){
        props.Adduser
        
    }
    return(<>
        id<input
        type="text"
        value={entry.id}
        onChange={(e)=>setEntry(entry.id)}
        />
        name<input
        type="text"
        value={entry.name}
        onChange={(e)=>setEntry(entry.name)}
        />
         age<input
        type="text"
        value={entry.name}
        onChange={(e)=>setEntry(entry.age)}
        />
        <button onClick={(props)=>Submit(props)}>subMIT</button>
        </>
    )

}