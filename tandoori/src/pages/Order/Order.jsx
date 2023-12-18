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
import { Icon2 } from "../../Icons";

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
    <span className="flex justify-center  ">
      <span>
        <input
          type="text"
          name=""
          id="dish_input"
          placeholder="Search by dish name..."
          className=" "
        />
        <SearchIcon />
      </span>
      <span className="flex place-item-end">
       <Icon2 /> {amount}
      </span>
    </span>
  );
};

const OrderBar = () => {
  return (
    <React.Fragment>
      <div className="flex inset-x-0 bottom-0 fixed align-middle justify-center  ">
        <Link to="/Order/Admin" className="flex flex-wrap justify-center w-1/2 bg-yellow-400 text-black p-5">
          <button className="">Clear</button>
        </Link>
        <Link to="/Order/Deliver" className="flex flex-wrap w-1/2 justify-center align-middle text-black bg-sky-500 p-5">
          <button className="">Proceed</button>
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
    <div className="p-3 mb-20">
      {food_order.map((gru,index) => {
          return <DishOrder key={gru.index} name={gru.name} amount={gru.amount} />
        })
      }
    </div>
  )
}




export default Order;
