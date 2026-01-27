import React, { useState } from "react";
import Image from "next/image";

import ChampionsLeague from "@/public/football_logos/uefa-champions-league.svg";
import ManchesterCity from "@/public/football_logos/manchester-city.svg";
import Arsenal from "@/public/football_logos/arsenal.svg";
import RealMadrid from "@/public/football_logos/real-madrid.svg";
import Chelsea from "@/public/football_logos/chelsea.svg";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Liverpool from "@/public/football_logos/liverpool.svg";

import MatchCard from "./MatchCard";

interface KnockoutPhaseMatchProps {
  phaseName: string;
  matchInfo: MatchCardProps;
}
const roundOf16 = {
  phaseName: "Round of 16",
  matchInfo: {
    homeTeam: "Manchester City",
    homeLogo: ManchesterCity,
    awayTeam: "Arsenal",
    awayLogo: Arsenal,
    homeScore: 2,
    awayScore: 0,
    status: "Finished",
    liveTime: 0,
    date: "21.12.2025",
    time: "21:00",
  },
};
const quarterFinal = {
  phaseName: "Quarter Final",
  matchInfo: {
    homeTeam: "Real Madrid",
    homeLogo: RealMadrid,
    awayTeam: "Manchester City",
    awayLogo: ManchesterCity,
    homeScore: 1,
    awayScore: 2,
    status: "Finished",
    liveTime: 0,
    date: "27.12.2025",
    time: "21:00",
  },
};
const semiFinal = {
  phaseName: "Semi Final",
  matchInfo: {
    homeTeam: "Chelsea",
    homeLogo: Chelsea,
    awayTeam: "Manchester City",
    awayLogo: ManchesterCity,
    homeScore: 1,
    awayScore: 5,
    status: "Finished",
    liveTime: 0,
    date: "02.01.2026",
    time: "21:00",
  },
};

const final = {
  phaseName: "Final",
  matchInfo: {
    homeTeam: "Manchester City",
    homeLogo: ManchesterCity,
    awayTeam: "Liverpool",
    awayLogo: Liverpool,
    homeScore: 0,
    awayScore: 0,
    status: "Not Started",
    liveTime: 0,
    date: "03.02.2026",
    time: "21:00",
  },
};

const LeaguePhase = () => {
  const looperList = [1, 2, 3];

  return (
    <div className="w-full flex flex-col justify-center items-center gap-2">
      {/* Stage Name */}
      <p className="text-sm font-medium">League Phase</p>
      {/* Table position */}
      <div className="w-full flex flex-col shadow-lg rounded-lg">
        {/* Position header */}
        <div className="w-full flex flex-row dark:bg-zinc-800 bg-zinc-100 py-1 rounded-t-lg">
          {/* Filler for team name */}
          <div className="w-[80%]" />
          <div className="w-[10%] flex justify-center items-center">
            <p>+/-</p>
          </div>
          <div className="w-[10%] flex justify-center items-center">
            <p>PTS</p>
          </div>
        </div>
        {/* Teams */}
        <div className="flex flex-col gap-2 py-2">
          {looperList.map((loop, index) => (
            <div
              key={index}
              className={`w-full flex flex-row ${loop === 1 ? "dark:bg-zinc-800 bg-zinc-100 rounded-md" : ""} py-1`}
            >
              {/* Position and team name */}
              <div className="w-[80%] flex flex-row">
                <div className="w-[10%] flex items-center px-2">
                  <p className="text-sm font-medium">{loop}</p>
                </div>
                <div className="w-full flex items-center gap-2">
                  <Image src={ManchesterCity} alt="team-logo" height={20} />
                  <p className="text-sm font-normal">Manchester City</p>
                </div>
              </div>
              {/* Goal Difference */}
              <div className="w-[10%] flex justify-center items-center">
                <p className="text-sm">6</p>
              </div>
              {/* Points */}
              <div className="w-[10%] flex justify-center items-center">
                <p className="text-sm">13</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const KnockoutPhaseMatch = (match: KnockoutPhaseMatchProps) => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-2">
      {/* Stage Name */}
      <p className="text-sm font-medium">{match.phaseName}</p>
      <MatchCard {...match.matchInfo} />
    </div>
  );
};

const CompetitionCard = () => {
  const [currentPhase, setCurrentPhase] = useState(4);

  return (
    <div className="w-full min-h-[280px] flex flex-col rounded-lg shadow-md dark:bg-zinc-700 bg-white">
      {/* Competition Name and Logo */}
      <div className="flex flex-row gap-2 border-b dark:border-zinc-800 border-zinc-100 p-4">
        <Image src={ChampionsLeague} alt="comp-logo" height={20} />
        <div className="flex items-center">
          <p className="text-xs font-extralight">UEFA Champions League</p>
        </div>
      </div>

      {/* Competition Phases */}
      <div className="w-full flex flex-row px-2 py-6 gap-6">
        <div className="w-[10%] flex justify-center items-center">
          {currentPhase > 0 ? (
            <ArrowLeft
              className="border rounded-full p-0.5 dark:border-zinc-900 border-zinc-400 dark:text-zinc-900 text-zinc-400 transition-all duration-300 hover:border-black hover:text-black hover:dark:border-white hover:dark:text-white cursor-pointer"
              size={20}
              onClick={() => (currentPhase > 0 ? setCurrentPhase(currentPhase - 1) : "")}
            />
          ) : (
            ""
          )}
        </div>

        <div className="w-full flex justify-center items-center">
          {currentPhase === 0 ? (
            <LeaguePhase />
          ) : currentPhase === 1 ? (
            <KnockoutPhaseMatch phaseName={roundOf16.phaseName} matchInfo={roundOf16.matchInfo} />
          ) : currentPhase === 2 ? (
            <KnockoutPhaseMatch
              phaseName={quarterFinal.phaseName}
              matchInfo={quarterFinal.matchInfo}
            />
          ) : currentPhase === 3 ? (
            <KnockoutPhaseMatch phaseName={semiFinal.phaseName} matchInfo={semiFinal.matchInfo} />
          ) : currentPhase === 4 ? (
            <KnockoutPhaseMatch phaseName={final.phaseName} matchInfo={final.matchInfo} />
          ) : (
            ""
          )}
        </div>
        <div className="w-[10%] flex justify-center items-center">
          {currentPhase < 4 ? (
            <ArrowRight
              className="border rounded-full p-0.5 dark:border-zinc-900 border-zinc-400 dark:text-zinc-900 text-zinc-400 transition-all duration-300 hover:border-black hover:text-black hover:dark:border-white hover:dark:text-white cursor-pointer"
              size={20}
              onClick={() => setCurrentPhase(currentPhase < 4 ? currentPhase + 1 : currentPhase)}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default CompetitionCard;
