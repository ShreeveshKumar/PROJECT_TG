import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Delivery.css";
import { Deliver_question } from "../../data";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";

const Delivery = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Deliver_Address />
      <Footer />
    </React.Fragment>
  );
};

const Deliver_Address = ({ name, index }) => {
  const [place, setplace] = useState(true);
  const [sum, setsum] = useState(false);

  useEffect(() => {});
  return (
    <div className="m-10">
      <div className="flex flex-wrap text-md font-bold  place-content-evenly font-comfortaa arrange_order">
        <div className="m-5">
          {Deliver_question.map((foog) => {
            return <DeliverHere name={foog.name} key={foog.index} />;
          })}
        </div>
        <div className="m-5">
          <h1>Select Mode of Payment</h1>
          <input type="radio" name="cash" id="" />
          <label htmlFor="cash" className="">Cash on Delivery </label>
        </div>
      </div>

      <div className="flex place-content-center order_deliver_home">
        <Link to="/Order/Deliver/Confirm">
          <button
            type="button"
            className="bg-black py-2 px-4 rounded-md text-white order_deliver_button"
          >
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

const DeliverHere = ({ name, index }) => {
  return (
    <div className="flex m-2 gap-4 font-comfortaa deliver_letter" key={index}>
      <h1>{name}:</h1>
      <input
        type="text"
        placeholder={name}
        required
        className="border-3 border-black expandable-textarea"
      />
    </div>
  );
};

export default Delivery;
