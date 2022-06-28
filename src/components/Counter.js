import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByValue,
} from "../app/features/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(increment());
  };

  const handleSubtract = () => {
    if (count > 0) {
      dispatch(decrement());
    }
  };
  return (
    <div>
      <h2>Counter App</h2>
      <h3>Count</h3>
      <p>{count}</p>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSubtract}>-</button>
      <button
        onClick={() => {
          dispatch(incrementByValue(10));
        }}
      >
        AddBy 10
      </button>
    </div>
  );
};

export default Counter;

//state
//action and payload
//reducer
//store
//dispatch
