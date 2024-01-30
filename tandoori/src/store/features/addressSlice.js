import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import { create } from "@mui/material/styles/createTransitions";



const initialState =
{
    name: " ",
    mobile_no: " ",
    address: " ",
    full_address: " ",
}



export const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        name: (state, { payload }) => {
            const username = payload.name;

        },
        mobile_no:(state,{payload}) =>{
            const mobile_no = payload.mobile_no;

        },
        address:(state,{payload})=>{
            const state.address = payload.address;
        },
        full_address:(state,{payload})=>{
            const state.full_address = payload.full_address;
        }


    }

})
