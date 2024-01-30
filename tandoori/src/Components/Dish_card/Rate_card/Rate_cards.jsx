import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Rate_cards.css";

function Rate_cards({ index, ratings }) {
  return (
    <div className=" overflow-hidden " key={index}>
        <section className=" border-2 border-black p-4 border-dashed rounded-lg shadow-lg text-center  text-black">
          <AccountCircleIcon fontSize="large" />
          <p className="text-lg mt-2 font-bold">{ratings}</p>
        </section>
    </div>
  );
}

export default Rate_cards;
