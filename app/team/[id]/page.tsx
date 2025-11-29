"use client";
import Navbar from "@/components/Navbar";
import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import BorussiaDortmund from "@/public/football_logos/borussia-dortmund.svg";
import ManchesterCity from "@/public/football_logos/manchester-city.svg";
import BayerLeverkusen from "@/public/football_logos/bayer-leverkusen.svg";
import Liverpool from "@/public/football_logos/liverpool.svg";
import NewcastleUnited from "@/public/football_logos/newcastle-united.svg";
import LeedsUnited from "@/public/football_logos/leeds-united.svg";
import Bournemouth from "@/public/football_logos/bournemouth.svg";
import UefaChampionsLeague from "@/public/football_logos/uefa-champions-league.svg";
import PremierLeague from "@/public/football_logos/premier-league.svg";

const teamList = [
  {
    id: "1",
    name: "Manchester City",
    img: ManchesterCity,
    description: "This is a cool ass team!",
    sports: ["Football", "Basketball", "Volleyball"],
    recentMatches: [
      {
        homeLogo: ManchesterCity,
        awayLogo: Bournemouth,
        homeScore: 3,
        awayScore: 1,
        outcome: "W",
      },
      {
        homeLogo: ManchesterCity,
        awayLogo: BorussiaDortmund,
        homeScore: 4,
        awayScore: 1,
        outcome: "W",
      },
      {
        homeLogo: ManchesterCity,
        awayLogo: Liverpool,
        homeScore: 3,
        awayScore: 0,
        outcome: "W",
      },
      {
        homeLogo: NewcastleUnited,
        awayLogo: ManchesterCity,
        homeScore: 2,
        awayScore: 1,
        outcome: "L",
      },
      {
        homeLogo: ManchesterCity,
        awayLogo: BayerLeverkusen,
        homeScore: 0,
        awayScore: 2,
        outcome: "L",
      },
    ],
  },
];

const latestMatch = {
  competitionName: "UEFA Champions League",
  competitionLogo: UefaChampionsLeague,
  homeTeam: "Manchester City",
  homeLogo: ManchesterCity,
  awayTeam: "Bayer 04 Leverkusen",
  awayLogo: BayerLeverkusen,
  homeScore: 0,
  awayScore: 2,
  date: "25.11.2025",
  location: "Etihad Stadium",
};

const nextMatch = {
  competitionName: "Premier League",
  competitionLogo: PremierLeague,
  homeTeam: "Manchester City",
  homeLogo: ManchesterCity,
  awayTeam: "Leeds United",
  awayLogo: LeedsUnited,
  time: "16:00",
  date: "Tomorrow",
  location: "Etihad Stadium",
};

