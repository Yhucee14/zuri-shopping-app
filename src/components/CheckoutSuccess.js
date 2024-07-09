import React from 'react'
import { Link } from 'react-router-dom'
import right from "../assets/right.png";

const CheckoutSuccess = () => {
  return (
    <div className='flex justify-center items-center '>
<div className='flex flex-col justify-center'>
    <div className='flex justify-center'>
    <img src={right} alt="Logo" className="h-20 w-20 mt-0.5" />
    </div>
    <h1 className='flex justify-center py-1'>Your order has been placed successfully</h1>
    <h6 className='flex justify-center py-3'>Thank you for shopping with us</h6>
    <div className='flex flex-row justify-center gap-4'>
    <Link to="/categories" className="flex justify-center border text-[#0C239E] font-bold hover:bg-black bg-white px-2">
            <button className=" rounded-md flex py-2 px-2 flex-row">
            <img src={right} alt="Logo" className="h-5 w-5 mt-0.5" />
              <div className="px-2 flex">GO TO DASHBOARD</div>
            
            </button>
          </Link>

    <Link to="/cart" className="flex justify-center border py-1 hover:bg-black bg-[#0C239E] px-2">
            <button className="text-white rounded-md flex py-2 px-2 flex-row">
              <div className="px-2 flex">VIEW ORDER</div>
              <img src={right} alt="Logo" className="h-5 w-5 mt-0.5" />
            </button>
          </Link>
    </div>
</div>
    </div>
  )
}

export default CheckoutSuccess