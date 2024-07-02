import React, { useState } from "react"
import LoginSuccess from "./success"


 const LoginForm = () => {
    const [fullName,setFullName]=useState("")
    const [fullNameError,setFullNameError]=useState(false)
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [passwordError,setPasswordError]=useState(false)
    const [serverError,setServerError]=useState(false)

    const [isLogin,setIsLogin]=useState(false)

    const [userDetails,setUserDetails]=useState({})


    const fullNameValidation=(name)=>{
        let isValidName=false
        if(name.length>=15){
            isValidName=false
        }
        else{
            isValidName=true;
        }
        return isValidName;
    }

    const fullNameHandler=(event)=>{
        const userEnteredName=event.target.value;
        setFullName(userEnteredName)
        
        if(fullNameValidation(userEnteredName)){
            setFullNameError(false)
        }
        else{
            setFullNameError(true)
        }
    }

    const emailHandler=(event)=>{
        const userEnteredEmail=event.target.value;
        setEmail(userEnteredEmail)
    }

    const passwordValidation=(password)=>{
        let validPassword=false;
        if(password.length>=15){
            validPassword=false;
        }
        else{
            validPassword=true;
        }
        return validPassword;
    }


    const passwordHandler=(event)=>{
        const userEnteredPassword=event.target.value;
        setPassword(userEnteredPassword)

        if(passwordValidation(userEnteredPassword)){
            setPasswordError(false)
        }
        else{
            setPasswordError(true)
        }
    }

    const submitHandler=(event)=>{
        event.preventDefault();
        if(!fullNameError && !passwordError){
            apiCall(fullName,password)
        }
    }


    const apiCall=(userEnteredName,userEnteredPassword)=>{
        fetch('https://dummyjson.com/auth/login',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              
              username: userEnteredName,
              password: userEnteredPassword,
              expiresInMins: 30 // optional, defaults to 60
            })
          })
          .then(res => res.json())
          .then(response=>{
            console.log(response)
            if(response.message){
                setServerError(response.message)
            }
            else{
                setServerError(false)
                setIsLogin(true)
                setUserDetails(response)
            }
          });
    }







    return (
       <>
       {
        isLogin?
        <LoginSuccess data={userDetails}/>
        :
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
            <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy">
                Sign UP
            </h1>
            <form className="mt-6" onSubmit={submitHandler}>
                <div className="mb-2">
                    <label
                        for="email"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Full Name
                    </label>
                    <input
                        type="text"
                        className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        value={fullName}
                        onChange={fullNameHandler}
                    />
                    {fullNameError && <span style={{color:"red"}}>Name should be in between 5 and 15 characters</span>} 
                </div>
                <div className="mb-2">
                    <label
                        for="email"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        value={email}
                        onChange={emailHandler}
                    />
                </div>
                <div className="mb-2">
                    <label
                        for="password"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        value={password}
                        onChange={passwordHandler}
                    />
                   {passwordError && <span style={{color:"red"}}>password should be less 10 characters</span>} 
                </div>
                <div className="mt-6">
                    { !fullNameError && !passwordError &&
                    <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                        Login
                    </button>
}
                    {serverError && <span style={{color:"red"}}>{serverError}</span>}
                </div>
            </form>

            <p className="mt-8 text-xs font-light text-center text-gray-700">
                {" "}
                Already have an account?{" "}
                <a
                    href="#"
                    className="font-medium text-indigo-600 hover:underline"
                >
                    Sign in
                </a>
            </p>
        </div>
    </div>
       }
       </>
    );
}
export default LoginForm;