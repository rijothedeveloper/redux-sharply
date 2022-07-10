import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./shoppingCartSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});
