import React from 'react';
import './App.css'
import Body from './body.js'
export default class Table extends React.Component{
        render(){
        
    let entry=[{id:1,name:"pk",dept:"cse",salary:1000},{id:2,name:"pak",dept:"cse",salary:11000}];
            return(
            <div>
                <h1> usesr table</h1>
                <Body value={entry}/>
            </div>




            );
        }
    }