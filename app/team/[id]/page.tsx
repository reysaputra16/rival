"use client";

// Imports
// Components
import LatestCompetitionLeagueTable from "./components/LatestCompetitionLeagueTable";
import LatestCompetitionKnockoutRound from "./components/LatestCompetitionKnockoutRound";

// Lucide Icons
import {
  Calendar,
  ChevronLeftCircle,
  ChevronRightCircle,
  Circle,
  CircleUser,
  Frown,
  MapPin,
} from "lucide-react";

// Next and React Functions
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

// Football Logos (to be refined)
import BorussiaDortmund from "@/public/football_logos/borussia-dortmund.svg";
import ManchesterCity from "@/public/football_logos/manchester-city.svg";
import BayerLeverkusen from "@/public/football_logos/bayer-leverkusen.svg";
import Liverpool from "@/public/football_logos/liverpool.svg";
import NewcastleUnited from "@/public/football_logos/newcastle-united.svg";
import LeedsUnited from "@/public/football_logos/leeds-united.svg";
import Bournemouth from "@/public/football_logos/bournemouth.svg";
import Arsenal from "@/public/football_logos/arsenal.svg";
import Chelsea from "@/public/football_logos/chelsea.svg";
import RealMadrid from "@/public/football_logos/real-madrid.svg";
import UefaChampionsLeague from "@/public/football_logos/uefa-champions-league.svg";
import PremierLeague from "@/public/football_logos/premier-league.svg";

// Social Media Logos
import Instagram from "@/public/social_media_logos/instagram.svg";
import Facebook from "@/public/social_media_logos/facebook.svg";
import Tiktok from "@/public/social_media_logos/tiktok.svg";
import Link from "next/link";

// MOCK DATA
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
  status: "Finished",
  time: "21:00",
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
  homeScore: 0,
  awayScore: 0,
  status: "Not Started",
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

const latestCompetition = {
  competitionName: "Premier League",
  competitionLogo: PremierLeague,
  competitionStages: [
    {
      competitionStage: "League Table",
      teamPosition: {
        name: "Manchester City",
        img: ManchesterCity,
        position: 2,
        gamesPlayed: 13,
        wins: 8,
        draws: 1,
        losses: 4,
        goalDiff: 15,
        points: 25,
        mostTop: false,
        mostBottom: false,
      },
      upperTeamPosition: {
        name: "Arsenal",
        img: Arsenal,
        position: 1,
        gamesPlayed: 13,
        wins: 9,
        draws: 3,
        losses: 1,
        goalDiff: 18,
        points: 30,
      },
      lowerTeamPosition: {
        name: "Chelsea",
        img: Chelsea,
        position: 3,
        gamesPlayed: 13,
        wins: 7,
        draws: 3,
        losses: 3,
        goalDiff: 12,
        points: 24,
      },
    },
    {
      competitionStage: "Knockout Rounds",
      matchInfo: {
        type: "Quarter Final",
        homeTeam: "Manchester City",
        awayTeam: "Arsenal",
        homeLogo: ManchesterCity,
        awayLogo: Arsenal,
        homeScore: 3,
        awayScore: 2,
        status: "Finished",
        time: "21:15",
        date: "01.12.2025",
        location: "Etihad Stadium",
      },
    },
    {
      competitionStage: "Knockout Rounds",
      matchInfo: {
        type: "Semi Final",
        homeTeam: "Real Madrid",
        awayTeam: "Manchester City",
        homeLogo: RealMadrid,
        awayLogo: ManchesterCity,
        homeScore: 0,
        awayScore: 0,
        status: "Not Started",
        time: "21:15",
        date: "15.12.2025",
        location: "Santiago Bernabeu",
      },
    },
  ],
};

const topPerformers = [
  {
    name: "Erling Haaland",
    position: "Forward",
    award: "Most Goals",
    amount: 25,
    metric: "",
  },
  {
    name: "Phil Foden",
    position: "Midfielder",
    award: "Most Assists",
    amount: 12,
    metric: "",
  },
  {
    name: "Gianluigi Donnarumma",
    position: "Goalkeeper",
    award: "Most Clean Sheets",
    amount: 9,
    metric: "",
  },
  {
    name: "Jeremy Doku",
    position: "Midfielder",
    award: "Most Dribbles Completed",
    amount: 87,
    metric: "",
  },
  {
    name: "Bernardo Silva",
    position: "Midfielder",
    award: "Most Passes Completed",
    amount: 192,
    metric: "",
  },
];

