import { createSlice } from "@reduxjs/toolkit";
import { Deliver_question } from "../../data";

const initialState = {
  questions: Deliver_question,
  name: " ",
  mobile_no: " ",
  house_no: " ",
  full_address: " ",
};

export const addressSlice = createSlice({
  name: "address",
    initialState,
    name: (state, action)=>{
    //   const {text} = 
    }
  
});

export default addressSlice.reducer;
