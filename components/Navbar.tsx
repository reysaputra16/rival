"use client";
import { ChevronDown, LogIn, Medal, Search, Settings } from "lucide-react";
import React, { useState } from "react";

const Navbar = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <nav className="w-full flex flex-row max-w-7xl p-4 justify-between gap-4 items-center">
      {/* Logo */}
      <div className="flex px-6">
        <h1 className="text-2xl font-bold">RIVAL</h1>
      </div>

      {/* Search Bar */}
      <div className="flex flex-row w-[50%]">
        <form className="w-full">
          <input
            type="text"
            placeholder={`Search`}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full px-4 py-2 placeholder-gray-500 border border-gray-500 rounded-2xl focus:outline-none text-sm"
          />
        </form>
      </div>

      {/* Other buttons */}
      <div className="flex flex-row justify-between items-center gap-5">
        <div className="px-4 py-1">
          <p className="text-sm font-mono">About</p>
        </div>
        <div className="px-4 py-1">
          <p className="text-sm font-mono">Contact</p>
        </div>
        <div className="px-4 py-1 border rounded-2xl transition-all duration-300 hover:dark:bg-white hover:dark:text-black hover:bg-black hover:text-white">
          <p className="text-sm font-mono ">Login</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
