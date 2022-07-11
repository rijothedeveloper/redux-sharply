import { createSlice } from "@reduxjs/toolkit";

interface cartState {
  products: any;
  total: number;
}
const initialState: cartState = {
  products: {},
  total: +0,
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, product) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      if (state.products[product.payload.name]) {
        state.products[product.payload.name].quantity += 1;
      } else {
        state.products[product.payload.name] = { ...product, quantity: 1 };
      }
      state.total += +product.payload.price;
    },
    remove: (state, product) => {
      if (
        state.products[product.payload.name] &&
        state.products[product.payload.name].quantity > 0
      ) {
        state.products[product.payload.name].quantity -= 1;
        state.total -= +product.payload.price;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
