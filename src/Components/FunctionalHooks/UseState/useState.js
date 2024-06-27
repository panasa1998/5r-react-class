import { useState } from "react";


const UseStateExample=()=>{
    const intialState=10
    const[count,setcount]=useState(intialState)


    // const incrementHandler=()=>{
    //    setcount((count)=>count+1)
    // }
    // const decrementHandler=()=>{
    //     if(count>0)
    //     setcount((count)=>count-1)
    //  }
    //  const resetHandler=()=>{
    //     setcount(0)
    //  }

    const counterHandler=(type)=>{
        switch(type){
            case "Increment":
                setcount((count)=>count+1)
                break;
            case "Decrement":
                if(count>0)
                    setcount((count)=>count-1)
                    break;
            case "Reset":
                setcount(0)
                break;
            default:
                break;

        }

        
    }
    return(
        <>
        <h2>{count}</h2>
        {/* <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={resetHandler}>Reset</button> */}

        <button onClick={()=>counterHandler("Increment")}>Increment</button>
        <button onClick={()=>counterHandler("Decrement")}>Decrement</button>
        <button onClick={()=>counterHandler("Reset")}>Reset</button>
        </>
    )
}
export default UseStateExample;