import React from "react";
import {useState,useEffect} from "react";
import Add from './add'
import Table from "./table"
import Edit from "./edit"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
    
  } from "react-router-dom";
  import View from "./View"

  export default function Home(){
      const[users,setUsers]=useState([]);
      
  const history=useHistory();

return(
  <>
  
  {/* <button onClick={Handleclick}>Adduser</button> */}
    <Router>
        <Link to ="/Adduser">ADD USER
        </Link>
        <Link to ="/">Home
        </Link>
        <Switch>
            
        <Route exact path="/">
            <Table />
          </Route>
        <Route exact path="/View/:id">
            <View />
          </Route>
          
        <Route exact path="/Edit/:index">
            <Edit />
          </Route>
          
        <Route exact path="/Adduser">
            <Add add={Newuser}/>
          </Route>
          
          
        {/* <button onClick={ ()=>{ hander; History.push("/Adduser") }></button> */}
        
            
          
          
          </Switch>
    </Router>
    </>
)
  


function Newuser(user){
  console.log(user)
  // const[usser,setUsser]=useState([]);
  
  if(localStorage.getItem("users")!=null){
   let usser =JSON.parse(localStorage.getItem("users"));
    usser.push(user)
    localStorage.setItem("users",JSON.stringify(usser));
    
    
  }else{
    localStorage.setItem("users",JSON.stringify([user]));
  }
     
    // setUsers(user);
   
     
    // localStorage.setItem("hey",users)
    
    

}
  }


