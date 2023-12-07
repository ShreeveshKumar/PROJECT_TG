import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import './Rate_cards.css'

function Rate_cards({ ratings }) {
  return (
    <div className="ratings">
      <div className="rate_card_zoo">
        <section className="rate_card_home">
          <AccountCircleIcon />
          {ratings}
        </section>
      </div>
    </div>
  );
}

export default Rate_cards;
