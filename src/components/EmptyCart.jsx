import React from 'react';
import { useNavigate } from 'react-router';
import { BsCartX } from "react-icons/bs";

const EmptyCart = () => {
  const Navigate = useNavigate();

  const handleGoHome = () => {
    Navigate('/');
  };

  return (
    <div className="flex flex-col h-[53vh]  items-center justify-center p-6">
      <div className="bg-white p-8 flex flex-col gap-3 justify-center items-center text-center">
        <BsCartX className='text-6xl text-gray-700 '/>
        <h2 className="text-3xl font-medium text-gray-600 mb-4 ">Your cart is currently empty!</h2>
        <button onClick={handleGoHome} className=" text-gray-500 text-xl underline hover:text-gray-700">
          Start Shopping
        </button>
      </div>
    </div>
  );
};

export default EmptyCart;
