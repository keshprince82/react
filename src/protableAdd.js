import React from 'react';
import newTable from './protable.js'
// import { BrowserRouter as Router,
//     Switch,
//     Link,
//     Route
    
// } from 'react-router-dom';
export default class Add extends React.Component{
    constructor(){
        super();
        this.state={
            id:"",
            name:"",
            age:""
        };
    }
    inputChangeHandler = (e) => {
        this.setState({
            [e.target.name] :e.target.value
        })
    };
    
    handleInput = () => {
        // this.setState(this.state);
        this.props.data(this.state);
        
    }

    render(){
        //debugger;
        return(
            
                <>
                <div>
                  
                  ID<input
                    type="text"
                    value={this.state.id}
                    name="id"
                    onChange={(e)=>this.inputChangeHandler(e)}
                    />
                    <br></br>
                      NAME<input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={(e)=>this.inputChangeHandler(e)}
                    />
               <br></br>
                      AGE<input
                    type="text"
                    value={this.state.age}
                    name="age"
                    onChange={(e)=>this.inputChangeHandler(e)}
                    />
                    <br></br>
                   
                    
                    <button onClick={this.handleInput}>submit</button>
                    
                    {/* <Router>
                        <Link to="/table"> <button > SUBMIT</button></Link>
                        <Switch >
                            <Route exact path="/table"> <newTable val={this.set}/></Route></Switch>
                    </Router> */}

                    
                    
</div>
                </>

        )
    }
  
}

   
   
    