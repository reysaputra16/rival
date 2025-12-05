import React from "react";

const Footer = () => {
  return (
    <div className="mt-20 w-full flex justify-center items-center h-[150px] bg-cyan-950">
      <div className="flex flex-row justify-between max-w-7xl w-full">
        <div className="w-[50%] flex justify-start">
          <h1 className="text-cyan-600 text-2xl font-bold">RIVAL</h1>
        </div>
        <div className="w-[50%] flex justify-end">
          <p>® Rival 2025</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
