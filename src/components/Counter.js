import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { INCREMENT } from "../constants/CounterConstants";
import {
  decrementCounter,
  incrementCounter,
} from "../store/actions/CounterActions";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch({ type: INCREMENT });
  };

  const handleSubtract = () => {
    if (count > 0) {
      dispatch(decrementCounter());
    }
  };
  return (
    <div>
      <h2>Counter App</h2>
      <h3>Count</h3>
      <p>{count}</p>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSubtract}>-</button>
    </div>
  );
};

export default Counter;

//state
//action and payload
//reducer
//store
//dispatch