const teamProfile = {
  country: "England",
  city: "Manchester",
  description:
    "Manchester City Football Club is a professional football club based in Manchester, England, that competes in the Premier League, the top flight of English football. Founded in 1880 as St. Mark's (West Gorton), they became Ardwick Association Football Club in 1887 and Manchester City in 1894. The club's home ground is the City of Manchester Stadium in east Manchester, to which they moved in 2003, having played at Maine Road since 1923. Manchester City adopted their sky blue home shirts in 1894, the first season with the current name.[4] The club is one of the most successful in English football, having won ten league titles, seven FA Cups, eight League Cups, seven FA Community Shields, one UEFA Champions League, one European Cup Winners' Cup, one UEFA Super Cup and one FIFA Club World Cup.",
  instagram: "instagram Link",
  facebook: "facebook link",
  tiktok: "tiktok link",
};

const players = [
  {
    name: "Gianluigi Donnarumma",
    position: "Goalkeeper",
    age: 25,
    nationality: "England",
    height: 185,
    metric: "cm",
  },
  {
    name: "Ruben Dias",
    position: "Defender",
    age: 25,
    nationality: "England",
    height: 185,
    metric: "cm",
  },
  {
    name: "John Stones",
    position: "Defender",
    age: 25,
    nationality: "England",
    height: 185,
    metric: "cm",
  },
  {
    name: "Rico Lewis",
    position: "Defender",
    age: 25,
    nationality: "England",
    height: 185,
    metric: "cm",
  },
  {
    name: "Josko Gvardiol",
    position: "Defender",
    age: 25,
    nationality: "England",
    height: 185,
    metric: "cm",
  },
  {
    name: "Nico O'Reilly",
    position: "Defender",
    age: 25,
    nationality: "England",
    height: 185,
    metric: "cm",
  },
  {
    name: "Matheus Nunes",
    position: "Defender",
    age: 25,
    nationality: "England",
    height: 185,
    metric: "cm",
  },
  {
    name: "Phil Foden",
    position: "Midfielder",
    age: 25,
    nationality: "England",
    height: 185,
    metric: "cm",
  },
  {
    name: "Bernardo Silva",
    position: "Midfielder",
    age: 25,
    nationality: "England",
    height: 185,
    metric: "cm",
  },
  {
    name: "Jeremy Doku",
    position: "Midfielder",
    age: 25,
    nationality: "England",
    height: 185,
    metric: "cm",
  },
  {
    name: "Savinho",
    position: "Midfielder",
    age: 25,
    nationality: "England",
    height: 185,
    metric: "cm",
  },
  {
    name: "Erling Haaland",
    position: "Forward",
    age: 25,
    nationality: "England",
    height: 185,
    metric: "cm",
  },
  {
    name: "Omar Marmoush",
    position: "Forward",
    age: 25,
    nationality: "England",
    height: 185,
    metric: "cm",
  },
];

