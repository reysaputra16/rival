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

// Football player photos
import ErlingHaaland from "@/public/football_players/erling-haaland.webp";
import GianluigiDonnarumma from "@/public/football_players/gianluigi-donnarumma.webp";
import PhilFoden from "@/public/football_players/phil-foden.webp";
import JeremyDoku from "@/public/football_players/jeremy-doku.webp";
import BernardoSilva from "@/public/football_players/bernardo-silva.webp";

// Social Media Logos
import Instagram from "@/public/social_media_logos/instagram.svg";
import Facebook from "@/public/social_media_logos/facebook.svg";
import Tiktok from "@/public/social_media_logos/tiktok.svg";
import Link from "next/link";
import MatchCard from "@/components/MatchCard";
import RecentMatchesCard from "@/components/RecentMatchesCard";
import CompetitionCard from "@/components/CompetitionCard";
import TeamProfileCard from "@/components/TeamProfileCard";

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

const lastMatch: MatchCardProps = {
  competitionName: "UEFA Champions League",
  competitionLogo: UefaChampionsLeague,
  homeTeam: "Manchester City",
  homeLogo: ManchesterCity,
  awayTeam: "Bayer 04 Leverkusen",
  awayLogo: BayerLeverkusen,
  date: "25.11.2025",
  time: "21:00",
  homeScore: 0,
  awayScore: 2,
  status: "Finished",
  liveTime: 0,
};

const nextMatch: MatchCardProps = {
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
  date: "09.12.2025",
  liveTime: 0,
};

const recentMatches: RecentMatchProps[] = [
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
    img: ErlingHaaland,
    position: "Forward",
    award: "Most Goals",
    amount: 25,
    metric: "",
  },
  {
    name: "Phil Foden",
    img: PhilFoden,
    position: "Midfielder",
    award: "Most Assists",
    amount: 12,
    metric: "",
  },
  {
    name: "Gianluigi Donnarumma",
    img: GianluigiDonnarumma,
    position: "Goalkeeper",
    award: "Most Clean Sheets",
    amount: 9,
    metric: "",
  },
  {
    name: "Jeremy Doku",
    img: JeremyDoku,
    position: "Midfielder",
    award: "Most Dribbles Completed",
    amount: 87,
    metric: "",
  },
  {
    name: "Bernardo Silva",
    img: BernardoSilva,
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
  instagram: "https://www.instagram.com/mancity/",
  facebook: "https://www.facebook.com/mancity/",
  tiktok: "https://www.tiktok.com/@mancity",
};

const players = [
  {
    name: "Gianluigi Donnarumma",
    img: GianluigiDonnarumma,
    position: "Goalkeeper",
    age: 25,
    nationality: "England",
    height: 185,
    metric: "cm",
  },
  {
    name: "Ruben Dias",
    img: JeremyDoku,
    position: "Defender",
    age: 25,
    nationality: "England",
    height: 185,
    metric: "cm",
  },
  {
    name: "John Stones",
    img: BernardoSilva,
    position: "Defender",
    age: 25,
    nationality: "England",
    height: 185,
    metric: "cm",
  },
  {
    name: "Rico Lewis",
    img: PhilFoden,
    position: "Defender",
    age: 25,
    nationality: "England",
    height: 185,
    metric: "cm",
  },
  {
    name: "Josko Gvardiol",
    img: ErlingHaaland,
    position: "Defender",
    age: 25,
    nationality: "England",
    height: 185,
    metric: "cm",
  },
  {
    name: "Nico O'Reilly",
    img: ErlingHaaland,
    position: "Defender",
    age: 25,
    nationality: "England",
    height: 185,
    metric: "cm",
  },
  {
    name: "Matheus Nunes",
    img: ErlingHaaland,
    position: "Defender",
    age: 25,
    nationality: "England",
    height: 185,
    metric: "cm",
  },
  {
    name: "Phil Foden",
    img: PhilFoden,
    position: "Midfielder",
    age: 25,
    nationality: "England",
    height: 185,
    metric: "cm",
  },
  {
    name: "Bernardo Silva",
    img: BernardoSilva,
    position: "Midfielder",
    age: 25,
    nationality: "England",
    height: 185,
    metric: "cm",
  },
  {
    name: "Jeremy Doku",
    img: JeremyDoku,
    position: "Midfielder",
    age: 25,
    nationality: "England",
    height: 185,
    metric: "cm",
  },
  {
    name: "Savinho",
    img: ErlingHaaland,
    position: "Midfielder",
    age: 25,
    nationality: "England",
    height: 185,
    metric: "cm",
  },
  {
    name: "Erling Haaland",
    img: ErlingHaaland,
    position: "Forward",
    age: 25,
    nationality: "England",
    height: 185,
    metric: "cm",
  },
  {
    name: "Omar Marmoush",
    img: ErlingHaaland,
    position: "Forward",
    age: 25,
    nationality: "England",
    height: 185,
    metric: "cm",
  },
];

