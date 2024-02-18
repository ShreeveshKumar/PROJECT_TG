import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Delivery.css";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Toast } from "react-toastify/dist/components";

const Delivery = () => {
  return (
    <React.Fragment>
      <ToastContainer />
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
  const navigate = useNavigate();

  const [final, setfinal] = useState({ info, cartItems });

  useEffect(() => {
    setfinal({ info, cartItems });
    console.log(final);
  }, [info]);

  const sendOrder = async () => {
    if (
      amount >= 0 &&
      info.name &&
      info.mobile &&
      info.houseNo &&
      info.fullAddress
    ) { 
      // Toast("order placed ")
      const response = await fetch("http://localhost:4000/placeorder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(final),
      });

      console.log("data sent successfully");
      console.log(response);
      toast("order sent");
      navigate("/Order/Deliver/Confirm");
    } else {
      console.log("select a valid amount");
      alert("please fill in every detail ");
      toast("Please fill in every detail ! ");
      navigate("/Order");
    }
    return 0;
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="container mx-auto p-5 bg-gray-100 rounded-lg">
        <div className="flex flex-wrap text-md font-bold font-comfortaa md:arrange-order">
          <div className="flex w-full md:w-1/2 items-center justify-center">
            <div className="flex flex-wrap font-comfortaa deliver-letter gap-5 items-center w-full md:w-3/4">
              
              <div className="flex flex-wrap font-comfortaa deliver-letter gap-5 items-center w-full">
                <h1 className="text-lg font-semibold">Enter your name</h1>
                <input
                  type="text"
                  placeholder="Name"
                  required
                  className="border-2 border-gray-500 p-2 rounded-md focus:outline-none w-full"
                  value={info.name}
                  onChange={(e) => setInfo({ ...info, name: e.target.value })}
                />
              </div>

              <div className="flex flex-wrap font-comfortaa deliver-letter gap-5 items-center w-full">
                <h1 className="text-lg font-semibold">Enter your Mobile No</h1>
                <input
                  type="text"
                  placeholder="Mobile Number"
                  required
                  className="border-2 border-gray-500 p-2 rounded-md focus:outline-none w-full"
                  value={info.mobile}
                  onChange={(e) => setInfo({ ...info, mobile: e.target.value })}
                />
              </div>

              <div className="flex flex-col flex-wrap mb-4 font-comfortaa deliver-letter w-full">
                <h1 className="text-lg font-semibold">Enter your House No</h1>
                <textarea
                  type="text"
                  placeholder="House Number"
                  required
                  className="border-2 border-gray-500 p-2 rounded-md focus:outline-none w-full"
                  value={info.houseNo}
                  onChange={(e) =>
                    setInfo({ ...info, houseNo: e.target.value })
                  }
                />
              </div>

              <div className="flex flex-wrap md:flex-row items-center mb-4 font-comfortaa deliver-letter w-full">
                <h1 className="text-lg font-semibold ">
                  Enter Full Address
                </h1>
                <textarea
                  type="text"
                  placeholder="Full Address"
                  required
                  className="border-2 border-gray-500 p-2 rounded-md focus:outline-none w-full md:w-full"
                  value={info.fullAddress}
                  onChange={(e) =>
                    setInfo({ ...info, fullAddress: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col m-5 md:w-1/2 place-content-center items-center">
            <h1 className="text-xl mb-2">Select Mode of Payment</h1>
            <div className="flex items-center">
              <input
                type="radio"
                name="payment"
                id="cash"
                className="mr-2"
                onChange={() => setInfo({ ...info, option: true })}
              />
              <label htmlFor="cash" className="text-gray-800">
                Cash on Delivery
              </label>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button
            type="button"
            className="bg-blue-500 py-2 px-6 rounded-md text-white transition-all hover:bg-blue-700 focus:outline-none"
            onClick={sendOrder}
          >
            Next
          </button>
        </div>
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
