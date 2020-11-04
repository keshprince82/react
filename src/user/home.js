import React from "react";
import {useState,useEffect,useHistory} from "react";
import Add from './add'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  export default function Home(){
      const[users,setUsers]=useState([]);
      let History=useHistory();
return(
    <Router>
        <Link to ="/Adduser">ADD USER>
        </Link>
        <Switch>
            
        <Route exact path="/">
            <Table />
          </Route>
        <Route exact path="/View">
            <View />
          </Route>
          
        <Route exact path="/Edit">
            <Edit />
          </Route>
          
          
        {/* <button onClick={ ()=>{ hander; History.push("/Adduser") }></button> */}
        
            
          
          
          </Switch>
    </Router>
)


function Newuser(user){
    setUsers(user);
    localStorage.setItem("user",JSON.stringify(users))
    // localStorage.setItem("hey",users)
    
    

}
function Table(){return(
    <h1>{users}</h1>)

}
function View(){

}
function Edit(){

}

  }