const results = [
  {
    competitionName: "UEFA Champions League",
    competitionLogo: UefaChampionsLeague,
    homeTeam: "Manchester City",
    homeLogo: ManchesterCity,
    awayTeam: "Bayer 04 Leverkusen",
    awayLogo: BayerLeverkusen,
    homeScore: 0,
    awayScore: 2,
    status: "Finished",
    time: "21:00",
    date: "25.11.2025",
    location: "Etihad Stadium",
  },
  {
    competitionName: "Premier League",
    competitionLogo: PremierLeague,
    homeTeam: "Manchester City",
    homeLogo: ManchesterCity,
    awayTeam: "Bournemouth",
    awayLogo: Bournemouth,
    homeScore: 3,
    awayScore: 1,
    status: "Finished",
    time: "15:00",
    date: "22.11.2025",
    location: "Etihad Stadium",
  },
  {
    competitionName: "UEFA Champions League",
    competitionLogo: UefaChampionsLeague,
    homeTeam: "Manchester City",
    homeLogo: ManchesterCity,
    awayTeam: "Bayer 04 Leverkusen",
    awayLogo: BayerLeverkusen,
    homeScore: 0,
    awayScore: 2,
    status: "Finished",
    time: "18:00",
    date: "15.11.2025",
    location: "Etihad Stadium",
  },
  {
    competitionName: "UEFA Champions League",
    competitionLogo: UefaChampionsLeague,
    homeTeam: "Manchester City",
    homeLogo: ManchesterCity,
    awayTeam: "Bayer 04 Leverkusen",
    awayLogo: BayerLeverkusen,
    homeScore: 0,
    awayScore: 2,
    status: "Finished",
    time: "21:00",
    date: "25.11.2025",
    location: "Etihad Stadium",
  },
  {
    competitionName: "UEFA Champions League",
    competitionLogo: UefaChampionsLeague,
    homeTeam: "Manchester City",
    homeLogo: ManchesterCity,
    awayTeam: "Bayer 04 Leverkusen",
    awayLogo: BayerLeverkusen,
    homeScore: 0,
    awayScore: 2,
    status: "Finished",
    time: "21:00",
    date: "25.11.2025",
    location: "Etihad Stadium",
  },
  {
    competitionName: "UEFA Champions League",
    competitionLogo: UefaChampionsLeague,
    homeTeam: "Manchester City",
    homeLogo: ManchesterCity,
    awayTeam: "Bayer 04 Leverkusen",
    awayLogo: BayerLeverkusen,
    homeScore: 0,
    awayScore: 2,
    status: "Finished",
    time: "21:00",
    date: "25.11.2025",
    location: "Etihad Stadium",
  },
  {
    competitionName: "UEFA Champions League",
    competitionLogo: UefaChampionsLeague,
    homeTeam: "Manchester City",
    homeLogo: ManchesterCity,
    awayTeam: "Bayer 04 Leverkusen",
    awayLogo: BayerLeverkusen,
    homeScore: 0,
    awayScore: 2,
    status: "Finished",
    time: "21:00",
    date: "25.11.2025",
    location: "Etihad Stadium",
  },
  {
    competitionName: "UEFA Champions League",
    competitionLogo: UefaChampionsLeague,
    homeTeam: "Manchester City",
    homeLogo: ManchesterCity,
    awayTeam: "Bayer 04 Leverkusen",
    awayLogo: BayerLeverkusen,
    homeScore: 0,
    awayScore: 2,
    status: "Finished",
    time: "21:00",
    date: "25.11.2025",
    location: "Etihad Stadium",
  },
];

const upcoming = [
  {
    competitionName: "Premier League",
    competitionLogo: PremierLeague,
    homeTeam: "Manchester City",
    homeLogo: ManchesterCity,
    awayTeam: "Leeds United",
    awayLogo: LeedsUnited,
    homeScore: 0,
    awayScore: 0,
    status: "Not Started",
    time: "16:00",
    date: "Tomorrow",
    location: "Etihad Stadium",
  },
  {
    competitionName: "Premier League",
    competitionLogo: PremierLeague,
    homeTeam: "Manchester City",
    homeLogo: ManchesterCity,
    awayTeam: "Leeds United",
    awayLogo: LeedsUnited,
    homeScore: 0,
    awayScore: 0,
    status: "Not Started",
    time: "16:00",
    date: "Tomorrow",
    location: "Etihad Stadium",
  },
  {
    competitionName: "Premier League",
    competitionLogo: PremierLeague,
    homeTeam: "Manchester City",
    homeLogo: ManchesterCity,
    awayTeam: "Leeds United",
    awayLogo: LeedsUnited,
    homeScore: 0,
    awayScore: 0,
    status: "Not Started",
    time: "16:00",
    date: "Tomorrow",
    location: "Etihad Stadium",
  },
  {
    competitionName: "Premier League",
    competitionLogo: PremierLeague,
    homeTeam: "Manchester City",
    homeLogo: ManchesterCity,
    awayTeam: "Leeds United",
    awayLogo: LeedsUnited,
    homeScore: 0,
    awayScore: 0,
    status: "Not Started",
    time: "16:00",
    date: "Tomorrow",
    location: "Etihad Stadium",
  },
  {
    competitionName: "Premier League",
    competitionLogo: PremierLeague,
    homeTeam: "Manchester City",
    homeLogo: ManchesterCity,
    awayTeam: "Leeds United",
    awayLogo: LeedsUnited,
    homeScore: 0,
    awayScore: 0,
    status: "Not Started",
    time: "16:00",
    date: "Tomorrow",
    location: "Etihad Stadium",
  },
  {
    competitionName: "Premier League",
    competitionLogo: PremierLeague,
    homeTeam: "Manchester City",
    homeLogo: ManchesterCity,
    awayTeam: "Leeds United",
    awayLogo: LeedsUnited,
    homeScore: 0,
    awayScore: 0,
    status: "Not Started",
    time: "16:00",
    date: "Tomorrow",
    location: "Etihad Stadium",
  },
  {
    competitionName: "Premier League",
    competitionLogo: PremierLeague,
    homeTeam: "Manchester City",
    homeLogo: ManchesterCity,
    awayTeam: "Leeds United",
    awayLogo: LeedsUnited,
    homeScore: 0,
    awayScore: 0,
    status: "Not Started",
    time: "16:00",
    date: "Tomorrow",
    location: "Etihad Stadium",
  },
  {
    competitionName: "Premier League",
    competitionLogo: PremierLeague,
    homeTeam: "Manchester City",
    homeLogo: ManchesterCity,
    awayTeam: "Leeds United",
    awayLogo: LeedsUnited,
    homeScore: 0,
    awayScore: 0,
    status: "Not Started",
    time: "16:00",
    date: "Tomorrow",
    location: "Etihad Stadium",
  },
];

