import React from 'react';
import './App.css';
 export default class Row extends React.Component{
     render(){
         return(
<>

            
    { this.props.value.map(val=><tr>  {Object.values(val ).map(val1=><td>  {val1}  </td>) }</tr>)}
         
            
            </>

         );
     }
 }