// import { useState } from "react";


// const TodoComponent=()=>{
//     const initalState=[
//         {
//             id:1,
//             Name:"Naresh",
//             Batch:"5R",
//             Projects:["Dietyog","weatherApp","Hangman"]
//         },
//         {
//             id:2,
//             Name:"Sai",
//             Batch:"6R",
//             Projects:["Otp generator","flippy bird","ticket booking"]
//         }

//     ]
//     const[todos,setTodo]=useState(initalState)

//     const todoHandler=()=>{
//         const dummyTodo={
//             id:3,
//             Name:"Amruth",
//             Batch:"1R",
//             Projects:["crickbuzz","expense tracker","crypto currency"]
//         }
        
//         const dummyInclude=todos.find((eachTodo)=>eachTodo.id===dummyTodo.id)
//         const updatedTodos=[...todos,dummyTodo]
//         if(!dummyInclude){
//             setTodo(updatedTodos)
//         }
//     }
//     return(
//         <>
//             <button onClick={todoHandler}>Add Todo</button>
//             {
//                 todos.map((each)=>{
//                     return(
//                         <div>
//                         <h2>{each.Name}</h2>
//                         {
//                             each.Projects.map((eachProject)=>{
//                                 return(
//                                     <>
//                                         <h4>{eachProject}</h4>
//                                     </>
//                                 )
//                             })
//                         }
//                         </div>
//                     )
//                 })
//             }
//         </>
//     )
// }
// export default TodoComponent;

export default function App() {
    return (
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    )
  }