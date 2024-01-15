import React, { useState, useEffect } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [show, setshow] = useState(false);

  const [order_no, setOrder] = useState(" ");
  const [payment_option, setPayment] = useState(" ");
  const [food_order, setFood] = useState(" ");
  const [address, setAddress] = useState(" ");
  const [mobile_no, setMobile] = useState(" ");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch("http://localhost:4000/Admin", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        });
        const data = await response.json();
        console.log(data);
        if (!data.isToken) {
          navigate("/login");
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchdata();
  }, [navigate]);

  return (
    <div className="flex place-content-center items-center bg-slate-900 font-comfortaa w-screen h-screen text-white ">
      <button
        type="button"
        className="border-2 border-black text-white bg-black"
        
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
