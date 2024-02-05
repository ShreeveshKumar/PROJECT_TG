import { configureStore } from "@reduxjs/toolkit";
import orderReducer from './features/orderSlice';
import addressReducer from './features/addressSlice';


export const store = configureStore({
  reducer: {
    order: orderReducer,
    address:addressReducer,
  },
});


