import React, { useEffect, useState } from "react";
import "./Order.css";
import SearchIcon from "@mui/icons-material/Search";
import Navbar from "../../Components/Navbar/Navbar";
import { OrderDish } from "../../data";
import { Link } from "react-router-dom";

const Order = () => {
  return (
    <div>
      <Navbar />
      <Order_search />
      {/* <OrderTake /> */}
      <DishDrop />
      <OrderBar />
    </div>
  );
};

const Order_search = () => {
  return (
    <span className="flex justify-center dish_search">
      <span>
        <input
          type="text"
          name=""
          id="dish_input"
          placeholder="Search by dish name..."
        />
        <SearchIcon />
      </span>
    </span>
  );
};

const OrderTake = () => {
  return (
    <div>
      <div className="boxes_of_dish"></div>
      <div className="boxes_of_dish"></div>
      <div className="boxes_of_dish"></div>
    </div>
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
    return (
      <div className="flex flex-col ">
        <div className="flex flex-wrap content-center justify-between p-10 mx-20 my-5 border-2 font-comfortaa border-slate-950 ">
          <span>Butter Chicken</span>
          <div className="flex justify-between">
            <button type="button" onClick={() => setbc(bc + 1)} className="">
              ➕
            </button>
            {bc}
            <button type="button" onClick={() => setbc(bc - 1)}>
              ➖
            </button>
          </div>
        </div>

        <div>
          <div className="flex flex-wrap content-center  justify-between p-10 mx-20 my-5 border-2 font-comfortaa border-slate-950 ">
            <span>Roasted Chicken</span>
            <div className="flex justify-between ">
              <button type="button" onClick={() => setrc(rc + 1)}>
                ➕
              </button>
              {rc}
              <button type="button" onClick={() => setrc(rc - 1)}>
                ➖
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-wrap content-center  justify-between p-10 mx-20 my-5 border-2 font-comfortaa border-slate-950 ">
            <span>Changezi Chicken</span>
            <div className="flex justify-between ">
              <button type="button" onClick={() => setcc(cc + 1)}>
                ➕
              </button>
              {cc}
              <button type="button" onClick={() => setcc(cc - 1)}>
                ➖
              </button>
            </div>
          </div>
          <div className="flex justify-center ">
            <button
              type="button"
              // onClick={() => handleorder()}
              className="bg-black px-5 py-3 rounded-md text-white"
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    );
  };
// };

export default Order;
