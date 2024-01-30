import React from 'react';

const BestFood = ({ index, name, description, image }) => {
  return (
    <div className="flex flex-wrap justify-center p-0 gap-5 align-middle place-content-center text-lg m-3 ">
      <div className="flex flex-col p-5 w-3/5 justify-center text-center">
        <div className='font-bold'>{name}</div>
        <div>{description}</div>
      </div>
      <div className="w-64 overflow- shadow-md shadow-black rounded-t-full">
        <img
          src={image}
          alt="image_not_found"
          className="rounded-t-full  "
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default BestFood;
