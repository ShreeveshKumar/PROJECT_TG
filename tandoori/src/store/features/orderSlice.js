import { createSlice } from "@reduxjs/toolkit";
import { food_order } from "../../data";

const initialState = {
  cartItems: food_order,
  amount: 1,
  total: 0,
  isLoading: true,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
      state.amount = 0;
    },

    increase: (state, action) => {
      const { id } = action.payload;
      const itemToUpdate = state.cartItems.find((item) => item.id === id);
      if (itemToUpdate) {
        itemToUpdate.amount = itemToUpdate.amount + 1;
      }
    },

    decrease: (state, { payload }) => {
      const itemToUpdate = state.cartItems.find(
        (item) => item.id === payload.id
      );
      if (itemToUpdate) {
        itemToUpdate.amount = itemToUpdate.amount - 1;
      }
    },

    totalamount: (state) => {
      let cost = 0;
      let amt = 0;
      state.cartItems.forEach((element) => {
        cost += element.amount;
        amt += element.amount * 250;
      });
      state.amount = amt;
      state.total = cost;
    },
  },
});

export default orderSlice.reducer;

export const { clearCart, increase, decrease, totalamount } =
  orderSlice.actions;
