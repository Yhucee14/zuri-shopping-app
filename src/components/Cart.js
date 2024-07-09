import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  return (
    <div className="flex items-center">
        <FiShoppingCart size={40} />
        <div className="text-lg  px-1 font-medium">{totalQuantity}</div>
    </div>
  );
};

export default Cart;
