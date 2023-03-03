import React, { useReducer } from "react"

const initialState = 0;
const reducer = (state, action)=>{
    switch (action.type) {
        case "INC":
            return state + 1
        case "DEC":
            return state  -1
        case "RES":
            return initialState
        default:
            return state
    }
}
const CounterOne = () => {
    const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
        <div>Count - {count}</div>
        <button onClick={() => dispatch({type : "INC"})}>Increase</button>
        <button onClick={() => dispatch({type : "DEC"})}>Decrease</button>
        <button onClick={()=>dispatch({type : "RES"})}>Reset</button>
    </ div>
  )
}

export default CounterOne