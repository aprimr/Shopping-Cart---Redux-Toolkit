import React from 'react';
import { AiOutlineShopping } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import EmptyCart from "../components/EmptyCart"

function Cart() {
  return (
    <>
      <div className='h-auto w-full pb-10'>
        <p className='w-full pt-5 flex flex-row justify-center items-center text-4xl gap-2 uppercase font-semibold'><AiOutlineShopping className='text-5xl' />Cart</p>
        <div className='h-auto w-auto xl:mx-20 mt-10 flex flex-row gap-7 justify-center'>
          <div className='w-2/3 border-t py-5 px-2 flex flex-col gap-3 border-gray-400'>

            {/*Item*/}
            <div className='relative h-auto w-full flex flex-row gap-6 border border-gray-400 px-2 rounded-sm'>
              <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" className='h-40 p-4 w-auto' />
              {/* Item info */}
              <div className='h-auto w-2/3 my-2 flex flex-col gap-2'>
                <p className='h-9 text-2xl overflow-hidden font-semibold'>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</p>
                <p className='text-xl text-gray-600 overflow-hidden'>
                  Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday
                </p>
              </div>
              {/* Price and Controls */}
              <div className='w-1/3 my-2 px-2 flex flex-col justify-between gap-2'>
                <div className='h-auto w-auto flex justify-between items-center'>
                  <div className='text-md font-semibold text-gray-600 uppercase'>Price: $490</div>
                  <div className='text-md font-semibold text-gray-600 flex flex-row items-center gap-1'>
                    <FaStar className='text-yellow-300' /><p>1.1</p> <p className='text-sm'>(99)</p>
                  </div>
                </div>
                {/* Quantity Button */}
                <div className='w-full flex flex-row gap-1'>
                  <input type="button" value="-" onClick={() => console.log('- clicked')} className='h-10 w-12 flex justify-center items-center bg-gray-600 text-2xl text-white outline-none hover:bg-gray-700 cursor-pointer rounded' />
                  <div className='h-10 w-12 border-2 border-gray-500 flex justify-center items-center bg-transparent text-xl font-semibold rounded'>2</div>
                  <input type="button" value="+" onClick={() => console.log('+ clicked')} className='h-10 w-12 flex justify-center items-center bg-gray-600 text-2xl text-white outline-none hover:bg-gray-700 cursor-pointer rounded' />
                </div>
                <div className='text-md font-medium text-gray-600 uppercase'>Sub Total: $490</div>
                <div className='h-auto w-full'>
                  <button className='bg-red-500 px-6 py-1 text-white hover:bg-red-600 rounded'>Remove From Cart</button>
                </div>
              </div>
              {/* Category */}
              <div className='absolute bottom-1 left-0 bg-gray-600 text-white text-xs h-auto w-auto px-3 py-1 font-semibold rounded-tr rounded-br'>
                men's clothing
              </div>
            </div>
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />

            {/* No items in cart */}
            {/* <EmptyCart /> */}

          </div>

          {/* Checkout */}
          <div className='w-1/3 h-auto '>
            <div className='sticky top-4 pb-3 w-full flex flex-col gap-3 border-2 border-gray-600'>
              <p className='h-10 w-full text-2xl font-bold bg-gray-600 text-white flex justify-center items-center uppercase'>Order Summary</p>
              <div className="h-12 w-auto flex flex-row mx-5 border-2 border-gray-600 rounded-sm overflow-hidden">
                <input type="text" className="h-full w-3/5 outline-none px-4 text-gray-700 placeholder-gray-500" placeholder="Enter Cupon Code"/>
                <button className="h-full w-2/5 bg-gray-600 text-white flex items-center justify-center hover:bg-gray-700 uppercase outline-none">
                  <span class="text-lg font-semibold">SUBMIT</span>
                </button>
              </div>
              <CheckoutPrices title="Cart Total:" price="$500"/>
              <CheckoutPrices title="Discount:" price="$0"/>
              <CheckoutPrices title="Shipping:" price="$10"/>
              <CheckoutPrices title="Tax:" price="TBD"/>
              <CheckoutPrices title="Net Total:" price="$510"/>
              <div className='w-auto flex flex-row gap-2 justify-end mx-5'>
                <button className='px-10 py-2 bg-gray-600 text-white font-semibold rounded uppercase hover:bg-gray-700'>Proceed To Checkout</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Cart;


const CheckoutPrices = ({title, price})=>{
  return(
    <div className='w-auto flex flex-row gap-2 justify-between mx-5'>
      <p className='text-md font-medium text-gray-600 uppercase'>{title}</p>
      <p className='text-md font-medium text-gray-600 uppercase'>{price}</p>
    </div>
  )
}

const Item = ()=>{
  return(
    <div className='relative h-auto w-full flex flex-row gap-6 border border-gray-400 px-2 rounded-sm'>
      <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" className='h-40 p-4 w-auto' />
      {/* Item info */}
      <div className='h-auto w-2/3 my-2 flex flex-col gap-2'>
        <p className='h-9 text-2xl overflow-hidden font-semibold'>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</p>
        <p className='text-xl text-gray-600 overflow-hidden'>
          Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday
        </p>
      </div>
      {/* Price and Controls */}
      <div className='w-1/3 my-2 px-2 flex flex-col justify-between gap-2'>
        <div className='h-auto w-auto flex justify-between items-center'>
          <div className='text-md font-semibold text-gray-600 uppercase'>Price: $490</div>
          <div className='text-md font-semibold text-gray-600 flex flex-row items-center gap-1'>
            <FaStar className='text-yellow-300' /><p>1.1</p> <p className='text-sm'>(99)</p>
          </div>
        </div>
        {/* Quantity Button */}
        <div className='w-full flex flex-row gap-1'>
          <input type="button" value="-" onClick={() => console.log('- clicked')} className='h-10 w-12 flex justify-center items-center bg-gray-600 text-2xl text-white outline-none hover:bg-gray-700 cursor-pointer rounded' />
          <div className='h-10 w-12 border-2 border-gray-500 flex justify-center items-center bg-transparent text-xl font-semibold rounded'>2</div>
          <input type="button" value="+" onClick={() => console.log('+ clicked')} className='h-10 w-12 flex justify-center items-center bg-gray-600 text-2xl text-white outline-none hover:bg-gray-700 cursor-pointer rounded' />
        </div>
        <div className='text-md font-medium text-gray-600 uppercase'>Sub Total: $490</div>
        <div className='h-auto w-full'>
          <button className='bg-red-500 px-6 py-1 text-white hover:bg-red-600 rounded'>Remove From Cart</button>
        </div>
      </div>
      {/* Category */}
      <div className='absolute bottom-1 left-0 bg-gray-600 text-white text-xs h-auto w-auto px-3 py-1 font-semibold rounded-tr rounded-br'>
        men's clothing
      </div>
    </div>
  )
}