//this folder is named order because order is one of its feature
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
    },

    increase: (state, {payload}) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      if(cartItem){
        cartItem.amount += 1;
      }
    },


    decrease:(state,{payload})=>{
      
      const cartItem = state.cartItems.find((item)=>item.id === payload.id);
      if(cartItem){
        cartItem.amount -= 1;
      }
    }

  },
});





export default orderSlice.reducer;


export const { clearCart,increase,decrease } = orderSlice.actions;
