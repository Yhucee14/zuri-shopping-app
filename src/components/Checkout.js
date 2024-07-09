import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import { Link } from "react-router-dom";
import right from "../assets/right.png";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.itemsList);
  const dispatch = useDispatch();

  const subtotal = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);
  const total = subtotal - 24 + 61.99;

  return (
    <div className="container p-4 flex flex-col md:flex-row md:justify-between md:gap-14">
      <div className="xx:w-full md:w-[70%] ">
        <div>Billing Information</div>

        <div className="px-2 py-2 mt-3">
          <div className="mb-4">
            <label className="font-semibold">User Name</label>
            <div className="flex flex-row py-1 justify-between">
              <input
                type="text"
                id="first name"
                className="w-[45%] p-2 border rounded"
                placeholder="First name"
              />

              <input
                type="text"
                id="last name"
                className="w-[45%] p-2 border rounded"
                placeholder="Last name"
              />
            </div>
            <div>
              <label className="font-semibold">User Name</label>
              <input
                type="text"
                id="first name"
                className="w-full p-2 border rounded"
                placeholder=""
              />
            </div>

            <div className="flex flex-row py-1 justify-between">
            <div className="flex py-1 flex-col">
                <label className="font-semibold">Region/State</label>
                <select
                 placeholder="Select"
                  className=" w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-[#A4A4A4] focus:border-[#A4A4A4]"
                >
                     <option value="Lagos"></option>
                  <option value="Lagos">Lagos</option>
                  <option value="Abuja">Abuja</option>
                </select>
              </div>

              <div className="flex py-1 flex-col">
                <label className="font-semibold">City</label>
                <select
                 placeholder="Select"
                  className=" w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-[#A4A4A4] focus:border-[#A4A4A4]"
                >
                     <option value="Lagos"></option>
                  <option value="Lagos">Lagos</option>
                  <option value="Abuja">Abuja</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="py-1 font-semibold">Zip Code</label>
                <input
                  type="email"
                  id="last name"
                  className="w-full p-2 border rounded"
                  placeholder="Last name"
                />
              </div>
            </div>

            
            <div className="flex flex-row py-1 justify-between ">
                <div className="flex flex-col">
                <label className="font-semibold">Email</label>
                <input
                type="email"
                id="email"
                className="w-full p-2 border rounded"
                placeholder=""
              />
                </div>
          
                <div className="flex  flex-col">
                <label className="font-semibold">Phone Number</label>
                <input
                type="text"
                id="text"
                className="w-full p-2 border rounded"
                placeholder=""
              />
                </div>
            </div>

            <div className="py-2">
            <input
                type="checkbox"
                className='mr-2  '
              />
            <label className="py-1 font-normal">Ship into different addresse</label>
         
            </div>
      
          </div>
        </div>

        <div className="border">
            <h1>Payment Option</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2">
                <div className="border flex flex-col items-center py-2 px-2">
                <img src={right} alt="Logo" className="h-7 w-7 mt-0.5" />
                <h1>Cash on delivery</h1>
                <input
                type="checkbox"
                className='mr-2  '
              />
                </div>

                <div className="border flex flex-col items-center py-2 px-2">
                <img src={right} alt="Logo" className="h-7 w-7 mt-0.5" />
                <h1>Paypal</h1>
                <input
                type="checkbox"
                className='mr-2  '
              />
                </div>
                
                <div className="border flex flex-col items-center py-2 px-2">
                <img src={right} alt="Logo" className="h-7 w-7 mt-0.5" />
                <h1>Amazon pay</h1>
                <input
                type="checkbox"
                className='mr-2  '
              />
                </div>

                <div className="border flex flex-col items-center py-2 px-2">
                <img src={right} alt="Logo" className="h-7 w-7 mt-0.5" />
                <h1>Debit/Credit card</h1>
                <input
                type="checkbox"
                className='mr-2  '
              />
                </div>
            </div>

            <div className="py-2 ">
            <div>
              <label className="font-semibold">Name on card</label>
              <input
                type="text"
                id="first name"
                className="w-full p-2 border rounded"
                placeholder=""
              />
            </div>

            <div>
              <label className="font-semibold">Card number</label>
              <input
                type="text"
                id="first name"
                className="w-full p-2 border rounded"
                placeholder=""
              />
            </div>

            <div className="flex flex-row py-1 justify-between ">
                <div className="flex flex-col">
                <label className="font-semibold">Expiry date</label>
                <input
                type="text"
                id="text"
                className="w-full p-2 border rounded"
                placeholder="DD/YY"
              />
                </div>
          
                <div className="flex  flex-col">
                <label className="font-semibold">CVV</label>
                <input
                type="text"
                id="text"
                className="w-full p-2 border rounded"
                placeholder=""
              />
                </div>
            </div>
            </div>
        </div>

        <div>
            <h1>Additional Information</h1>

            <div>
              <label className="font-semibold">Order Notes (optional)</label>
              <input
                type="text"
                id="first name"
                className="w-full h-[100px]  p-2 border rounded"
                placeholder="Notes about your order, eg special notes for delivery"
              />
            </div>
        </div>
      </div>

      <div className="w-full md:w-[30%] ">
        <div className="border">
          <h1 className="py-2 px-4 font-semibold">Order Summary</h1>
          <div className="flex px-4 text-gray-500 py-1  flex-col">
            <div className="py-1">
              {cartItems.length > 0 ? (
                <ul>
                  {cartItems.map((item) => (
                    <li
                      key={item.id}
                      className="flex justify-between items-center py-2 "
                    >
                      <div className="flex items-center">
                        <img
                          src={item.imgURL}
                          alt={item.name}
                          className="w-20 h-20 object-cover mr-2"
                        />
                        <div className="flex flex-col">
                          <h3 className="text-sm w-[100px] px-2 flex flex-row font-medium">
                            {item.name}
                          </h3>
                          <div className="flex flex-row">
                            <div className="px-2">{item.quantity}</div> x{" "}
                            <p className="text-[#69F0AE] px-2">N{item.price}</p>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="px-4 py-2">Your cart is empty</p>
              )}
            </div>

            <div className="flex justify-between">
              <div>Sub-total</div>
              <div className="font-bold text-black text-md">
                N{subtotal.toFixed(2)}
              </div>
            </div>
          </div>
          <div className="flex px-4 text-gray-500 py-1 justify-between">
            <div>Shipping</div>
            <div className="font-bold text-black text-md">Free</div>
          </div>
          <div className="flex px-4 text-gray-500 py-1 justify-between">
            <div>Discount</div>
            <div className="font-bold text-black text-md">N24.00</div>
          </div>
          <div className="flex px-4 text-gray-500 border-b-2 py-1 justify-between">
            <div>Tax</div>
            <div className="font-bold text-black text-md">N61.99</div>
          </div>
          <div className="flex px-4 py-5 border-t-gray-500 text-gray-500 justify-between">
            <div>Total</div>
            <div className="font-bold text-black text-md">
              N{total.toFixed(2)}
            </div>
          </div>

          <Link
            to="/checkout"
            className="flex justify-center border hover:bg-black bg-[#0C239E] px-2"
          >
            <button className="text-white rounded-md flex py-2 px-2 flex-row">
              <div className="px-2 flex">PLACE ORDER</div>
              <img src={right} alt="Logo" className="h-5 w-5 mt-0.5" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
