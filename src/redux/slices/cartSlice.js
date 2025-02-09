import { createSlice } from "@reduxjs/toolkit";
import {
  setProductsCartToLocalStorage,
  getProductsCartFromLocalStorage,
} from "../../utils/localStorageUtils";

const productCartSlice = createSlice({
  name: "CartProducts",
  initialState: {
    productsCart: getProductsCartFromLocalStorage() || [],
  },
  reducers: {
    addToCart: (state, action) => {
      const data = action.payload;
      const elem = state.productsCart.find((item) => item.id === data.id);
      if (!elem) {
        state.productsCart.push({ ...data, quantity: 1 });
      } else {
        elem.quantity += 1;
      }

      setProductsCartToLocalStorage(state.productsCart);
    },
    deleteShopCard: (state, action) => {
      const data = action.payload;
      state.productsCart = state.productsCart.filter((item) => item.id !== data.id);
      setProductsCartToLocalStorage(state.productsCart);
    },
    handleIncrement: (state, action) => {
      const id = action.payload;
      state.productsCart = state.productsCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );

      setProductsCartToLocalStorage(state.productsCart);
    },
    handleDecrement: (state, action) => {
      const id = action.payload;
      state.productsCart = state.productsCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item
      );
      setProductsCartToLocalStorage(state.productsCart);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      state.productsCart = state.productsCart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );
      setProductsCartToLocalStorage(state.productsCart);
    },
    clearCart: (state) => {
      state.productsCart = [];
      setProductsCartToLocalStorage([]);
    },
  },
});

export const {
  addToCart,
  deleteShopCard,
  handleIncrement,
  handleDecrement,
  updateQuantity,
  clearCart,
} = productCartSlice.actions;

export const selectTotalQuantity = (state) =>
  state.cart.productsCart.reduce((total, product) => total + product.quantity, 0);

export const selectTotalPrice = (state) =>
  state.cart.productsCart.reduce((sum, item) => sum + item.price * item.quantity, 0);

export default productCartSlice.reducer;
