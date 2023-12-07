import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";

const Admin = () => {
  const [show, setshow] = useState(false);

  return (
    <div className="flex place-content-center items-center bg-slate-900 font-comfortaa w-screen h-screen text-white ">
      <div className="h-screen bg-slate-500 w-9/12 py-10 my-10">
        <div className=" bg-slate-800 m-10 p-5 rounded-lg ">
          <div className="flex flex-wrap place-content-between">
            <span>Order no #34567</span>
            <span className="bg-slate-500 px-3 rounded-lg ">
              Cash on Delievery
            </span>
          </div>

          <div className="flex flex-wrap place-content-between ">
            <div className="flex flex-wrap w-1/2 border-r-2 border-r-white">
              <span>Butter Chicken</span>
              <span> * 1 </span>
            </div>
            <div className="flex ">
              <Button type="button">
                <CloseIcon />
              </Button>
              <Button type="button">
                <DoneIcon />
              </Button>
            </div>
          </div>

          {/* //this is another */}

          <div className="flex place-content-end">
            <Button type="button">
              <KeyboardArrowDownIcon />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