const recentMatches = [
  {
    homeLogo: ManchesterCity,
    awayLogo: Bournemouth,
    homeScore: 3,
    awayScore: 1,
    outcome: "W",
  },
  {
    homeLogo: ManchesterCity,
    awayLogo: BorussiaDortmund,
    homeScore: 4,
    awayScore: 1,
    outcome: "W",
  },
  {
    homeLogo: ManchesterCity,
    awayLogo: Liverpool,
    homeScore: 3,
    awayScore: 0,
    outcome: "W",
  },
  {
    homeLogo: NewcastleUnited,
    awayLogo: ManchesterCity,
    homeScore: 2,
    awayScore: 1,
    outcome: "L",
  },
  {
    homeLogo: ManchesterCity,
    awayLogo: BayerLeverkusen,
    homeScore: 0,
    awayScore: 2,
    outcome: "L",
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
            src={ManchesterCity}
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
      <div className="w-full max-w-7xl flex flex-row px-10 pt-10">
        {/* Left Component 2/3 */}
        <div className="w-2/3 flex flex-col h-full gap-5">
          {/* Latest and Next Match */}
          <div className="w-full flex flex-row gap-5">
            {/* Latest Match */}
            <div className="w-1/2 flex flex-col gap-2">
              <div className="px-2">
                <h1 className="text-2xl font-bold">Latest Match</h1>
              </div>
              <div className="w-full flex flex-col gap-7 bg-gray-700 px-4 py-2 rounded-2xl">
                <div className="flex flex-row gap-2">
                  <Image
                    src={latestMatch.competitionLogo}
                    alt="competition-logo"
                    width={15}
                    height={15}
                    className="object-contain"
                  />
                  <p className="text-sm">{latestMatch.competitionName}</p>
                </div>
                <div className="w-full flex flex-row justify-center items-center gap-5">
                  <div className="w-2/5 flex justify-center">
                    <Image
                      src={latestMatch.homeLogo}
                      alt="latest-match-home"
                      height={60}
                      className="object-contain"
                    />
                  </div>
                  <div className="w-1/5 flex justify-center">
                    <div className="bg-gray-800 p-2 rounded-2xl">
                      <p className="text-xl">
                        {latestMatch.homeScore} - {latestMatch.awayScore}
                      </p>
                    </div>
                  </div>
                  <div className="w-2/5 flex justify-center">
                    <Image
                      src={latestMatch.awayLogo}
                      alt="latest-match-away"
                      height={60}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="w-full flex flex-row justify-center items-center gap-5">
                  <div className="w-2/5">
                    <p className="text-center text-xs">{latestMatch.homeTeam}</p>
                  </div>
                  <div className="w-1/5" />
                  <div className="w-2/5">
                    <p className="text-xs text-center">{latestMatch.awayTeam}</p>
                  </div>
                </div>
                <div className="w-full flex flex-row justify-center items-center gap-5">
                  <div className="flex flex-row items-center gap-2">
                    <Calendar size={15} className="text-gray-500" />
                    <p className="text-xs text-gray-300">{latestMatch.date}</p>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <MapPin size={15} className="text-gray-500" />
                    <p className="text-xs text-gray-300">{latestMatch.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Next Match */}
            <div className="w-1/2 flex flex-col gap-2">
              <div className="px-2">
                <h1 className="text-2xl font-bold">Next Match</h1>
              </div>
              <div className="w-full flex flex-col gap-7 bg-gray-700 px-4 py-2 rounded-2xl">
                <div className="flex flex-row gap-2">
                  <Image
                    src={nextMatch.competitionLogo}
                    alt="competition-logo"
                    width={15}
                    height={15}
                    className="object-contain"
                  />
                  <p className="text-sm">{nextMatch.competitionName}</p>
                </div>
                <div className="w-full flex flex-row justify-center items-center gap-5">
                  <div className="w-2/5 flex justify-center">
                    <Image
                      src={nextMatch.homeLogo}
                      alt="next-match-home"
                      height={60}
                      className="object-contain"
                    />
                  </div>
                  <div className="w-1/5 flex justify-center">
                    <div className="bg-gray-800 p-2 rounded-2xl">
                      <p className="text-xl">{nextMatch.time}</p>
                    </div>
                  </div>
                  <div className="w-2/5 flex justify-center">
                    <Image
                      src={nextMatch.awayLogo}
                      alt="next-match-away"
                      height={50}
                      className="rounded-full object-contain"
                    />
                  </div>
                </div>
                <div className="w-full flex flex-row justify-center items-center gap-5">
                  <div className="w-2/5">
                    <p className="text-center text-xs">{nextMatch.homeTeam}</p>
                  </div>
                  <div className="w-1/5" />
                  <div className="w-2/5">
                    <p className="text-xs text-center">{nextMatch.awayTeam}</p>
                  </div>
                </div>
                <div className="w-full flex flex-row justify-center items-center gap-5">
                  <div className="flex flex-row items-center gap-2">
                    <Calendar size={15} className="text-gray-500" />
                    <p className="text-xs text-gray-300">{nextMatch.date}</p>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <MapPin size={15} className="text-gray-500" />
                    <p className="text-xs text-gray-300">{nextMatch.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Matches */}
          <div className="w-full flex flex-col gap-2">
            <div className="px-2">
              <h1 className="text-2xl font-bold">Recent Matches</h1>
            </div>
            <div className="w-full flex flex-row gap-5 bg-gray-700 p-6 rounded-2xl justify-between items-center">
              {recentMatches.map((match, index) => (
                <div
                  key={index}
                  className={`relative flex flex-row gap-2 justify-center items-center border-2 py-4 px-2 w-full rounded-2xl ${match.outcome === "W" ? "border-green-500" : match.outcome === "D" ? "border-gray-500" : match.outcome === "L" ? "border-red-500" : ""}`}
                >
                  <Image
                    src={match.homeLogo}
                    alt="home-logo"
                    height={25}
                    className="object-contain"
                  />
                  <p>
                    {match.homeScore} - {match.awayScore}
                  </p>
                  <Image
                    src={match.awayLogo}
                    alt="away-logo"
                    height={25}
                    className="object-contain"
                  />
                  <div className="absolute top-12 px-4 bg-gray-700">
                    <p
                      className={`${match.outcome === "W" ? "text-green-500" : match.outcome === "D" ? "text-gray-500" : match.outcome === "L" ? "text-red-500" : ""} font-bold text-md`}
                    >
                      {match.outcome}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
