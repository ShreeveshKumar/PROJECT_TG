import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [rawdata, setdata] = useState([]);
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
          credentials: "include",
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

  const fetchorders = async () => {
    console.log("button clicked");
    try {
      const orders = await fetch("http://localhost:4000/giveorders", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });

      var data = await orders.json();
      setdata(data);
      console.log(rawdata);
    } catch (err) {
      console.log(err);
    }
  };


  
  return (
    <div className="flex flex-col place-content-center items-center bg-slate-900 font-comfortaa w-screen h-screen text-white ">
      <div className="flex justify-around gap-10 ">
        <h1>Click to refresh </h1>

        <button
          type="button"
          className="border-2 border-black text-white bg-black"
          onClick={() => fetchorders()}
        >
          Refresh
        </button>
      </div>

      <div className="bg-slate-400 w-4/5 p-5  m-5 ">
        
        {Object.keys(rawdata).map((key) => (
          <CartCard
            key={key}
            order_no={rawdata[key].order_no}
            address={rawdata[key].address}
            food_order={rawdata[key].food_order}
            mobile_no={rawdata[key].mobile_no}
            payment_option={rawdata[key].payment_option}
          />
        ))
        }
      </div>
    </div>
  );
};

const CartCard = ({
  order_no,
  address,
  food_order,
  mobile_no,
  payment_option,
}) => {

  const DeleteOrder = async ({ order_no }) => {
    try {
      await fetch(`http://localhost:4000/giveOrder/${order_no}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
    }
    catch (err) {
      console.log(err);
    }
  }

  
  return (
    <div className="m-5 border-2 p-5  border-black text-black ">
      <div>Order no: {order_no}</div>
      <div>Address: {address}</div>
      <div>Food:{food_order}</div>
      <div>Mobile_no: {mobile_no}</div>
      <div>Payment: {payment_option} </div>

      <div className="flex gap-5 justify-around ">
        <button className="bg-blue-600 p-2 rounded-md " onClick={()=>DeleteOrder()}>Cancel  Order</button>

      </div>
    </div>
  );
};

export default Admin;
