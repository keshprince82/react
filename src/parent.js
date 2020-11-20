import React from "react";
import { Child } from './child';

export default class Parent extends React.Component {
  constructor(){
      super()
  }

 reciveChildProps(childProps){
    alert(childProps);
 }


  render() {
    return (
        <Child childHandler={this.reciveChildProps}/>
    );
  }
}