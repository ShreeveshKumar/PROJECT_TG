import React, { useState } from "react";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../store/features/orderSlice";

const DishOrder = ({name,index}) => {
  const count = useSelector((store) => store);
  console.log(count);

  return (
    <div
      className="flex flex-wrap p-3 justify-between my-5 rounded-xl  border-2 border-slate-900 "
      key={index}
    >
      <h1>{name}</h1>
      <div>
        <button type="button" onClick={()=>dispatch(increment())}>
          <KeyboardArrowUpRoundedIcon />
        </button>
        <h2 className="flex justify-center">0</h2>
        <button type="button" onClick={()=>(decrement())}>
          <KeyboardArrowDownRoundedIcon />
        </button>
      </div>
    </div>
  );
};

export default DishOrder;
