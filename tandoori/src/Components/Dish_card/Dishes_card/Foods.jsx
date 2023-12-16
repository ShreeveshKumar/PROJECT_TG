import React from "react";
import './Foods.css'

function Foods({ index, name, description,source }) {
  return (
    <div className="flex flex-col flex-wrap lg:w-1/5 md:w-5/5 gap-5 align-middle justify-center mb-5 mt-5 border-2 border-black p-10 rounded-lg overflow-hidden " key={index}>
      <div className="w-5/5 ">
        <img src={source} alt="IMAGE NOT FOUND" className="h-5/5" loading="eager" />
      </div>
      <div className=" text-md ">
        <h1 className="font-bold text-xl lg:text-sm ">Food name:{name}</h1>
        <h2 className="font-semibold text-lg">Food details: {description}</h2>
      </div>  
    </div>
  );
}



export default Foods