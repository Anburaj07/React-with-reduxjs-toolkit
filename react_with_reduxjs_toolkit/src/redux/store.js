import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import { productApi } from "./slices/productApi";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

export default store;
