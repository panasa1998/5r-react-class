import React, { useReducer } from "react";
import { Reducer,initialState } from "./useReducerAttach";


const UseReducerHookEx2=()=>{
    const [currentState,dispatch]=useReducer(Reducer,initialState)

    const AddTodoHandler=()=>{
        dispatch({
            type:"ADD_TODO"
        })
    }
    return(
        
            <div>
                <button onClick={AddTodoHandler}>Add Todo</button>
                {
                    currentState.todos.map(eachTodo=>{
                        return(
                            <h2>{eachTodo}</h2>
                        )
                    })
                }
            </div>
        
    )
}
export default UseReducerHookEx2;