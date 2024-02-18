import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Admin = () => {
  const [rawdata, setdata] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch("http://localhost:4000/Admin", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await response.json();
      console.log(data);
      if (!data.isToken) {
        navigate("/login");
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
      console.log(data);
      setdata(data);
      console.log(rawdata);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col place-content-center items-center bg-slate-900 font-comfortaa w-screen h-screen text-white ">
      <ToastContainer />
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
            order_no={rawdata[key]._id}
            name={rawdata[key].name}
            houseNo={rawdata[key].houseNo}
            fulladdress={rawdata[key].fulladdress}
            food_order={rawdata[key].food_order}
            mobile={rawdata[key].mobile}
            items={rawdata[key].items}
          />
        ))}
      </div>
    </div>
  );
};

const CartCard = ({ name, houseNo, order_no, fulladdress, mobile, items }) => {
  const DeleteOrder = async () => {
    toast("order deleted ");
    try {
      await fetch(`http://localhost:4000/deleteOrder/${order_no}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  console.log(items[0]);

  return (
    <div className="m-5 border-2 p-5  border-black text-black  ">
      <div>Order_ID: {order_no}</div>
      <div>Name: {name}</div>
      <div>House_No: {houseNo}</div>
      <div>Address: {fulladdress}</div>
      <div>Mobile No: {mobile}</div>
      <div className="flex flex-wrap gap-3 ">
        <div>Dish Name</div>
        <div>Amount</div>
      </div>
      {items.map((rope) => {
        return <Smallordercard name={rope.name} amount={rope.amount} />;
      })}

      <div className="flex gap-5 justify-around ">
        <button
          className="bg-blue-600 p-2 rounded-md "
          onClick={() => DeleteOrder()}
        >
          Cancel Order
        </button>
      </div>
    </div>
  );
};

const Smallordercard = ({ name, amount }) => {
  return (
    <div>
      <div className="flex flex-wrap gap-3 ">
        <div>{name}</div>
        <div>{amount}</div>
      </div>
    </div>
  );
};

export default Admin;
