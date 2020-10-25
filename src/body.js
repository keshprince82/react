
import React from 'react';
import Head from './head.js'
import Row from './row.js'
 export default class Body extends React.Component{


    render(props){
        return(
<table >
    <Head value={this.props.value}/>
    <Row value={this.props.value}/>

</table>

        );
    }
 }