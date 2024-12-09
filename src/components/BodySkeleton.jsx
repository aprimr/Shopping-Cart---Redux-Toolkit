import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineViewInAr } from "react-icons/md";

function BodySkeleton() {

  return (
    <>
    <div className='h-auto w-full'>
      <div className='h-auto w-auto xl:mx-20 mt-10 pb-10 flex gap-10 flex-wrap justify-center'>
        <Skeleton/>
        <Skeleton/>
        <Skeleton/>
        <Skeleton/>
        <Skeleton/>
        <Skeleton/>
        <Skeleton/>
        <Skeleton/>
      
      </div >
    </div>
      
    </> 
  )
}

export default BodySkeleton



function Skeleton ({value}){
  return (
    <>
    {/* Card Skeleton */}
    <div className='relative h-[25rem] w-72 rounded-sm border border-gray-300'>
      <div className='h-[80%] w-auto flex justify-center items-center border-b border-gray-300'>
        <div className='h-[95%] w-[95%] bg-gray-100 rounded-sm'></div>
      </div>
      <div className='px-3 mx-2 my-1 max-h-6 w-auto text-transparent bg-gray-300 rounded-sm'>s</div>
      <div className='mt-2 px-5 py-1 flex justify-between items-center'>
        <p className='h-6 w-24 bg-gray-300 rounded-sm'></p>
        <div className='text-xl flex flex-row gap-2 items-center '><FaStar className='text-xl text-gray-300'/><div className='h-6 w-20 bg-gray-300 rounded-sm'></div></div>
      </div>
      <div className='absolute h-10 w-10 top-2 right-2 bg-gray-300 rounded-full flex justify-center items-center text-2xl text-gray-200'><IoMdAdd /></div>
      <div className='absolute h-10 w-10 top-14 right-2 bg-gray-300 rounded-full flex justify-center items-center text-2xl text-gray-200'><FaRegHeart /></div>
      <div className='absolute h-5 w-32 bottom-[94px] left-3 bg-gray-300 rounded-tr-sm rounded-br-sm border-white flex justify-center items-center text-xl  text-gray-200'></div>
      <div className='absolute h-10 w-10 bottom-[90px] right-2 bg-gray-300 rounded-full flex justify-center items-center text-2xl text-gray-200'><MdOutlineViewInAr /></div>
    </div>
    </>
  )
}

