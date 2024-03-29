import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./features/orderSlice";

export const store = configureStore({
  reducer: {
    order: orderReducer,
  },
});
