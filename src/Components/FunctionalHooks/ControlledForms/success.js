
import React from "react"

const LoginSuccess=(props)=>{
    const { data }=props;
    return(
        <>
            <h3>Welcome {data.username}</h3>
        </>
    )
}
export default LoginSuccess;