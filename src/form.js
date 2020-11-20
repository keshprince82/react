import React from 'react';
import './App.css';
 class Form extends React.Component{
    
    constructor(){
        super();
        this.state={
            firstName:"prince",
            lastName:"kesh",
            address:"gupt",
            city:"noida",
            pin:100101,
            gender:"f",
            state:"",
            gift:"false"

        };
    }
    inputChangeHandler = (e) => {
        this.setState({
            [e.target.name] :e.target.value
        })
    };
  
   
          
        
    
  
        render() {
            return (
              <div className="App">
                <div >
                Firstname: <input
                    type="text"
                    name="firstName"
                    value={this.state.counter}
                    onChange={(e) => {
                      this.inputChangeHandler(e);
                    }}
                    
                   />
                <br></br>
                   Lastname: <input
                   type="text"
                   name="lastName"
                   value={this.state.counter}
                   onChange={(e) => {
                     this.inputChangeHandler(e);
                   }}
                   
                  />
                  <br></br>
                  Address: <input
                  type="text"
                  name="address"
                  value={this.state.counter}
                  onChange={(e) => {
                    this.inputChangeHandler(e);
                  }}
                  
                 />
                 <br></br>
                 City: <input
                 type="text"
                 name="city"
                 value={this.state.counter}
                 onChange={(e) => {
                   this.inputChangeHandler(e);
                 }}
                 
                />
                <br></br>
                PIn: <input
                type="text"
                name="pin"
                value={this.state.counter}
                onChange={(e) => {
                  this.inputChangeHandler(e);
                }}
                
               />
               <br></br>
               <label for="city1">Choose a city:</label>
              <select name="state" onClick={(e)=>{this.inputChangeHandler(e)}} id="city1">
                <option value="DELHHI">delhi</option>
                <option value="HARYANA">haryana</option>
                <option value="GUJRAT">gujrat</option>
                
              </select>
                

               <p> Gender:</p>
             <input type="radio" onClick={(e)=>{this.inputChangeHandler(e)}} id="male" name="gender" value="male"/>
                <label for="male">Male</label>
                <input type="radio" onClick={(e)=>{this.inputChangeHandler(e)}} id="female" name="gender" value="female"/>
                <label for="female">Female</label><br></br>

                <input type="checkbox" onClick={(e)=>{this.inputChangeHandler(e)}} id="gift1" name="gift" value="true"/>
                
                <label for="gift1"> Includes gift pack</label>
                <br></br>

                 </div>
                  
                    
                    
                
               
                  
                 
                  <button onClick={()=>alert(JSON.stringify(this.state))}>
                   submit
               </button>
            
            </div> );
             
    }
}
export default Form;