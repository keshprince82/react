  
import React,{useState} from "react"

import {useHistory} from "react-router-dom"
import View from "./View"

 export default function Table() {
    const[del,setDel]=useState(false)
   let history=useHistory();

    return (
        <>
            <h1>table</h1>

            <table>
                <Head />
                <Body />
            </table>
        </>
    );




function Head() {
    let heading = ["id", "name", "age", "actions"];
    return (
        <>
            <tr>{heading.map(val => <th>{val}</th>)}
            </tr>
        </>


    )
}
function Body() {
    if(localStorage.getItem("users")!==null){

    
    let userdata = JSON.parse(localStorage.getItem("users"));
    return (
        <>
            {userdata.map((val,index )=> <tr>{Object.values(val).map(value => <td>{value}</td>)}

            <td><button onClick={()=>{
                
                
                history.push(`/View/${index}`)}}>view</button></td>
            <td><button onClick={()=>history.push(`/Edit/${index}`) }>update</button></td>
            <td><button onClick={()=>{Delete(index)}}>delete</button></td></tr>)}
        </>
    )
            }
            else{
                return(
                    <h1>no users data</h1>
                )
            }
    }
function Delete(i){
    let z=window.confirm("sure delte");
    setDel(z=>!z);
    if(z){
        let userdata = JSON.parse(localStorage.getItem("users"));
        userdata.splice(i,1);
        console.log(userdata);
        localStorage.setItem("users",JSON.stringify(userdata));
    }
    // setDel(false)
}
 }
  
  
    
    



