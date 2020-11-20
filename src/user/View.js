import React from "react"
import {useParams,useHistory} from "react-router-dom"
export default function View(){
    let { id }=useParams();
    let userdata = JSON.parse(localStorage.getItem("users"));
    let history=useHistory();

    let ids=+(id);
  
    return(
        <>
        <h1>hello</h1>
        {Object.values(userdata[ids]).map(val=><p1>{val}</p1>)}
        <button onClick={()=>{history.push("/")}}>goHome</button>

       
</>
    )
}