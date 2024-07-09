import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";


const Product = ({ name, id, imgURL, price, rating }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addToCart({
        name,
        id,
        price,
      })
    );
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 !== 0 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
      <>
        {[...Array(fullStars)].map((_, index) => (
          <span key={`full-${index}`} className="text-yellow-500 " >&#9733;</span>
        ))}
        {halfStars > 0 && <span className="text-yellow-500">&#9734;</span>}
        {[...Array(emptyStars)].map((_, index) => (
          <span key={`empty-${index}`} className="text-gray-400">&#9734;</span>
        ))}
      </>
    );
  };

  return (
    <div className="w-[280px] h-[320px] rounded-md border-2 border-gray pt-[16px] pl-[16px]">
      <img src={imgURL} alt={name} className="w-[202px] h-[172px]" />
      <div className="flex space-x-1">{renderStars(rating)}</div>
      <h2 className="font-medium text-sm py-1">{name}</h2>
      <p className="font-medium text-sm py-1">$ {price}</p>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
};

export default Product;
