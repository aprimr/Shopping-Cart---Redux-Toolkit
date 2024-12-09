import React from 'react'
import { AiFillShop } from "react-icons/ai";
import { FaCompass, FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineLogout } from "react-icons/md";
import { NavLink } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser, userSelector } from '../Store/Slices/UserSlice';

function NavBar() {

  const dispatch = useDispatch()
  const loginedUser = useSelector(userSelector)

  const handleLogout = ()=>{
    dispatch(removeUser())
  }



  return (
    <>
      <div className='h-20 w-full md:border-b flex justify-around items-center'>
        {/* Logo */}
        <NavLink to='/' ><div className='text-5xl md:text-7xl text-gray-600 hover:text-black cursor-pointer'><AiFillShop /></div></NavLink>
        {/* navMenu */}
        <div className='gap-5 hidden md:flex'> 
          <Menu path='/trending' name='Trending' />
          <Menu path='/favourites' name='Favourites' />
          <Menu path='/cart' name='Cart' />
          <Menu path='/help' name='Help' />
        </div>
        {/* Login/Logout Button */}
        {loginedUser.user == null ?
        <NavLink to='/login'>
          <button className='text-lg px-4 py-1 md:text-xl md:px-6 md:py-2 bg-gray-600 text-white hover:bg-black'>LOGIN</button>
        </NavLink>:
        <button onClick={handleLogout} className='text-lg px-4 py-1 md:text-xl md:px-6 md:py-2 bg-gray-600 text-white hover:bg-black flex items-center flex-row gap-2'>{loginedUser.user} <MdOutlineLogout className='text-2xl'/></button>
        }
        </div>

      {/* menu for mobile */}
      <div className='flex h-15 px-[12%] bg-white pb-2 w-full justify-around gap-1 border-b md:hidden'>
        <MenuMbl path='/trending' name={<FaCompass />} />
        <MenuMbl path='/favourites' name={<FaHeart />} />
        <MenuMbl path='/cart' name={<FaCartShopping />} />
        <MenuMbl path='/help' name={<RiCustomerService2Fill />} />
      </div>
    </>
  )
}

export default NavBar

function Menu ({path,name}){
  return(
    <>
    <NavLink to={path} className={({isActive}) => `text-xl transition-all duration-100 px-4 py-2 border  uppercase ${ isActive ? ' border-gray-600' : 'border-transparent hover:border-gray-600'}`}>{name}</NavLink>
    </>
  )
}

function MenuMbl ({path,name}){
  return(
    <>
    <NavLink to={path} className={({isActive}) => `text-2xl text-gray-600 transition-all duration-100 px-3 py-2 border  ${ isActive ? ' text-gray-900' : 'border-transparent hover:border-gray-300'} `}>{name}</NavLink>
    </>
  )
}