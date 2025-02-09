const PRODUCTS_LS_KEY = "products";
const FAVORITES_LS_KEY = "favorites";
const PRODUCTS_CART_LS_KEY = "cart";

export const setProductsToLocalStorage = (data) => {
  localStorage.setItem(PRODUCTS_LS_KEY, JSON.stringify(data));
};

export const getProductsFromLocalStorage = () => {
  const value = localStorage.getItem(PRODUCTS_LS_KEY);

  return value ? JSON.parse(value) : null;
};

export const setFavoritesToLocalStorage = (data) => {
  localStorage.setItem(FAVORITES_LS_KEY, JSON.stringify(data));
};

export const getFavoritesFromLocalStorage = () => {
  const value = localStorage.getItem(FAVORITES_LS_KEY);

  return value ? JSON.parse(value) : [];
};

export const setProductsCartToLocalStorage = (data) => {
  localStorage.setItem(PRODUCTS_CART_LS_KEY, JSON.stringify(data));
};

export const getProductsCartFromLocalStorage = () => {
  const value = localStorage.getItem(PRODUCTS_CART_LS_KEY);

  return value ? JSON.parse(value) : [];
};
