import React from "react";
import './Foods.css'



function Foods({ name, description,source }) {
  return (
    <div className="food_visual">
      <div className="food_visual_part1">
        <img src = {source} alt="IMAGE NOT FOUND" height={100} />
      </div>
      <div className=" text-md food_visual_part2">
        <h1 className="font-bold">Food name:{name}</h1>
        <h3 className="font-semibold">Food details: {description}</h3>
      </div>
    </div>
  );
}



export default Foods