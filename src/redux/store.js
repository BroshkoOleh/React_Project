import { configureStore } from "@reduxjs/toolkit";

import productReduser from "./slices/productSlice";
import modalReduser from "./slices/modalSlice";
import cartReducer from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    products: productReduser,
    modal: modalReduser,
    cart: cartReducer,
  },
});

export default store;
