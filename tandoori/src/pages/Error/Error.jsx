import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Error.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="flex flex-col items-center justify-center text-2xl whitespace-normal font-comfortaa">
        <h1 className="my-5">
          404 Error: Page vanished into thin air. We've sent our best search
          party to retrieve it!
        </h1>

        <Link to="/">
          <button
            type="button"
            className="bg-black text-white rounded-full py-1 px-4 "
          >
            Back to Home
          </button>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Error;
