"use client";
import React from "react";
import type { RootState } from "@/GlobalRedux/store";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
} from "@/GlobalRedux/Features/counter/counterSlice";
const Test = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const handleDecrement = () => {
    count >= 1 ? dispatch(decrement()) : alert("no more items in cart");
  };
  const handleIncrement = () => {
    count < 10 ? dispatch(increment()) : alert("Do you really need that many?");
  };
  return (
    <div className="main-container">
      <div>Test</div>
      <div>{count}</div>

      <div className="button-container">
        <button className="button-styles" onClick={handleDecrement}>
          -
        </button>
        <button className="button-styles" onClick={handleIncrement}>
          +
        </button>
      </div>
    </div>
  );
};

export default Test;
