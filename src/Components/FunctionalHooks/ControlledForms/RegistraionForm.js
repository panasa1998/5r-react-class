import { useState } from 'react';



import { LockClosedIcon } from '@heroicons/react/solid'

export default function SignUpForm() {
    const [userName,setUserName]=useState("");
    const [userNameError,setUserNameError]=useState(false);
    const [password,setPassword]=useState("")
    const [passwordError,setPasswordError]=useState(false);
    const [rememberMe,setRememberMe]=useState("")
    const [serverError,setserverError]=useState(false)
    const userNameValidation=(userName)=>{
        let validUserName=false
        if(userName.length>10){
            validUserName=false
        }
        else{
            validUserName=true;
        }
        return validUserName;
    }

    const submitHandler=(event)=>{
        event.preventDefault();

        const userName=event.target.value;
        setUserName(userName)
        console.log(userName);
        if(userNameValidation(userName)){
            setUserNameError(false)
        }
        else{
            setUserNameError(true)
        }
    }


    const passwordValidation=(password)=>{
       return password.length>10?false:true;
    }
    const passwordHandler=(event)=>{
        const userEnteredPassword=event.target.value;
        setPassword(userEnteredPassword);
        if(passwordValidation(password)){
            setPassword(userEnteredPassword)
            setPasswordError(false)
        }
        else{
            setPasswordError(true)
        }
        
    }
    const onSubmitHandler=(event)=>{
      event.preventDefault();
      if(!userNameError && !passwordError){
        //hit the server
        apiCall(userName,password)
      }
    }
    const apiCall=(userName,password)=>{
      fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: 'emilys',
          password: 'emilyspass',
          expiresInMins: 30, // optional, defaults to 60
        })
      })
      .then(res => res.json())
      .then(response=>{
        console.log(response)
      });
    }

   
    
  return (
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                start your 14-day free trial
              </a>
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={onSubmitHandler}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  userName
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="text"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-t-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="UserName"
                  value={userName}
                  onChange={submitHandler}
                />
                {userNameError && <span>userName should be less than 10 characters</span>}
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-b-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={passwordHandler}
                />
               {passwordError && <span>password should be atleast 8 characters</span> }
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500
                  border-gray-300 rounded"
                  value={rememberMe}
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
            </div>
            <div>
            { !userNameError && !passwordError &&
              <button
                type="submit"
                className="group relative w-full flex justify-center
                py-2 px-4 border border-transparent text-sm font-medium
                rounded-md text-white bg-indigo-600 hover:bg-indigo-700
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  aria-hidden="true" />
                </span>
                Sign in
              </button>
}
            </div>
          </form>
        </div>
      </div>
  )
}