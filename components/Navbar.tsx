import { ChevronDown, LogIn, Medal, Settings } from "lucide-react";
import React, { useState } from "react";

const Navbar = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="w-full flex flex-row max-w-7xl p-4 justify-center gap-4 items-center">
      <h1 className="text-cyan-600 text-2xl font-bold">RIVAL</h1>
      {/* Search Bar */}
      <div className="flex flex-row w-[50%]">
        <form className="w-full">
          <input
            type="text"
            placeholder="Search for Teams, Players, Organizations, and etc..."
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full px-4 py-2 placeholder-gray-500 border-b border-gray-500 focus:outline-none"
          />
        </form>
      </div>
      <div className="flex flex-row">
        {/* Other Buttons */}
        <div className="flex flex-row gap-6 px-6 border-r border-gray-500">
          <div className="flex flex-row gap-2 items-center hover:cursor-pointer py-2 px-4">
            <p>Sports</p>
            <ChevronDown />
          </div>
          <div className="flex flex-row gap-2 items-center hover:cursor-pointer py-2 px-4">
            <p>Settings</p>
            <ChevronDown />
          </div>
        </div>

        {/* Create and Login */}
        <div className="flex flex-row gap-6 px-6 border-l border-gray-500">
          <div className="flex flex-row gap-2 hover:cursor-pointer justify-center items-center bg-cyan-600 py-2 px-6 rounded-full hover:bg-gray-100 hover:text-black transition-all duration-500">
            <p>Create</p>
          </div>
          <div className="flex flex-row gap-2 hover:cursor-pointer justify-center items-center py-2 px-4 rounded-full">
            <p>Login</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
