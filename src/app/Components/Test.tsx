"use client";
import React, { useEffect } from "react";
import type { RootState } from "@/GlobalRedux/store";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
} from "@/GlobalRedux/Features/counter/counterSlice";
import { addToCart } from "@/GlobalRedux/Features/shoppingCart/shoppingCartSlice";
import { Product, otherReduxProductFiller } from "@/data";
const Test = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const cart = useSelector((state: RootState) => state.shoppingCart.cartItems);
  const dispatch = useDispatch();
  const handleDecrement = () => {
    count >= 1 ? dispatch(decrement()) : alert("no more items in cart");
  };
  const handleIncrement = () => {
    count < 10 ? dispatch(increment()) : alert("Do you really need that many?");
  };

  // id: number;
  // title: string;
  // desc?: string;
  // img?: string;
  // price: number;
  const cartItems = cart.map((item) => {
    return (
      <div key={item.id}>
        <p>{item.title}</p>
        <p>{item.img}</p>
        <p>{item.desc}</p>
        <p>{item.price}</p>
      </div>
    );
  });

  const handleAddItem = (product: Product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="main-container">
      <div>Test</div>
    </div>
  );
};

export default Test;
