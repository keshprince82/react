import React from "react"
// import {useHistory} from "react-router-dom"

export default function Table() {


    return (
        <>
            <h1>table</h1>

            <table>
                <Head />
                <Body />
            </table>
        </>
    );


}

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
    let userdata = JSON.parse(localStorage.getItem("users"));
    return (
        <>
            {userdata.map((val,index )=> <tr>{Object.values(val).map(value => <td>{value}</td>)}
            <td><button>view</button></td>
            <td><button>update</button></td>
            <td><button onClick={Delete(index)}>delete</button></td></tr>)}
        </>
    )
}
function Delete(i){
    alert("hey")
    let userdata = JSON.parse(localStorage.getItem("users"));
    userdata.splice(i,1);
    console.log(userdata);
    localStorage.setItem("users",JSON.stringify(userdata));
    
    

}