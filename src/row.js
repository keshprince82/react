import React from 'react';
 export default class Row extends React.Component{
     render(){
         return(
<>

            <tr>
            
                <td>{this.props.value[0].id}</td>
                <td>{this.props.value[0].name}</td>
                <td>{this.props.value[0].dept}</td>
                <td>{this.props.value[0].salary}</td>
            </tr>
            
            <tr>
            
                <td>{this.props.value[1].id}</td>
                <td>{this.props.value[1].name}</td>
                <td>{this.props.value[1].dept}</td>
                <td>{this.props.value[1].salary}</td>
            </tr>
            </>

         );
     }
 }