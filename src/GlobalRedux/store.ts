"use client";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../GlobalRedux/Features/counter/counterSlice";
import shoppingCartReducer from "../GlobalRedux/Features/shoppingCart/shoppingCartSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    shoppingCart: shoppingCartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
