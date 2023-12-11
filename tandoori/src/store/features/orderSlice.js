//this folder is named order because order is one of its feature 
import { createSlice } from "@reduxjs/toolkit";
import { food_order } from "../../data";


const initialState = {
    food:food_order,
    amount: 2,
    total:0
}


const orderSlice = createSlice({
    name: 'butter_chicken',
    initialState,
})

console.log(orderSlice);

export default orderSlice.reducer;
