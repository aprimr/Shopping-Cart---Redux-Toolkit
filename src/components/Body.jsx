import React, { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import BodySkeleton from './BodySkeleton';

function Body() {

  const [data, setData] = useState(null)

  useEffect(()=>{
    const fetchData = async()=>{
      const response = await fetch('https://fakestoreapi.com/products')
      const resData = await response.json();
      setData(resData);      
    }
    fetchData();
  }, [])

  if(! data){
    return <BodySkeleton />
  }

  return (
    <div className='h-auto w-full'>
      <div className='h-auto w-auto xl:mx-20 mt-10 pb-10 flex gap-10 flex-wrap justify-center'> 
        {/* Card */}
        {data.map((item) => 
        <div key={item.id} className='relative h-[25rem] w-72 rounded-md border border-gray-300 hover:border-gray-400 group transition-all duration-150'>
          {/* image */}
          <a href='#' className='h-auto w-auto mb-2 flex justify-center py-3 border-b border-gray-300 group-hover:border-gray-400 transition-all duration-150'> 
            <img src={item.image} className='h-72'/>
          </a>
          {/* Title */}
          <a href="#"><div className='px-3 max-h-6 text-lg text-gray-600 cursor-pointer overflow-hidden uppercase hover:text-black'>{item.title}</div></a>
          {/* Price and Rating */}
          <div className='mt-2 px-5 py-1 flex justify-between items-center'>
            <p className='text-xl font-semibold flex flex-row items-center '> $ {item.price}</p>
            <p className='text-xl font-semibold flex flex-row gap-2 items-center '><FaStar className='text-xl text-yellow-400'/>{item.rating.rate}<span className='text-sm text-gray-600'>({item.rating.count})</span></p>
          </div>
          {/* Add to card btn */}
          <a href="#">
            <div className='absolute h-10 w-10 top-2 right-2 bg-yellow-400 rounded-full flex justify-center items-center text-2xl text-white md:hidden group-hover:flex transition-all duration-300'><IoMdAdd /></div>
          </a>
          {/* Add to fav btn */}
          <div className='absolute h-10 w-10 top-14 right-2 bg-red-400 rounded-full flex justify-center items-center text-xl cursor-pointer text-white md:hidden group-hover:flex transition-all duration-300'><FaRegHeart /></div>
          {/* View Product
          <a href="#">
            <div className='absolute h-10 w-10 bottom-[93px] right-2 bg-green-400 rounded-full flex justify-center items-center text-2xl text-white md:hidden group-hover:flex transition-all duration-300'><MdOutlineViewInAr /></div>
          </a> */}
        </div>
        )}

      </div>
    </div>
  )
}

export default Body




