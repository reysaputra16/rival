"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const teamList = [
  {
    id: "2005",
    name: "Manchester City",
    description: "This is a cool ass team!",
    sports: ["Football", "Basketball", "Volleyball"],
  },
  {
    id: "201",
  },
];

const miniNavbar = ["Overview", "Squad", "Matches", "Videos"];

const TeamPage = () => {
  const pathname = usePathname();
  const id = pathname.slice(1).split("/")[1]; // e.g. "/team/205" -> "team/205" -> "205"
  const team = teamList.find((team) => team.id === id);
  const [currentSelection, setCurrentSelection] = useState("Overview");
  return (
    <div className="w-full flex flex-col items-center pt-5">
      {/* Header and Banner */}
      <div className="relative w-full max-w-7xl h-[250px]">
        {/* Upper Background */}
        <div className="absolute w-full h-[50%] bg-blue-300 opacity-60 rounded-t-3xl" />
        {/* Team Logo */}
        <div className="absolute w-full h-full flex items-center pl-15 gap-5">
          <Image
            src="https://upload.wikimedia.org/wikipedia/sco/e/eb/Manchester_City_FC_badge.svg"
            alt="team-photo"
            width={150}
            height={150}
            className="rounded-full object-contain"
          />
        </div>
        {/* Team Name */}
        <div className="absolute w-full h-[50%] flex items-end pl-58 pb-1">
          <p className="text-3xl font-normal">Manchester City</p>
        </div>
        <div className="absolute w-full h-[50%] flex items-end pl-58 pt-40">
          <p className="text-lg font-normal text-gray-500">Football</p>
        </div>
      </div>

      {/* Mini Navbar */}
      <div className="w-full max-w-7xl px-10">
        <div className="flex flex-row gap-10">
          {miniNavbar.map((selection, index) => (
            <p
              key={index}
              className={`text-md ${currentSelection === selection ? "underline" : "hover:underline hover:cursor-pointer hover:text-current text-gray-500"} underline-offset-16`}
              onClick={() => setCurrentSelection(selection)}
            >
              {selection}
            </p>
          ))}
        </div>
      </div>

      {/* Left and Right Components */}
      <div className="w-full max-w-7xl flex flex-row px-10 pt-5">
        {/* Left Component 2/3 */}
        <div className="w-2/3 flex flex-row h-full">
          <p>Test Test</p>
        </div>
        {/* Right Component 1/3 */}
        <div className="w-1/3 flex flex-col h-full">
          <p>Test</p>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
