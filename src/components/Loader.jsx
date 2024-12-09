import React from 'react';
import '../assets/loader.css'; 

function SpinningLoader() {
  return (
    <div className="spinner-container flex flex-col gap-5">
      <div className="spinner"></div>
      <p className='text-2xl md:text-4xl font-bold text-gray-500 uppercase'>Logging in</p>
    </div>
  );
}

export default SpinningLoader;
