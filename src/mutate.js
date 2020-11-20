import React from 'react';
export default class Mutate extends React.Component{
    constructor(){
        super();
        this.state={
            counter:0

        }

    }
    componentDidUpdate(){
        this.setState({counter:2});
    }
    
 increase=()=>{
 this.setState((prev)=>({
     counter:prev.counter+1
 }));
}
increaseMutant=()=>{
    this.state.counter=20
    console.log(this.state.counter);
   
} 
render(){
    return(<> 

        Counter<input
        type="text"
        name="counter"
        value={this.state.counter}
        />
        
        <button onClick={this.increase}> add</button>
    
        <button onClick={this.increaseMutant}> mutate</button>
    
        

    </> 
    );
    
    }
}
    
    
