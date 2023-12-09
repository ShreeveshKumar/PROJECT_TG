import React from "react";
import './Foods.css'



function Foods({ index, name, description,source }) {
  return (
    <div className="food_visual" key={index}>
      <div className="food_visual_part1">
        <img src={source} alt="IMAGE NOT FOUND" height={100} loading="eager" />
      </div>
      <div className=" text-md food_visual_part2">
        <h1 className="font-bold text-xl">Food name:{name}</h1>
        <h2 className="font-semibold text-lg">Food details: {description}</h2>
      </div>
    </div>
  );
}



export default Foods