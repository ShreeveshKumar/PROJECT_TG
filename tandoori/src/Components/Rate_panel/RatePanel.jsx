import React from 'react'
import Rating from '@mui/material/Rating';


const RatePanel = () => {
  return (
    <div>
        <div>
        Customer reviews
        <h1><Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />4.5 out of 5  </h1>
        <h1>Overall Rating </h1>
        </div>
    </div>
  )
}

export default RatePanel