import React from 'react'
import { useNavigate } from 'react-router-dom'

const Emptycard = () => {
    const navigate = useNavigate();
  return (
      <div>
          <h1>Your Cart is Currently Empty </h1>
          <button onClick={()=>navigate('/')}>Go back to Home page </button>
    </div>
  )
}

export default Emptycard