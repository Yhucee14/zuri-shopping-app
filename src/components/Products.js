import React, { useState } from "react";
import Product from "./Product";
import right from "../assets/right.png";
import blueright from "../assets/blueright.png";
import bandagebrown from "../assets/plasterbrown.png";
import plaster from "../assets/plaster.png";
import colors from '../assets/colors.png'
import colorbandages from '../assets/colorbandage.png'
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart-slice';

const PRODUCTS_DATABASE = [
  {
    id: 1,
    name: "Adhesive Bandages (plasters)",
    imgURL: colors,
    price: 500,
    rating: 4.5,
    category: "Adhesive bandages",
  },
  {
    id: 2,
    name: "Elastic Bandages (AC wraps)",
    imgURL: colorbandages,
    price: 4000,
    rating: 4,
    category: "bandages",
  },
  {
    id: 3,
    name: "Transparent film dressings",
    imgURL: bandagebrown,
    price: 3000,
    rating: 3.5,
    category: "bandages",
  },
  {
    id: 4,
    name: "Compresion Bandages",
    imgURL: plaster,
    price: 5000,
    rating: 2.5,
    category: "electronics",
  },
 
];

const Products = () => {
  const [currentCategory, setCurrentCategory] = useState("all");

  const dispatch = useDispatch();



  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, Infinity]);
  const [sortOrder, setSortOrder] = useState('popularity'); 
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS_DATABASE);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState('All price');


  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
  };

  return (
    <div className="md:px-14 sm:px-5">
      <div className="flex flex-col md:flex-row xx:justify-center md:justify-between items-center mb-4">
        <div className="hidden md:visible font-semibold text-2xl">Bandages</div>
        <div className="flex flex-row ">
            <div>
            <button
            className={`md:px-2 py-2 font-normal text-sm  ${
              currentCategory === "all" ? "border-b-4 border-[#69F0AE] mb-1" : ""
            }`}
            onClick={() => handleCategoryChange("all")}
          >
            All Products
          </button>
          <button
            className={`px-2 py-2 font-normal text-sm ${
              currentCategory === "adhesiveBandages"
                ? "border-b-4 border-[#69F0AE] mb-1"
                : ""
            }`}
            onClick={() => handleCategoryChange("adhesiveBandages")}
          >
            Adhesive Bandages
          </button>
          <button
            className={`px-2 py-2 font-normal text-sm ${
              currentCategory === "gauzeBandages"
                ? "border-b-4 border-[#69F0AE] mb-1"
                : ""
            }`}
            onClick={() => handleCategoryChange("gauzeBandages")}
          >
            Gauze Bandages
          </button>
          <button
            className={`px-2 py-2 font-normal text-sm ${
              currentCategory === "elasticBandages"
                ? "border-b-4 border-[#69F0AE] mb-1"
                : ""
            }`}
            onClick={() => handleCategoryChange("elasticBandages")}
          >
            Elastic Bandages
          </button>
            </div>
      
            <Link to="/categories">
          <div className="text-[#69F0AE] mt-1.5 flex flex-row">
            <div className="px-2"> Browse new channels</div>
            <img src={right} alt="Logo" className="h-5 w-5 mt-1" />
            </div></Link>
        </div>

        <div className="hidden md:visible p-3">
          
        </div>
    
      </div>
      {filteredProducts.length > 0 ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
              <li key={product.id} className="list-none border p-4 rounded-lg shadow-sm hover:shadow-md">
                <div>
                  <img src={product.imgURL} alt={product.name} className="w-full h-40 object-cover mb-4 rounded-md" />
                  <div className='text-yellow-500'>
                    {Array(Math.round(product.rating)).fill('★').join('')} 
                    {Array(5 - Math.round(product.rating)).fill('☆').join('')}
                  </div>
                  <div className='font-medium text-lg'>{product.name}</div>
                  <div className='text-gray-600'>N{product.price}</div>
               
                  <button
                    onClick={() => dispatch(cartActions.addToCart(product))}
                    className='bg-[#1D1D1D] text-[#E4E7E9] py-1 px-2 font-medium hover:bg-[#E4E7E9] hover:text-[#1D1D1D] rounded-lg'
                  >
                    Add to cart
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div>No products found</div>
        )}

      <Link to="/categories">
          <div className="text-[#1B6392] px-14 py-5 justify-end flex flex-row">
            <div className="px-2">View All</div>
            <img src={blueright} alt="Logo" className="h-5 w-5 mt-1" />
          </div>
        </Link>
    </div>
  );
};

export default Products;
