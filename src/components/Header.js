import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import search from "../assets/search.png";
import logo from "../assets/logo.png";
import Heart from "../assets/Heart.png";
import profile from "../assets/profile.png";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="w-full z-10">
      <div className=" w-full py-5 px-4 md:px-9 flex flex-row justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-10 md:h-14 md:w-14" />
          <h1 className="text-2xl md:text-3xl font-bold hidden md:block ml-2">Shodai</h1>
        </div>

        <div className="flex items-center gap-4 md:gap-8">
        <div className='relative xx:w-24 sm:w-[450px] pr-2'>
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearch}
              className='block w-full p-2 border rounded-2xl shadow-sm focus:outline-none focus:ring-[#A4A4A4] focus:border-[#A4A4A4]'
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

          <div className="flex items-center gap-4">
            <Link to="/favorites" className="flex items-center">
              <img src={Heart} alt="Favorites" className="h-5 w-5 md:h-[25px] md:w-[25px]" />
            </Link>

            <Link to="/cart" className="flex items-center">
              <Cart />
            </Link>

            <Link to="/profile" className="flex items-center">
              <img src={profile} alt="Profile" className="h-5 w-5 md:h-[25px] md:w-[25px]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
