import { createSlice } from "@reduxjs/toolkit";
import { Product } from "@/data";
// import { Products } from "@/data";
import { reduxProductFiller } from "@/data";

export interface ShoppingCartState {
  cartItems: Product[];
}

const initialState: ShoppingCartState = {
  cartItems: [],
};

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
  },
});

export const { addToCart } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
