import React from "react";
import "./Order.css";
import SearchIcon from "@mui/icons-material/Search";
import Navbar from "../../Components/Navbar/Navbar";
import { Link } from "react-router-dom";
import DishOrder from "../../Components/Dish_order/DishOrder";
import { food_order } from "../../data";
import { Icon2 } from "../../Icons";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../store/features/orderSlice";
import Emptycard from "../../Components/EmptyCard.js/Emptycard";
// import { clearCart } from "../../store/features/orderSlice";

const Order = () => {
  return (
    <div>
      <Navbar />
      <OrderSearch />
      <DishDrop />
      <OrderBar />
    </div>
  );
};

const OrderSearch = () => {
  const { amount ,total} = useSelector((state) => state.order);

  return (
    <div className="flex justify-between m-5 ">
      <div>Search bar here</div>
      <div>total items {amount}</div>
      <div>Cost Rs{total}</div>
    </div>
  )
}

const OrderBar = () => {
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <div className="flex inset-x-0 bottom-0 fixed align-middle justify-center  ">
        <div className="flex flex-wrap justify-center w-1/2 bg-yellow-400 text-black p-5">
          <button className="" onClick={() => dispatch(clearCart())}>
          Clear
          </button>
        </div>
        <Link
          to="/Order/Deliver"
          className="flex flex-wrap w-1/2 justify-center align-middle text-black bg-sky-500 p-5"
        >
          <button className="">Proceed</button>
        </Link>
      </div>
    </React.Fragment>
  );
};

const DishDrop = () => {
  const { amount, cartItems, total } = useSelector((state) => state.order);

  if (amount < 1) {
    return (
      <Emptycard />
    );
  }

  return (
    <>
      <div className="p-3 mb-20">
        {cartItems.map((gru) => {
          return <DishOrder key={gru.id} name={gru.name}/>
        })}
      </div>



    </>

  );
};

export default Order;
