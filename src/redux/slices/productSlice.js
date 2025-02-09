import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  getProductsFromLocalStorage,
  setProductsToLocalStorage,
  setFavoritesToLocalStorage,
  getFavoritesFromLocalStorage,
} from "../../utils/localStorageUtils";

export const fetchProduct = createAsyncThunk("product/fetchProduct", async () => {
  const productsFromLS = getProductsFromLocalStorage();
  if (productsFromLS) {
    return productsFromLS;
  }
  const { data } = await axios.get("./data.json");

  return data;
});

const productSlice = createSlice({
  name: "products",
  initialState: {
    data: getProductsFromLocalStorage() || [],
    favorites: getFavoritesFromLocalStorage() || [],
    isLoading: false,
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const id = action.payload;
      const product = state.data.find((item) => item.id === id);

      if (product) {
        product.isFavorite = !product.isFavorite;
        setProductsToLocalStorage(state.data);
      }
      const allFavorites = state.data.filter((product) => product.isFavorite);

      const prevFavorites = state.favorites.filter((product) =>
        allFavorites.some((fav) => fav.id === product.id)
      );

      const newFavorites = allFavorites.filter(
        (product) => !prevFavorites.some((fav) => fav.id === product.id)
      );
      const updatedFavorites = [...prevFavorites, ...newFavorites];
      state.favorites = updatedFavorites;

      setFavoritesToLocalStorage(state.favorites);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });

    builder.addCase(fetchProduct.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const { toggleFavorite } = productSlice.actions;

export default productSlice.reducer;
