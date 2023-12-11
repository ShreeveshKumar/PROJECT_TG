import React, { useEffect, useState } from "react";
import "./Order.css";
import SearchIcon from "@mui/icons-material/Search";
import Navbar from "../../Components/Navbar/Navbar";
import { OrderDish } from "../../data";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import DishOrder from "../../Components/Dish_order/DishOrder";
import { food_order } from "../../data";

const Order = () => {
  return (
    <div>
      <Navbar />
      <Order_search />
      <DishDrop />
      <OrderBar />
    </div>
  );
};

const Order_search = () => {
  const amount = useSelector((store) => store.bc.amount);

  return (
    <span className="flex justify-center dish_search ">
      <span>
        <input
          type="text"
          name=""
          id="dish_input"
          placeholder="Search by dish name..."
          className="p-10 "
        />
        <SearchIcon />
      </span>
      <span className="flex place-item-end">
        <ShoppingBasketIcon />
        {amount}
      </span>
    </span>
  );
};

const OrderBar = () => {
  return (
    <React.Fragment>
      <div className="orderrow">
        <Link to="/Order/Admin">
          <button className="clearbutton">Clear</button>
        </Link>
        <Link to="/Order/Deliver" className="proceedbuttonhi">
          <button className="proceedbuttonstyle">Proceed</button>
        </Link>
      </div>
    </React.Fragment>
  );
};

const linking = "http://localhost:4000";

const DishDrop = () => {
  const [bc, setbc] = useState(0);
  const [rc, setrc] = useState(0);
  const [cc, setcc] = useState(0);

  const Order = {
    bc_num: bc,
    rc_num: rc,
  };

  const amount = useSelector((store) => store.bc.amount);
  console.log(amount);

  // const handleorder = () => {
  //   fetch(linking, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //     body: JSON.stringify(Order),
  //   }).catch((err) => {
  //     console.log(err);
  //   });
  // };

  if (amount < 1) {
    return (
      <div className="flex flex-col flex-wrap justify-center items-center text-3xl my-5">
        <h1>Your Bag</h1>
        <h2>IS EMPTY </h2>
      </div>
    )
  }

  return (
    <div>
      {food_order.map((gru,index) => {
          return <DishOrder key={gru.index} name={gru.name} amount={gru.amount} />
        })
      }
    </div>
  )
}




export default Order;
