import React from "react";
import { useNavigate } from "react-router-dom";

function InvalidScreen(){
    const navigate=useNavigate()
    let errorHandler=()=>{
        navigate("/")
    }
    return(
        <div>
            <h2>This page is not found</h2>
            <button onClick={errorHandler}>Back to Home</button>
        </div>
    )
}
export default InvalidScreen;