const results: MatchCardProps[] = [
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
    liveTime: 0,
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
    liveTime: 0,
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
    liveTime: 0,
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
    liveTime: 0,
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
    liveTime: 0,
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
    liveTime: 0,
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
    liveTime: 0,
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
    liveTime: 0,
  },
];

const upcoming: MatchCardProps[] = [
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
    liveTime: 0,
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
    liveTime: 0,
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
    liveTime: 0,
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
    liveTime: 0,
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
    liveTime: 0,
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
    liveTime: 0,
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
    liveTime: 0,
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
    liveTime: 0,
  },
];

const live = {
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
  liveTime: 39,
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
            <div className="w-1/2 flex flex-col gap-5">
              <div className="px-2">
                <h1 className="text-xl font-bold">Last Match</h1>
              </div>
              <MatchCard {...lastMatch} />
            </div>

            {/* Next Match */}
            <div className="w-1/2 flex flex-col gap-5">
              <div className="px-2">
                <h1 className="text-xl font-bold">Next Match</h1>
              </div>
              <MatchCard {...nextMatch} />
            </div>
          </div>

          {/* Recent Matches */}
          <div className="w-full flex flex-col gap-5">
            <div className="px-2">
              <h1 className="text-xl font-bold">Recent Matches</h1>
            </div>
            <RecentMatchesCard matches={recentMatches} />
          </div>

          {/* Latest Competition */}
          <div className="w-full h-fit flex flex-col gap-5">
            <div className="px-2">
              <h1 className="text-xl font-bold">Competitions</h1>
            </div>
            <CompetitionCard />
          </div>
        </div>
        {/* Right Component 1/3 */}
        <div className="w-1/3 flex flex-col h-full gap-5">
          {/* Team Profile */}
          <div className="w-full flex flex-col gap-5">
            <div className="px-2">
              <h1 className="text-xl font-bold">Profile</h1>
            </div>
            <TeamProfileCard />
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
        <div key={index} className="flex flex-col gap-5">
          <div className="px-2">
            <h1 className="text-xl font-bold">{type}</h1>
          </div>
          {players.map((player, index) =>
            player.position === type ? (
              <div
                key={index}
                className="w-full flex flex-col p-4 rounded-2xl shadow-sm dark:shadow-border-main-dark dark:bg-secondary-dark bg-secondary gap-3"
              >
                <div className="flex flex-row text-sm text-text-main dark:text-text-main-dark">
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
                    <div className="border-2 rounded-lg border-border-main dark:border-border-main-dark mr-2">
                      <Image src={player.img} alt="player" height={60} className="rounded-lg" />
                    </div>

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
      {/* Full Component */}
      <div className="w-full flex flex-col gap-5">
        <div className="flex flex-row gap-5">
          {matchPageStates.map((state, index) => (
            <div
              key={index}
              className={`py-2 px-4 border rounded-2xl border-border-main dark:border-border-main-dark ${matchPageState === state ? "dark:bg-white dark:text-black bg-black text-white" : "hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"}`}
              onClick={() => setMatchPageState(state)}
            >
              <p className="text-sm">{state}</p>
            </div>
          ))}
        </div>
        {/* Matches */}
        <div className="grid grid-cols-3 gap-5">
          {matchPageState === "Results"
            ? results.map((result, index) => <MatchCard key={index} {...result} />)
            : matchPageState === "Upcoming"
              ? upcoming.map((upcoming, index) => <MatchCard key={index} {...upcoming} />)
              : ""}
        </div>
      </div>
      {/* Right Component
      <div className="w-1/3 flex flex-col gap-5">
        <div className="px-4">
          <h1 className="text-2xl font-bold">Live</h1>
        </div>

        <MatchCard {...live} /> 
      </div> */}
    </div>
  );
};

const TeamPage = () => {
  const pathname = usePathname();
  const id = pathname.slice(1).split("/")[1]; // e.g. "/team/205" -> "team/205" -> "205"
  const team = teamList.find((team) => team.id === id);

  // States
  const [currentSelection, setCurrentSelection] = useState("Overview");
  return (
    <div className="w-full flex flex-col items-center pt-5 mt-5 dark:text-text-main-dark dark:border-border-main-dark">
      {/* Header and Banner */}
      <div className="relative w-full max-w-7xl h-[250px]">
        {/* Upper Background */}
        <div className="absolute w-full h-[50%] dark:bg-secondary-dark bg-secondary rounded-t-2xl" />

        {/* Team Logo */}
        <div className="absolute w-full h-full flex items-center pl-15 gap-5">
          <Image
            src={ManchesterCity}
            alt="team-photo"
            height={150}
            className="rounded-full object-contain p-2 dark:bg-secondary-dark bg-secondary"
          />
        </div>
        {/* Team Name */}
        <div className="absolute w-full h-[50%] flex items-end pl-58 pb-1">
          <p className="text-3xl font-normal">Manchester City</p>
        </div>
        <div className="absolute w-full h-[50%] flex items-end pl-58 pt-40">
          <p className="text-md font-normal">Football</p>
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
