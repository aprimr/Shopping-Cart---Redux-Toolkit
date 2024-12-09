import React, { useEffect, useRef, useState } from 'react';
import { AiFillShop } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../Store/Slices/UserSlice';
import { NavLink, useNavigate } from 'react-router';
import { userSelector } from '../Store/Slices/UserSlice';

import Loader from '../components/Loader'

function Login() {

  const dispatch = useDispatch()
  const curUser  = useSelector(userSelector)
  const navigate = useNavigate()  

  const [input, setInput] = useState('');
  const [errMsg, setErrMsg] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleLoginClick = () => {
    const value = inputRef.current.value;

    if (!value) {
      setErrMsg(true);  // Set error message if input is empty
      console.log('Please enter a username');
    } else {
      setInput(value);  // Update state with username
      dispatch(addUser(value)); // Dispatch the username to Redux store
      inputRef.current.value = ''; // Clear input field
      console.log('Input dispatched');
      setErrMsg(false);  // Reset error message
    }
  }

  useEffect(()=>{
    if(curUser.user === input){
      console.log('logined')
      setIsLoading(!isLoading)
      setTimeout(()=>{
        navigate('/')
        setIsLoading(!isLoading)
      },500)
    }
  },[input])

  return (
    <>
    {!isLoading ? 
      <div className="flex justify-center items-center min-h-[100vh] md:min-h-[100vh] bg-gray-100 p-4">
        <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-sm">
          <div className='text-6xl text-gray-600 mb-3 flex justify-center'>
            <AiFillShop />
          </div>
          <h2 className="text-2xl font-semibold text-center mb-6 uppercase">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 flex flex-col gap-1">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
              <input
                ref={inputRef}
                type="text"
                autoComplete='off'
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                placeholder="Enter your username"
              />
              {errMsg && <p className='text-sm text-red-500'>Please enter a username.</p>}
              <p>Go to home? <NavLink to='/' className='text-gray-500 text-sm'>Click Here</NavLink></p>
            </div>

            <button type="button" onClick={handleLoginClick} className="w-auto py-2 px-8 bg-gray-600 text-white rounded-sm shadow-md hover:bg-black outline-none">Login</button>
          </form>
        </div>
      </div>
      :
      <Loader />
    }
    </>
  );
}

export default Login;
