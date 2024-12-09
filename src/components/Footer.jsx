import React from 'react'
import { AiFillShop } from "react-icons/ai";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className='h-auto w-full flex flex-col justify-center border-t px-[10%] py-3'>
      <div className='flex flex-row justify-between'>
        <AiFillShop className='text-5xl md:text-6xl text-gray-600' />
        <div className='flex flex-row gap-auto gap-2 md:gap-10 justify-between items-center'>
          <Menu path='#' name='Linkedin' />
          <Menu path='#' name='Github' />
          <Menu path='#' name='Instagram' />
          <MobMenu path='#' name={<FaLinkedin />} />
          <MobMenu path='#' name={<FaGithub />} />
          <MobMenu path='#' name={<FaInstagram />} />
        </div>
      </div>
    </div>
  )
}

export default Footer


function Menu ({path,name}){
  return(
    <>
    <a href={path} className='hidden md:flex text-xl text-gray-600 transition-all duration-100 px-3 py-2 border border-transparent hover:border-gray-600'>{name}</a>
    </>
  )
}

function MobMenu ({path,name}){
  return(
    <>
    <a href={path} className='flex md:hidden text-2xl text-gray-600 transition-all duration-100 px-3 py-2 border border-transparent hover:border-gray-600'>{name}</a>
    </>
  )
}