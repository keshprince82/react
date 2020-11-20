import React,{useState,useEffect} from 'react';
import Welcome from "./welcome";
 export default function Hook(){
     const[count,setCount]=useState(0)
     const[unmount,setUnmount]=useState(false)

    
     useEffect(()=>{
         return()=>{
             alert("comp unmount")
         }
     },[])
      
      useEffect(() => {
        
        alert('ComponentDidMount')
    }, []) 
    
    
    useEffect(() => {
        
       alert("ComponentDidUpdate")
    }) 
    
    //  function unMount () {
    //     setUnmount(true);
    // }
    function increment(){
        setCount(count+1)
    }
    return(
    <div>
        counter: <input
        type="text"
        name="count"
        value={count}
        />
        <button onClick={increment}> increase </button>
        {/* <button onClick={unMount}> unmount</button>
        {unmount || <div> Unmount me if u can</div>} */}




</div>
    )
    
      
    
 }