const live = {
  matchInfo: {
    competitionName: "UEFA Champions League",
    competitionLogo: UefaChampionsLeague,
    homeTeam: "Manchester City",
    homeLogo: ManchesterCity,
    awayTeam: "Bayer 04 Leverkusen",
    awayLogo: BayerLeverkusen,
    homeScore: 0,
    awayScore: 2,
    status: "Live",
    time: "21:00",
    date: "25.11.2025",
    location: "Etihad Stadium",
  },
  liveTime: 39, // Taken from eventlog (current time - start time)
};

const playerTypes = ["Goalkeeper", "Defender", "Midfielder", "Forward"];

const miniNavbar = ["Overview", "Squad", "Matches", "Videos"];

const matchPageStates = ["Results", "Upcoming"];

const OverviewPage = () => {
  const [currentCompetitionStage, setCurrentCompetitionStage] = useState(
    latestCompetition.competitionStages.length - 1
  );
  return (
    <>
      {/* Left and Right Components */}
      <div className="w-full max-w-7xl flex flex-row px-10 pt-10 gap-5">
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

          {/* Latest Competition */}
          <div className="w-full h-fit flex flex-col gap-2">
            <div className="px-2">
              <h1 className="text-2xl font-bold">Latest Competition</h1>
            </div>
            <div className="w-full h-full flex flex-row bg-gray-700 rounded-2xl">
              {/* Competition Name */}
              <div className="w-[30%] flex flex-col items-center justify-center gap-4 p-4 border-r-2 border-gray-500">
                <Image
                  src={latestCompetition.competitionLogo}
                  alt="latest-competition-logo"
                  height={50}
                  className="object-contain"
                />
                <p className="text-lg font-medium">{latestCompetition.competitionName}</p>
              </div>

              {/* Competition Stage */}
              <div className="w-full flex flex-row justify-center items-center p-2">
                <div className="w-[10%]">
                  {currentCompetitionStage !== 0 ? (
                    <ChevronLeftCircle
                      onClick={() => setCurrentCompetitionStage(currentCompetitionStage - 1)}
                    />
                  ) : (
                    ""
                  )}
                </div>

                {latestCompetition.competitionStages[currentCompetitionStage].competitionStage ===
                "League Table" ? (
                  <LatestCompetitionLeagueTable
                    {...(latestCompetition.competitionStages[
                      currentCompetitionStage
                    ] as CompetitionStageLeagueTableProps)}
                    competitionLogo={latestCompetition.competitionLogo}
                    competitionName={latestCompetition.competitionName}
                  />
                ) : latestCompetition.competitionStages[currentCompetitionStage]
                    .competitionStage === "Knockout Rounds" ? (
                  <LatestCompetitionKnockoutRound
                    competitionLogo={latestCompetition.competitionLogo}
                    competitionStage={
                      latestCompetition.competitionStages[currentCompetitionStage].competitionStage
                    }
                    matchInfo={
                      latestCompetition.competitionStages[currentCompetitionStage]
                        .matchInfo as CompetitionStageKnockoutRoundMatchProps
                    }
                  />
                ) : (
                  ""
                )}

                <div className="w-[10%]">
                  {currentCompetitionStage !== latestCompetition.competitionStages.length - 1 ? (
                    <ChevronRightCircle
                      onClick={() => setCurrentCompetitionStage(currentCompetitionStage + 1)}
                    />
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Top Performers */}
          <div className="w-full h-fit flex flex-col gap-2">
            <div className="px-2">
              <h1 className="text-2xl font-bold">Top Performers</h1>
            </div>
            <div className="w-full h-full flex flex-row justify-center items-center bg-gray-700 rounded-2xl p-6">
              <div className="grid grid-cols-3 gap-10 w-full">
                {topPerformers.map((performer, index) => (
                  <div key={index} className="flex flex-col justify-center items-center gap-2">
                    <CircleUser size={60} />
                    <p className="text-2xl font-bold">
                      {performer.amount} {performer.metric}
                    </p>
                    <p className="text-lg font-medium">{performer.award}</p>
                    <div className="flex flex-col justify-center items-center">
                      <p className="text-md text-gray-200">{performer.name}</p>
                      <p className="text-sm text-gray-400">{performer.position}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Right Component 1/3 */}
        <div className="w-1/3 flex flex-col h-full gap-5">
          {/* Team Profile */}
          <div className="w-full flex flex-col gap-2">
            <div className="px-2">
              <h1 className="text-2xl font-bold">Profile</h1>
            </div>
            <div className="w-full h-full flex flex-col justify-center items-center bg-gray-700 rounded-2xl">
              {/* Country and City */}
              <div className="w-full flex flex-col gap-2 p-4 border-b border-gray-500">
                <div className="flex flex-col">
                  <div className="w-[20%]">
                    <p className="text-sm text-gray-400">Country:</p>
                  </div>
                  <p className="text-sm">{teamProfile.country}</p>
                </div>
                <div className="flex flex-col">
                  <div className="w-[20%]">
                    <p className="text-sm text-gray-400">City:</p>
                  </div>
                  <p className="text-sm">{teamProfile.city}</p>
                </div>
              </div>
              {/* Description */}
              <div className="w-full flex flex-col gap-2 p-4 border-b border-gray-500">
                <p className="text-sm text-gray-400">Description:</p>
                <p className="text-sm text-justify">{teamProfile.description}</p>
              </div>
              {/* Links */}
              <div className="w-full flex flex-col gap-2 p-4">
                {teamProfile.instagram ? (
                  <div className="flex flex-row gap-2 items-center">
                    <Image src={Instagram} alt="instagram" height={15} />
                    <Link href={teamProfile.instagram}>
                      <p className="text-sm text-gray-300 hover:underline">Instagram</p>
                    </Link>
                  </div>
                ) : (
                  ""
                )}
                {teamProfile.facebook ? (
                  <div className="flex flex-row gap-2 items-center">
                    <Image src={Facebook} alt="facebook" height={15} />
                    <Link href={teamProfile.facebook}>
                      <p className="text-sm text-gray-300 hover:underline">Facebook</p>
                    </Link>
                  </div>
                ) : (
                  ""
                )}
                {teamProfile.tiktok ? (
                  <div className="flex flex-row gap-2 items-center">
                    <Image src={Tiktok} alt="tiktok" height={15} />
                    <Link href={teamProfile.tiktok}>
                      <p className="text-sm text-gray-300 hover:underline">Tiktok</p>
                    </Link>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>

          {/* Player List */}
          <div className="w-full flex flex-col gap-2">
            <div className="px-2">
              <h1 className="text-2xl font-bold">Team</h1>
            </div>
            <div className="w-full h-[400px] flex flex-col p-4 gap-2 bg-gray-700 rounded-2xl overflow-auto">
              {players.map((player, index) => (
                <div key={index} className="w-full flex flex-row p-2 gap-2">
                  <CircleUser size={40} />
                  <div className="flex flex-col">
                    <p className="text-md">{player.name}</p>
                    <p className="text-sm text-gray-400">{player.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const SquadPage = () => {
  return (
    <div className="w-full max-w-7xl flex flex-col px-10 pt-10 gap-5">
      {playerTypes.map((type, index) => (
        <div key={index} className="flex flex-col gap-2">
          <div className="px-2">
            <h1 className="text-2xl font-bold">{type}</h1>
          </div>
          {players.map((player, index) =>
            player.position === type ? (
              <div key={index} className="w-full flex flex-col p-4 rounded-2xl bg-gray-700 gap-3">
                <div className="flex flex-row text-sm text-gray-400">
                  <div className="w-[40%]">
                    <p>Player</p>
                  </div>
                  <div className="w-[15%] flex justify-center">
                    <p>Position</p>
                  </div>
                  <div className="w-[15%] flex justify-center">
                    <p>Age</p>
                  </div>
                  <div className="w-[15%] flex justify-center">
                    <p>Nationality</p>
                  </div>
                  <div className="w-[15%] flex justify-center">
                    <p>Height</p>
                  </div>
                </div>
                <div className="flex flex-row text-sm">
                  <div className="w-[40%] flex flex-row gap-3 items-center">
                    <CircleUser size={40} />
                    <p>{player.name}</p>
                  </div>
                  <div className="w-[15%] flex justify-center items-center">
                    <p>{player.position}</p>
                  </div>
                  <div className="w-[15%] flex justify-center items-center">
                    <p>{player.age}</p>
                  </div>
                  <div className="w-[15%] flex justify-center items-center">
                    <p>{player.nationality}</p>
                  </div>
                  <div className="w-[15%] flex justify-center items-center">
                    <p>
                      {player.height} {player.metric}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )
          )}
        </div>
      ))}
    </div>
  );
};

const MatchesPage = () => {
  const [matchPageState, setMatchPageState] = useState("Results");
  return (
    <div className="w-full max-w-7xl flex flex-row px-10 pt-10 gap-5">
      {/* Left Component */}
      <div className="w-2/3 flex flex-col gap-5">
        <div className="flex flex-row gap-3">
          {matchPageStates.map((state, index) => (
            <div
              key={index}
              className={`py-2 px-4 border rounded-2xl border-gray-700 ${matchPageState === state ? "bg-gray-700" : "hover:bg-gray-700 transition-all duration-300"}`}
              onClick={() => setMatchPageState(state)}
            >
              <p className="text-sm">{state}</p>
            </div>
          ))}
        </div>
        {/* Matches */}
        <div className="grid grid-cols-2 gap-5">
          {matchPageState === "Results"
            ? results.map((result, index) => (
                <div key={index} className="w-full flex flex-col bg-gray-700 rounded-2xl">
                  {/* Date and Competition */}
                  <div className="flex flex-row justify-between items-center p-4 bg-gray-500 rounded-t-2xl">
                    <p className="text-xs">{result.date}</p>
                    <div className="flex flex-row gap-3 items-center">
                      <Image src={result.competitionLogo} alt="comp-logo" height={20} />
                      <p className="text-xs">{result.competitionName}</p>
                    </div>
                  </div>
                  {/* Full time and score */}
                  <div className="flex flex-row">
                    <div className="w-1/4 flex justify-center items-center border-r border-gray-500">
                      {result.status === "Finished" ? <p className="text-sm">FT</p> : ""}
                    </div>
                    <div className="w-full flex flex-col gap-2 p-4">
                      <div className="flex flex-row gap-3 items-center">
                        <div className="w-[5%]">
                          <p
                            className={`${result.homeScore > result.awayScore ? "font-bold" : "font-light"}`}
                          >
                            {result.homeScore}
                          </p>
                        </div>

                        <div className="w-[10%] flex justify-center">
                          <Image src={result.homeLogo} alt="home-team" height={20} />
                        </div>
                        <div className="flex flex-row gap-3">
                          <p className="text-sm">{result.homeTeam}</p>
                        </div>
                      </div>
                      <div className="flex flex-row gap-3 items-center">
                        <div className="w-[5%]">
                          <p
                            className={`${result.awayScore > result.homeScore ? "font-bold" : "font-light"}`}
                          >
                            {result.awayScore}
                          </p>
                        </div>
                        <div className="w-[10%] flex justify-center">
                          <Image src={result.awayLogo} alt="away-team" height={20} />
                        </div>
                        <div className="flex flex-row gap-3">
                          <p className="text-sm">{result.awayTeam}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : matchPageState === "Upcoming"
              ? upcoming.map((upcoming, index) => (
                  <div key={index} className="w-full flex flex-col bg-gray-700 rounded-2xl">
                    {/* Date and Competition */}
                    <div className="flex flex-row justify-between items-center p-4 bg-gray-500 rounded-t-2xl">
                      <p className="text-xs">{upcoming.date}</p>
                      <div className="flex flex-row gap-3 items-center">
                        <Image src={upcoming.competitionLogo} alt="comp-logo" height={20} />
                        <p className="text-xs">{upcoming.competitionName}</p>
                      </div>
                    </div>
                    {/* Full time and score */}
                    <div className="flex flex-row">
                      <div className="w-1/4 flex justify-center items-center border-r border-gray-500">
                        {upcoming.status === "Not Started" ? (
                          <p className="text-sm">{upcoming.time}</p>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="w-full flex flex-col gap-2 p-4">
                        <div className="flex flex-row gap-3 items-center">
                          <div className="w-[10%] flex justify-center">
                            <Image src={upcoming.homeLogo} alt="home-team" height={20} />
                          </div>
                          <div className="flex flex-row gap-3">
                            <p className="text-sm">{upcoming.homeTeam}</p>
                          </div>
                        </div>
                        <div className="flex flex-row gap-3 items-center">
                          <div className="w-[10%] flex justify-center">
                            <Image src={upcoming.awayLogo} alt="away-team" height={20} />
                          </div>
                          <div className="flex flex-row gap-3">
                            <p className="text-sm">{upcoming.awayTeam}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              : ""}
        </div>
      </div>
      {/* Right Component */}
      <div className="w-1/3 flex flex-col gap-5">
        <div className="px-4">
          <h1 className="text-2xl font-bold">Live</h1>
        </div>

        <div className="w-full flex flex-col bg-gray-700 rounded-2xl mt-1 border-2">
          {/* Date and Competition */}
          <div className="flex flex-row justify-between items-center p-4 bg-gray-500 rounded-t-2xl">
            <p className="text-xs">{live.matchInfo.date}</p>
            <div className="flex flex-row gap-3 items-center">
              <Image src={live.matchInfo.competitionLogo} alt="comp-logo" height={20} />
              <p className="text-xs">{live.matchInfo.competitionName}</p>
            </div>
          </div>
          {/* Full time and score */}
          <div className="flex flex-row">
            <div className="w-1/4 flex justify-center items-center border-r border-gray-500">
              {live.matchInfo.status === "Live" ? (
                <div className="flex flex-col items-center">
                  <span className="relative flex size-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex size-1.5 rounded-full bg-red-500"></span>
                  </span>
                  <div className="flex flex-row">
                    <p className="text-xs text-gray-400">Live</p>
                  </div>
                  <p className="text-sm text-gray-400">{live.liveTime}'</p>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="w-full flex flex-col gap-2 p-4">
              <div className="flex flex-row gap-3 items-center">
                <div className="w-[5%]">
                  <p
                    className={`${live.matchInfo.homeScore > live.matchInfo.awayScore ? "font-bold" : "font-light"}`}
                  >
                    {live.matchInfo.homeScore}
                  </p>
                </div>

                <div className="w-[10%] flex justify-center">
                  <Image src={live.matchInfo.homeLogo} alt="home-team" height={20} />
                </div>
                <div className="flex flex-row gap-3">
                  <p className="text-sm">{live.matchInfo.homeTeam}</p>
                </div>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <div className="w-[5%]">
                  <p
                    className={`${live.matchInfo.awayScore > live.matchInfo.homeScore ? "font-bold" : "font-light"}`}
                  >
                    {live.matchInfo.awayScore}
                  </p>
                </div>
                <div className="w-[10%] flex justify-center">
                  <Image src={live.matchInfo.awayLogo} alt="away-team" height={20} />
                </div>
                <div className="flex flex-row gap-3">
                  <p className="text-sm">{live.matchInfo.awayTeam}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TeamPage = () => {
  const pathname = usePathname();
  const id = pathname.slice(1).split("/")[1]; // e.g. "/team/205" -> "team/205" -> "205"
  const team = teamList.find((team) => team.id === id);

  // States
  const [currentSelection, setCurrentSelection] = useState("Videos");
  return (
    <div className="w-full flex flex-col items-center pt-5 mt-5">
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

      {currentSelection === "Overview" ? (
        <OverviewPage />
      ) : currentSelection === "Squad" ? (
        <SquadPage />
      ) : currentSelection === "Matches" ? (
        <MatchesPage />
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

export default TeamPage;
