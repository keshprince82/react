import React,{useState} from "react";
import Add from './protableAdd.js'

import { BrowserRouter as Router,
    Switch,
    Link,
    Route,
    // useRoutematch
} from 'react-router-dom';
export default function Table(props){
    // let { path, url } = useRouteMatch();
 
    return(
    
    <>
    <table>
        
            
       
            
            {((Object.keys(props.entries[0])).map(val => <th> {val}</th>))}<th>actions</th>
            {props.entries.map((val,index) => <tr>{Object.values(val).map(val1 => <td>  {val1}  </td>)}
            <td>
          <Router>
                <Link to="/table/view"> <button >view</button></Link>
                <Link to="/table/edit"> <button >edit</button></Link>
                <Link to="/delete"> <button >delete</button></Link>
                <Switch>
                    <Route  exact path="/delete"><Delete value={index}/></Route>
                    <Route  exact path="/table/edit"><Edit value={index}/></Route>
                    <Route  exact path="/table/view"><View value={index}/></Route>
                </Switch>
                </Router>

             
        
            </td>
            
            </tr>
            )}
            
        </table>
        
        
        </>
       
    )
}
function View(props){

    console.log(props.entries[props.value])
    
   
}

function Edit(props){
    return(
     <h1>edit</h1>

    )
 }
 function Delete(props){
    let del=prompt("are you sure you want to delete this",props.value);
    // if(del){
        console.log("e",del);
        console.log("e",typeof(del));
        props.entries.splice(del,1)
        // console.log(a)

    // }
return(
        <table/>
        
    )    
   
 }
