import React from 'react'
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

const DishOrder = ({index,name,amount}) => {
  return (
    <div className="flex mx-40 p-10 justify-between my-5 rounded-xl  border-2 border-slate-900" key={index}>
          <h1>{name}</h1>
      <div>
        <button type="button">
          <KeyboardArrowUpRoundedIcon />
        </button>
              <h2 className='flex justify-center'>{amount}</h2>
        <button type="button">
          <KeyboardArrowDownRoundedIcon />
        </button>
      </div>
    </div>
  );
}

export default DishOrder