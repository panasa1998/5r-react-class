import React, { useReducer } from "react";


const ReducerFunction=(state,action)=>{
    switch(action.type){
        case "BOOKED_TICKETS":
            return {...state,bookedTickets:state.bookedTickets+action.noOfTickets,
                totalAvailableTickets:state.totalAvailableTickets-action.noOfTickets
            }
        case "HOLD_TICKETS":
            return {...state,holdTickets:state.holdTickets+action.noOfTickets}
        default:
            return state
    }
}


const state={
    totalAvailableTickets:100,
    bookedTickets:20,
    holdTickets:20

}

const UseReducerHookEx1=()=>{
    const [currentState,dispatch]=useReducer(ReducerFunction,state)

    const BookedTicketHandler=()=>{
        dispatch({
            type:"BOOKED_TICKETS",
            noOfTickets:1,
        })
    }

    const HoldTicketsHandler=()=>{
        dispatch({
            type:"HOLD_TICKETS",
            noOfTickets:1,
        })
    }
    return(
        <>
        <h2>TotalAvailableTickets:{currentState.totalAvailableTickets}</h2>
        <h2>BookedTickets:{currentState.bookedTickets}</h2>
        <h2>HoldTickets:{currentState.holdTickets}</h2>

        <button onClick={BookedTicketHandler}>BookedTickets</button>
        <button onClick={HoldTicketsHandler}>HoldTickets</button>
        </>
    )
}
export default UseReducerHookEx1;