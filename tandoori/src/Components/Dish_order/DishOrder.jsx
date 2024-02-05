import React from "react";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { useSelector, useDispatch } from "react-redux";
import { decrease, increase } from "../../store/features/orderSlice";

const DishOrder = ({ id, name, amount }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-wrap p-3 justify-between my-5 rounded-xl  border-2 border-slate-900 ">
      <h1>{name}</h1>
      <div>
        <button type="button" onClick={() => {console.log("button clicked", id); dispatch(increase({ id }));}}>
          <KeyboardArrowUpRoundedIcon />
        </button>
        <h2 className="flex justify-center">{amount}</h2>
        <button
          type="button"
          onClick={() => {
            console.log('this was clicked',id); dispatch(decrease({ id }));
          }}
        >
          <KeyboardArrowDownRoundedIcon />
        </button>
      </div>
    </div>
  );
};

export default DishOrder;
