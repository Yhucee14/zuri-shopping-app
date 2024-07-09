import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import { Link } from "react-router-dom";
import right from "../assets/right.png";

const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.itemsList);
  const dispatch = useDispatch();
  const [coupon, setCoupon] = useState("");
  const [email, setEmail] = useState("");

  const removeItemHandler = (id) => {
    dispatch(cartActions.removeFromCart(id));
  };

  const incrementItemHandler = (id) => {
    dispatch(cartActions.incrementItem(id));
  };

  const decrementItemHandler = (id) => {
    dispatch(cartActions.decrementItem(id));
  };

  const applyCouponHandler = () => {
    // Logic to apply the coupon
    console.log(`Coupon applied: ${coupon}`);
  };

  // Calculate subtotal and total
  const subtotal = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);
  const total = subtotal - 24 + 61.99; // Example discount and tax calculations

  return (
    <div className="container p-4 flex flex-col md:flex-row md:justify-between md:gap-14">
      <div className="xx:w-full md:w-[70%] border">
        <h2 className="text-2xl font-bold px-4 py-2 mb-4">Shopping Cart</h2>
        <div className="flex justify-between px-4 py-2 bg-gray-100 border-b">
          <div className="w-1/5"></div>
          <div className="w-1/5">PRODUCTS</div>
          <div className="w-1/5">PRICE</div>
          <div className="w-1/5">QUANTITY</div>
          <div className="w-1/5">SUB TOTAL</div>
        </div>
        {cartItems.length > 0 ? (
          <ul>
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center px-4 py-2 border-b"
              >
                <div className="w-1/5 flex items-center">
                  <button
                    onClick={() => removeItemHandler(item.id)}
                    className="bg-white flex justify-center items-center text-red-800 font-bold border border-red-700 py-0 px-2 rounded-full mr-4"
                  >
                    X
                  </button>
                  <img
                    src={item.imgURL}
                    alt={item.name}
                    className="w-20 h-20 object-cover mr-2"
                  />
                  <div>
                    <h3 className="text-sm w-[100px] flex flex-row font-medium">
                      {item.name}
                    </h3>
                  </div>
                </div>
                <div className="w-1/5">
                  <p className="text-gray-600 md:px-5">N{item.price}</p>
                </div>
                <div className="w-1/5 flex items-center">
                  <button
                    onClick={() => decrementItemHandler(item.id)}
                    className="bg-red-500 text-white py-1 px-2 rounded-lg mx-2"
                  >
                    -
                  </button>
                  <div>{item.quantity}</div>
                  <button
                    onClick={() => incrementItemHandler(item.id)}
                    className="bg-green-500 text-white py-1 px-2 rounded-lg mx-2"
                  >
                    +
                  </button>
                </div>
                <div className="w-1/5 text-gray-600">N{item.totalPrice}</div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="px-4 py-2">Your cart is empty</p>
        )}
        <Link to="/categories" className="flex justify-end px-4 py-2">
          <button className="text-[#69F0AE] border border-[#69F0AE] rounded-md flex py-2 px-2 flex-row">
            <div className="px-2">Browse new channels</div>
            <img src={right} alt="Logo" className="h-5 w-5 mt-1" />
          </button>
        </Link>
      </div>

      <div className="w-full md:w-[30%] ">
        <div className="border">
          <h1 className="py-2 px-4 font-semibold">Cart Totals</h1>
          <div className="flex px-4 text-gray-500 py-1 justify-between">
            <div>Sub-total</div>
            <div className="font-bold text-black text-md">N{subtotal.toFixed(2)}</div>
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
            <div className="font-bold text-black text-md">N{total.toFixed(2)}</div>
          </div>

          <Link to="/checkout" className="flex justify-center border hover:bg-black bg-[#0C239E] px-2">
            <button className="text-white rounded-md flex py-2 px-2 flex-row">
              <div className="px-2 flex">PROCEED TO CHECKOUT</div>
              <img src={right} alt="Logo" className="h-5 w-5 mt-0.5" />
            </button>
          </Link>

          
        </div>

        <div className="px-2 py-2 mt-3">
            <div className="mb-4">
              <input
                type="text"
                id="coupon"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="Coupon code"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="Email address"
              />
            </div>
        
            <button onClick={applyCouponHandler} className="text-white rounded-md flex py-2 hover:bg-black bg-[#69F0AE] px-2">
              <div className="px-2 flex font-normal text-white">APPLY COUPON</div>
            </button>
          </div>
        
      </div>
      
    </div>
  );
};

export default CartItems;
