import React from "react";
import './Foods.css'

function Foods({ index, name, description,source }) {
  return (
    <div
      className="flex flex-col flex-wrap lg:w-1/5 md:w-5/5 gap-5 align-middle justify-center mb-5 mt-5 border-0 border-black p-10 rounded-lg overflow-hidden "
      key={index}
    >
      <div className=" text-md ">
        <h1 className="font-dancingScript font-semibold text-xl lg:text-sm ">{name}</h1>
        <h2 className="font-dancingScript font-semibold text-lg">{description}</h2>
      </div>
    </div>
  );
}



export default Foods