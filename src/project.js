import React,{useState,useEffect} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route,
} from "react-router-dom"
import Add from "./protableAdd"
export default function Homepage(){
    return(<>
        <Router>
            <Link to="/Add"> <button>ADD</button></Link>
            <Switch>
                <Route exact path="/Add"><Add adduser={Newuser}/></Route>

            </Switch>
        </Router>
        <Table/>
</>
    )
}
function Newuser(){
    
}



function Table(){
    return(
    <table>
     <tr><td>id</td><td>name</td><td>age</td><td>actions</td></tr>


    </table>
    )
}