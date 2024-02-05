import React from 'react';
import { useNavigate } from 'react-router-dom';

const EmptyCard = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Your Cart is Currently Empty</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={() => navigate('/')}
      >
        Go back to Home page
      </button>
    </div>
  );
};

export default EmptyCard;
