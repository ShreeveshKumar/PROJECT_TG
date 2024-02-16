import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Delivery.css";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import { UseSelector, useSelector } from "react-redux";
import axios from "axios";

const Delivery = () => {
  return (
    <React.Fragment>
      <Navbar />
      <DeliverAddress />
      <Footer />
    </React.Fragment>
  );
};

const DeliverAddress = () => {
  const [info, setInfo] = useState({
    name: "",
    mobile: "",
    houseNo: "",
    fullAddress: "",
    option: false,
  });

  const cartItems = useSelector((store) => store.order.cartItems);
  const amount = useSelector((store) => store.order.amount);

  const [final, setfinal] = useState({ info, cartItems });

  useEffect(() => {
    setfinal({ info, cartItems });
    console.log(final);
  }, [info]);

  const sendOrder = async () => {
    if (amount >= 0) {
      try {
        const response = axios.post("http://localhost:4000/placeorder", final);
        console.log("data sent successfully");
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("select a valid amount");
    }
    return 0;
  };

  return (
    <div className="container mx-auto mt-10 p-5 bg-gray-100 rounded-lg">
      <div className="flex flex-col md:flex-row text-md font-bold place-content-evenly font-comfortaa md:arrange-order">
        <div className="flex flex-col md:flex-row items-center mb-4 font-comfortaa deliver-letter">
          <h1 className="text-lg font-semibold mb-2 md:mb-0 md:w-1/4">
            Enter your name
          </h1>
          <input
            type="text"
            placeholder="Name"
            required
            className="border-2 border-gray-500 ml-2 p-2 rounded-md focus:outline-none w-full md:w-3/4"
            value={info.name}
            onChange={(e) => setInfo({ ...info, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Mobile Number"
            required
            className="border-2 border-gray-500 ml-2 p-2 rounded-md focus:outline-none w-full md:w-3/4"
            value={info.mobile}
            onChange={(e) => setInfo({ ...info, mobile: e.target.value })}
          />
          <input
            type="text"
            placeholder="House Number"
            required
            className="border-2 border-gray-500 ml-2 p-2 rounded-md focus:outline-none w-full md:w-3/4"
            value={info.houseNo}
            onChange={(e) => setInfo({ ...info, houseNo: e.target.value })}
          />
          <input
            type="text"
            placeholder="Full Address"
            required
            className="border-2 border-gray-500 ml-2 p-2 rounded-md focus:outline-none w-full md:w-3/4"
            value={info.fullAddress}
            onChange={(e) => setInfo({ ...info, fullAddress: e.target.value })}
          />
        </div>
        <div className="m-5 md:w-1/2">
          <h1 className="text-xl mb-2">Select Mode of Payment</h1>
          <input
            type="radio"
            name="cash"
            id="cash"
            className="mr-2"
            onChange={() => setInfo({ ...info, option: true })}
          />
          <label htmlFor="cash" className="text-gray-800">
            Cash on Delivery
          </label>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <Link to="/Order/Deliver/Confirm">
          <button
            type="button"
            className="bg-blue-500 py-2 px-6 rounded-md text-white transition-all hover:bg-blue-700 focus:outline-none"
            onClick={() => sendOrder()}
          >
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

const DeliverHere = ({ name }) => {
  const [info, setinfo] = useState([]);
  useEffect(() => {
    console.log(info);
  });

  return (
    <div className="flex flex-col md:flex-row items-center mb-4 font-comfortaa deliver-letter">
      <h1 className="text-lg font-semibold mb-2 md:mb-0 md:w-1/4">{name}:</h1>
      <input
        type="text"
        placeholder={name}
        required
        className="border-2 border-gray-500 ml-2 p-2 rounded-md focus:outline-none w-full md:w-3/4"
        onChange={(e) => setinfo(e.target.value)}
      />
    </div>
  );
};

export default Delivery;
