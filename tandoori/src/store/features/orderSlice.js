//this folder is named order because order is one of its feature
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  
});


console.log(orderSlice);

export const { increment, decrement, incrementByAmount } = orderSlice.actions;

export default orderSlice.reducer;
