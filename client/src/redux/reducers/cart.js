import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  isLoaded: false,
  cartCount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log(action.payload);
      const itemExits = state.cart.find(
        (item) => item.product_id === action.payload.product_id
      );
      if (!itemExits) {
        console.log("Add To Cart Reducer");
        state.cart.push(action.payload);
        state.cartCount = state.cart.length;
      } else {
        console.log("Item has been already added");
      }
    },

    increment: (state, action) => {
      console.log(state.cart);
      const updatedItems = state.cart.map((item) =>
        item.product_id === action.payload.product_id
          ? { ...item, quantity: (item.quantity += 1) }
          : item
      );
      console.log(updatedItems);
    },
    decrement: (state, action) => {
      console.log(state);
      // state.cartCount -= 1;
      const updatedItems = state.cart.map((item) =>
        item.product_id === action.payload.product_id
          ? { ...item, quantity: (item.quantity -= 1) }
          : item
      );
      console.log(updatedItems);
    },
  },
});

export const { addToCart, increment, decrement } = cartSlice.actions;

export default cartSlice.reducer;
