import React, { useState, useEffect } from 'react';
import ReactSlider from 'react-slider';
import './Categories.css'; 
import search from "../assets/search.png";
import hamburger from "../assets/ham.png"; // Add an icon for the hamburger menu
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart-slice';
import bandagebrown from "../assets/plasterbrown.png";
import plaster from "../assets/plaster.png";
import colors from '../assets/colors.png'
import colorbandages from '../assets/colorbandage.png'
import cutwhite from '../assets/cutwhite.png'
import bud from '../assets/bud.png'
import cloth from '../assets/cloth.png'
import drink from '../assets/drink.png'

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
  {
    id: 5,
    name: "Elastic Bandages (ACE wraps)",
    imgURL: cutwhite,
    price: 500,
    rating: 4.5,
    category: "Adhesive bandages",
  },
  {
    id: 6,
    name: "Bandages with cotton wool",
    imgURL: bud,
    price: 4000,
    rating: 4,
    category: "bandages",
  },
  {
    id: 7,
    name: "Bandages for babies",
    imgURL: cloth,
    price: 3000,
    rating: 3.5,
    category: "bandages",
  },
  {
    id: 8,
    name: "Green bandage and supplement",
    imgURL: drink,
    price: 5000,
    rating: 2.5,
    category: "electronics",
  },
];

const priceRanges = [
  { label: 'All price', range: [0, Infinity] },
  { label: 'Under N2000', range: [0, 2000] },
  { label: 'N2500 to N5000', range: [2500, 5000] },
  { label: 'N5000 to N10000', range: [5000, 10000] },
  { label: 'N10000 and above', range: [10000, Infinity] },
];

const Categories = () => {
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, Infinity]);
  const [sortOrder, setSortOrder] = useState('popularity'); 
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS_DATABASE);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState('All price');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategories(prevCategories =>
      prevCategories.includes(category)
        ? prevCategories.filter(c => c !== category)
        : [...prevCategories, category]
    );
  };

  const handlePriceRangeChange = (rangeLabel) => {
    const range = priceRanges.find(r => r.label === rangeLabel).range;
    setPriceRange(range);
    setSelectedPriceRange(rangeLabel);
  };

  const handleSliderChange = (range) => {
    setPriceRange(range);
    setSelectedPriceRange('');
  };

  const filterAndSortProducts = () => {
    let products = PRODUCTS_DATABASE;

    if (searchTerm) {
      products = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    products = products.filter(product =>
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    if (selectedCategories.length > 0) {
      products = products.filter(product =>
        selectedCategories.includes(product.category)
      );
    }

    if (sortOrder === 'popularity') {
      products.sort((a, b) => b.rating - a.rating);
    } else if (sortOrder === 'price') {
      products.sort((a, b) => a.price - b.price);
    }

    setFilteredProducts(products);
  };

  useEffect(() => {
    filterAndSortProducts();
  }, [searchTerm, priceRange, sortOrder, selectedCategories]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='px-4 md:px-14 flex flex-row'>
      <button onClick={toggleMenu} className="md:hidden">
        <img src={hamburger} alt="Menu" className="h-6 w-6" />
      </button>
      
      <div className={`md:w-1/4 pr-4 ${menuOpen ? 'block' : 'hidden'} md:block`}>
        <div className='py-2 mb-6'>
          <label className='block mb-2 text-sm font-medium text-gray-700'>Category</label>
          {['electronics', 'clothing', 'home', 'sports', 'toys'].map((category) => (
            <div className='py-1' key={category}>
              <label>
                <input
                  type="checkbox"
                  value={category}
                  checked={selectedCategories.includes(category)}
                  onChange={handleCategoryChange}
                  className='mr-2 rounded-full p-2'
                />
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </label>
            </div>
          ))}
        </div>

        <div className='mt-6'>
          <label className='block mb-2 text-sm font-medium text-gray-700'>Price Range</label>
          <ReactSlider
            className="horizontal-slider"
            thumbClassName="thumb"
            trackClassName="track"
            min={0}
            max={100000}
            value={priceRange}
            onChange={handleSliderChange}
            ariaLabel={['Lower thumb', 'Upper thumb']}
            ariaValuetext={state => `Thumb value ${state.valueNow}`}
          />
          <div className='flex justify-between mt-2'>
            <span>N{priceRange[0]}</span>
            <span>N{priceRange[1]}</span>
          </div>
        </div>

        <div>
          <label className='block mt-5 text-sm font-medium text-gray-700'>Price Range</label>
          {priceRanges.map((price, index) => (
            <div key={index} className='py-2'>
              <label>
                <input
                  type="radio"
                  value={price.label}
                  checked={selectedPriceRange === price.label}
                  onChange={() => handlePriceRangeChange(price.label)}
                  className='mr-2 rounded-full p-2'
                />
                {price.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className='w-full md:w-3/4 py-2'>
        <div className='flex justify-between mb-4'>
          <div className='relative w-1/2 pr-2'>
            <input
              type="text"
              placeholder="Search for anything..."
              value={searchTerm}
              onChange={handleSearch}
              className='block w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-[#A4A4A4] focus:border-[#A4A4A4]'
            />
            <div className="absolute inset-y-0 right-2 flex p-2 items-center">
              <img
                src={search}
                alt="Search Icon"
                className="h-[25px] w-[25px] bg-transparent"
                style={{ fill: "white" }}
              />
            </div>
          </div>

          <div className='w-1/3'>
            <select
              value={sortOrder}
              onChange={handleSortChange}
              className='block w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-[#A4A4A4] focus:border-[#A4A4A4]'
            >
              <option value="popularity">Popularity</option>
              <option value="price">Price</option>
            </select>
          </div>
        </div>
        <div>
          {filteredProducts.length > 0 ? (
            <ul className="grid xx:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
              {filteredProducts.map((product) => (
                <li key={product.id} className="list-none border p-4 rounded-lg shadow-sm hover:shadow-md">
                  <div>
                    <img src={product.imgURL} alt={product.name} className="w-full h-40 object-cover mb-4 rounded-md" />
                    <div className='font-medium text-lg'>{product.name}</div>
                    <div className='text-gray-600'>N{product.price}</div>
                    <div className='text-yellow-500'>
                      {Array(Math.round(product.rating)).fill('★').join('')} 
                      {Array(5 - Math.round(product.rating)).fill('☆').join('')}
                    </div>
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
        </div>
      </div>
    </div>
  );
};

export default Categories;
