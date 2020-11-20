import './App.css';
import React from 'react';
export default class Head extends React.Component{
    
   
    render(){
        return(
            
            <>
           
         
               {
              
             Object.keys(this.props.value[0]).map(val=> <th> {val}</th>
                   
                   )}




                {/* <th> {(Object.keys(this.props.value[0])[0])}</th>
                <th> {(Object.keys(this.props.value[0])[1])}</th>
                <th> {(Object.keys(this.props.value[0])[2])}</th>
                <th> {(Object.keys(this.props.value[0])[3])}</th> */}
                
                 
            </>


        );
    }
} 