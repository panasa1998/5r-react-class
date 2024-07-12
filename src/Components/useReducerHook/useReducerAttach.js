

export const Reducer=(state,action)=>{
    switch(action.type){
        case "ADD_TODO":
            return {...state,todos:[...state.todos,"Eat breakfast at 10 am"]}
        default:
            return state;
    }
}

export const initialState={
    todos:["wake up at 8 am"],
}