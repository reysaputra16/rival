"use client";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";

// Icons
import { Frown, VectorSquare, Trophy, GitGraph } from "lucide-react";

// Football Logos
import PremierLeague from "@/public/football_logos/premier-league.svg";
import ManchesterCity from "@/public/football_logos/manchester-city.svg";
import Arsenal from "@/public/football_logos/arsenal.svg";
import Bournemouth from "@/public/football_logos/bournemouth.svg";
import Liverpool from "@/public/football_logos/liverpool.svg";
import LeedsUnited from "@/public/football_logos/leeds-united.svg";
import NewcastleUnited from "@/public/football_logos/newcastle-united.svg";
// MOCK DATA
const competitionList = [
  {
    id: "1",
    name: "Premier League",
    img: PremierLeague,
    description: "The best league in the world",
    sports: ["Football"],
  },
];

const competitionStages = [
  {
    competitionStage: "Group Stage",
    isPlayed: true,
  },
  {
    competitionStage: "Quarter Final",
    isPlayed: true,
  },
  {
    competitionStage: "Semi Final",
    isPlayed: false,
  },
  {
    competitionStage: "Final",
    isPlayed: false,
  },
];

const matches = [
  {
    matchInfo: {
      homeTeam: "Manchester City",
      homeLogo: ManchesterCity,
      awayTeam: "Bournemouth",
      awayLogo: Bournemouth,
      homeScore: 0,
      awayScore: 0,
      status: "Live",
      time: "15:00",
      date: "25.11.2025",
      location: "Etihad Stadium",
    },
    liveTime: 39,
  },
  {
    matchInfo: {
      homeTeam: "Arsenal",
      homeLogo: Arsenal,
      awayTeam: "Liverpool",
      awayLogo: Liverpool,
      homeScore: 0,
      awayScore: 0,
      status: "Not Started",
      time: "15:00",
      date: "28.11.2025",
      location: "Emirates Stadium",
    },
    liveTime: 0,
  },
  {
    matchInfo: {
      homeTeam: "Leeds United",
      homeLogo: LeedsUnited,
      awayTeam: "Newcastle United",
      awayLogo: NewcastleUnited,
      homeScore: 0,
      awayScore: 0,
      status: "Not Starrted",
      time: "18:00",
      date: "01.12.2025",
      location: "Elland Road",
    },
    liveTime: 0,
  },
];

const miniNavbar = ["Overview", "Stages", "Teams", "Matches", "Statistics"];

const OverviewPage = () => {
  const competitionFormatIconSize = 25;
  return (
    <>
      {/* Left and Right Components */}
      <div className="w-full max-w-7xl flex flex-row px-10 pt-10 gap-5">
        {/* Left Component 2/3 */}
        <div className="w-2/3 flex flex-col h-full gap-5">
          {/* Competition Format */}
          <div className="w-full flex flex-col gap-2">
            <div className="px-2">
              <h1 className="text-2xl font-bold">Competition Format</h1>
            </div>
            <div className="w-full flex flex-row justify-between items-center gap-2 bg-gray-700 p-4 rounded-2xl">
              {competitionStages.map((stage, index) => (
                <>
                  <div
                    key={index}
                    className={`w-full flex flex-col items-center justify-center gap-2 ${stage.isPlayed ? "text-cyan-500" : "text-gray-400"}`}
                  >
                    {stage.competitionStage === "Group Stage" ? (
                      <VectorSquare size={competitionFormatIconSize} />
                    ) : stage.competitionStage === "Final" ? (
                      <Trophy size={competitionFormatIconSize} />
                    ) : (
                      <GitGraph size={competitionFormatIconSize} />
                    )}
                    <p className="text-sm text-center">{stage.competitionStage}</p>
                  </div>
                  {index !== competitionStages.length - 1 ? (
                    <div
                      className={`w-full h-0.5 mx-2 ${stage.isPlayed ? "bg-cyan-500" : "bg-gray-400"}`}
                    />
                  ) : (
                    ""
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const CompetitionPage = () => {
  const pathname = usePathname();
  const id = pathname.slice(1).split("/")[1]; // e.g. "/competition/205" -> "competition/205" -> "205"
  const competition = competitionList.find((comp) => comp.id === id);

  // States
  const [currentSelection, setCurrentSelection] = useState("Overview");

  return (
    <div className="w-full flex flex-col items-center pt-5 mt-5">
      {/* Header and Banner */}
      <div className="relative w-full max-w-7xl h-[250px]">
        {/* Upper Background */}
        <div className="absolute w-full h-[50%] bg-[#360c3a] opacity-60 rounded-t-3xl" />
        {/* Team Logo */}
        <div className="absolute w-full h-full flex items-center pl-15 gap-5">
          <Image
            src={PremierLeague}
            alt="competition-photo"
            height={150}
            className="rounded-full object-contain p-2 bg-white"
          />
        </div>
        {/* Team Name */}
        <div className="absolute w-full h-[50%] flex items-end pl-58 pb-1">
          <p className="text-3xl font-normal">Premier League</p>
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

      {/* Selections */}
      {currentSelection === "Overview" ? (
        <OverviewPage />
      ) : (
        <div className="max-w-7xl min-h-[500px] w-full h-full flex flex-col gap-5 items-center pt-50">
          <Frown size={100} />
          <h1 className="text-2xl font-extralight">Oops!</h1>
          <p className="text-lg text-gray-400">No results found. Come back later!</p>
        </div>
      )}
    </div>
  );
};

export default CompetitionPage;
