import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button } from "@mui/material";
import axios from "axios";

const Admin = () => {
  const [show, setshow] = useState(false);

  const [order_no, setOrder] = useState(" ");
  const [payment_option, setPayment] = useState(" ");
  const [food_order, setFood] = useState(" ");
  const [address, setAddress] = useState(" ");
  const [mobile_no, setMobile] = useState(" ");


  const ClickToGet = () => {

    axios
      .get("http://localhost:4000/food-order")
      .then((response) => {
        console.log(response.data);
        setOrder(response.data.order_no);
        setPayment(response.data.payment_option);
        setFood(response.data.food_order);
        setAddress(response.data.address);
        setMobile(response.data.mobile_no);
      })
      .catch((err) => {
        console.log("error found", err);
      });
      console.log(order_no);
      console.log(payment_option);
      console.log(food_order);
      console.log(address);
      console.log(mobile_no);
  };


  return (
    <div className="flex place-content-center items-center bg-slate-900 font-comfortaa w-screen h-screen text-white ">
      <button
        type="button"
        className="border-2 border-black text-white bg-black"
        onClick={() => ClickToGet()}
      >
        Refresh
      </button>
      <div className="bg-slate-400 w-4/5 p-5 ">
        <div className="flex flex-wrap justify-between ">
          <div className="">{order_no}`</div>
          <div className="bg-neon-900 ">Cash on Delivery</div>
        </div>

        <div className="border-r-2 m-3  ">
          <div>order name </div>
        </div>

        <div className="flex justify-evenly ">
          <Button className="">Cancel Order</Button>

          <Button>Accept Order</Button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
