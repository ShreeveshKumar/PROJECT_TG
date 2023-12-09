//this folder is named order because order is one of its feature 
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    amount: 0,
    total:0
}


const orderSlice = createSlice({
    name: 'butter_chicken',
    initialState,
})

console.log(orderSlice);

export default orderSlice.reducer;
