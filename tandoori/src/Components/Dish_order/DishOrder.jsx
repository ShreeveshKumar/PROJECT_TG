import React from "react";
// import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
// import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { useSelector, useDispatch } from "react-redux";
import { decrease, increase } from "../../store/features/orderSlice";

const DishOrder = ({ id, name }) => {
  const amount = useSelector((store) => store.order.amount);
  console.log(amount);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-wrap p-3 justify-between my-5 rounded-xl  border-2 border-slate-900 ">
      <h1>{name}</h1>
      <div>
        <button
          type="button"
          onClick={() => {
            console.log("button clicked");
            dispatch(increase({ id }));
          }}
        >
          up
        </button>
        <h2 className="flex justify-center">{amount}</h2>
        <button
          type="button"
          onClick={() => {
            dispatch(decrease({ id }));
          }}
        >
          down
        </button>
      </div>
    </div>
  );
};

export default DishOrder;
