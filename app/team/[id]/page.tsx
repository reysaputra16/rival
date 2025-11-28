"use client";
import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";
import React from "react";

const teamList = [
  {
    id: "2005",
    name: "Test Team",
    description: "This is a cool ass team!",
    sports: ["Football", "Basketball", "Volleyball"],
  },
  {
    id: "201",
  },
];

const TeamPage = () => {
  const pathname = usePathname();
  const id = pathname.slice(1).split("/")[1]; // e.g. "/team/205" -> "team/205" -> "205"
  const team = teamList.find((team) => team.id === id);
  return (
    <div className="w-full flex flex-col items-center">
      <Navbar />
      {team ? <p>The team with ID {team.id} exists!</p> : <p>Team does not exist!</p>}
    </div>
  );
};

export default TeamPage;
