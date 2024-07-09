import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import search from "../assets/search.png";
import logo from "../assets/logo.png";
import Heart from "../assets/Heart.png";
import profile from "../assets/profile.png";

const Header = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="w-full z-10">
      <div className="container w-full py-5 px-4 md:px-9 flex flex-row justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-10 md:h-14 md:w-14" />
          <h1 className="text-2xl md:text-3xl font-bold hidden md:block ml-2">Shodai</h1>
        </div>

        <div className="flex items-center gap-4 md:gap-8">
          <div className="flex items-center rounded-3xl bg-gray-100 px-2 py-1">
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="bg-transparent w-24 md:w-64 outline-none py-1"
            />
            <img
              src={search}
              alt="Search Icon"
              className="h-5 w-5 md:h-[25px] md:w-[25px] bg-transparent"
            />
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
