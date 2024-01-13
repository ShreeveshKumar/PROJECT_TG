import React from 'react'

const BestFood = ({index,name,description,image}) => {
  return (
    <div className="flex flex-wrap justify-evenly p-0 gap-5 align-middle place-content-center">
      <div className="flex flex-col p-5 w-3/5  justify-center">
        <div className=''> {name}</div>
        <div>{description}</div>
      </div>
      <div className="w-64   overflow-hidden">
        <img
          src={image}
          alt="image_not_found"
          className="rounded-t-full"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default BestFood