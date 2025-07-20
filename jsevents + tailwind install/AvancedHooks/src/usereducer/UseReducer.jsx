import React, { useReducer } from "react";

export const UseReducer = () => {
  const initialState = {
    count: 0,
    inc: 2,
    dec: 3,
  };

  const reducer = (state, action) => {
    // console.log(state, action);
    // if (action.type === "INCREMENT") return state + 1;
    // if (action.type === "DEREMENT") return state - 1;
    // if (action.type === "RESET") return (state = 0);

    switch (action.type) {
      case "INCREMENT":
        return { ...state, count: state.count + state.inc };
      case "DEREMENT":
        return { ...state, count: state.count - state.dec };
      case "RESET":
        return { ...state, count: 0 };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="UseReducer">
      <button onClick={() => dispatch({ type: "DEREMENT" })}>Decrement</button>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "RESET" })}>RESET</button>
    </div>
  );
};
