"use client";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Icons
import {
  Frown,
  VectorSquare,
  Trophy,
  GitGraph,
  ChevronLeftCircle,
  ChevronRightCircle,
} from "lucide-react";

// Football Logos
import PremierLeague from "@/public/football_logos/premier-league.svg";
import ManchesterCity from "@/public/football_logos/manchester-city.svg";
import Arsenal from "@/public/football_logos/arsenal.svg";
import Bournemouth from "@/public/football_logos/bournemouth.svg";
import Liverpool from "@/public/football_logos/liverpool.svg";
import LeedsUnited from "@/public/football_logos/leeds-united.svg";
import NewcastleUnited from "@/public/football_logos/newcastle-united.svg";
import RealMadrid from "@/public/football_logos/real-madrid.svg";

// Social Media Logos
import Instagram from "@/public/social_media_logos/instagram.svg";
import Facebook from "@/public/social_media_logos/facebook.svg";
import Tiktok from "@/public/social_media_logos/tiktok.svg";
import { group } from "console";

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

const competitionProfile = {
  id: "1",
  name: "Premier League",
  img: PremierLeague,
  description: "The best league in the world",
  country: "England",
  sports: ["Football"],
  instagram: "https://www.instagram.com/premierleague/",
  facebook: "https://www.facebook.com/premierleague/",
  tiktok: "https://www.tiktok.com/@premierleague",
};

const competitionStagesStatus = [
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
      status: "Live",
      time: "15:00",
      date: "28.11.2025",
      location: "Emirates Stadium",
    },
    liveTime: 5,
  },
  {
    matchInfo: {
      homeTeam: "Leeds United",
      homeLogo: LeedsUnited,
      awayTeam: "Newcastle United",
      awayLogo: NewcastleUnited,
      homeScore: 0,
      awayScore: 0,
      status: "Live",
      time: "18:00",
      date: "01.12.2025",
      location: "Elland Road",
    },
    liveTime: 86,
  },
];

const groupStage = {
  competitionStage: "Group Stage",
  competitionInfo: [
    {
      group: "A",
      teams: [
        {
          team: "Team AA",
          img: ManchesterCity,
          gamesPlayed: 1,
          wins: 1,
          draws: 0,
          losses: 0,
          goalDiff: 3,
          points: 3,
        },
        {
          team: "Team AB",
          img: ManchesterCity,
          gamesPlayed: 1,
          wins: 1,
          draws: 0,
          losses: 0,
          goalDiff: 2,
          points: 3,
        },
        {
          team: "Team AC",
          img: ManchesterCity,
          gamesPlayed: 1,
          wins: 0,
          draws: 0,
          losses: 1,
          goalDiff: -3,
          points: 0,
        },
        {
          team: "Team AD",
          img: ManchesterCity,
          gamesPlayed: 1,
          wins: 0,
          draws: 0,
          losses: 1,
          goalDiff: -2,
          points: 0,
        },
      ],
    },
    {
      group: "B",
      teams: [
        {
          team: "Team BA",
          img: ManchesterCity,
          gamesPlayed: 1,
          wins: 1,
          draws: 0,
          losses: 0,
          goalDiff: 3,
          points: 3,
        },
        {
          team: "Team BB",
          img: ManchesterCity,
          gamesPlayed: 1,
          wins: 1,
          draws: 0,
          losses: 0,
          goalDiff: 2,
          points: 3,
        },
        {
          team: "Team BC",
          img: ManchesterCity,
          gamesPlayed: 1,
          wins: 0,
          draws: 0,
          losses: 1,
          goalDiff: -3,
          points: 0,
        },
        {
          team: "Team BD",
          img: ManchesterCity,
          gamesPlayed: 1,
          wins: 0,
          draws: 0,
          losses: 1,
          goalDiff: -2,
          points: 0,
        },
      ],
    },
    {
      group: "C",
      teams: [
        {
          team: "Team CA",
          img: ManchesterCity,
          gamesPlayed: 1,
          wins: 1,
          draws: 0,
          losses: 0,
          goalDiff: 3,
          points: 3,
        },
        {
          team: "Team CB",
          img: ManchesterCity,
          gamesPlayed: 1,
          wins: 1,
          draws: 0,
          losses: 0,
          goalDiff: 2,
          points: 3,
        },
        {
          team: "Team CC",
          img: ManchesterCity,
          gamesPlayed: 1,
          wins: 0,
          draws: 0,
          losses: 1,
          goalDiff: -3,
          points: 0,
        },
        {
          team: "Team CD",
          img: ManchesterCity,
          gamesPlayed: 1,
          wins: 0,
          draws: 0,
          losses: 1,
          goalDiff: -2,
          points: 0,
        },
      ],
    },
    {
      group: "D",
      teams: [
        {
          team: "Team DA",
          img: ManchesterCity,
          gamesPlayed: 1,
          wins: 1,
          draws: 0,
          losses: 0,
          goalDiff: 3,
          points: 3,
        },
        {
          team: "Team DB",
          img: ManchesterCity,
          gamesPlayed: 1,
          wins: 1,
          draws: 0,
          losses: 0,
          goalDiff: 2,
          points: 3,
        },
        {
          team: "Team DC",
          img: ManchesterCity,
          gamesPlayed: 1,
          wins: 0,
          draws: 0,
          losses: 1,
          goalDiff: -3,
          points: 0,
        },
        {
          team: "Team DD",
          img: ManchesterCity,
          gamesPlayed: 1,
          wins: 0,
          draws: 0,
          losses: 1,
          goalDiff: -2,
          points: 0,
        },
      ],
    },
  ],
};

const knockoutRounds = {
  competitionStage: "Knockout Rounds",
  competitionInfo: [
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
      competitionId: 100,
      competitionStage: "QF",
      liveTime: 39,
    },
    {
      matchInfo: {
        homeTeam: "Manchester City",
        homeLogo: ManchesterCity,
        awayTeam: "Bournemouth",
        awayLogo: Bournemouth,
        homeScore: 0,
        awayScore: 0,
        status: "Not Started",
        time: "15:00",
        date: "25.11.2025",
        location: "Etihad Stadium",
      },
      competitionId: 100,
      competitionStage: "QF",
      liveTime: 39,
    },
    {
      matchInfo: {
        homeTeam: "Manchester City",
        homeLogo: ManchesterCity,
        awayTeam: "Bournemouth",
        awayLogo: Bournemouth,
        homeScore: 0,
        awayScore: 0,
        status: "Not Started",
        time: "15:00",
        date: "25.11.2025",
        location: "Etihad Stadium",
      },
      competitionId: 100,
      competitionStage: "QF",
      liveTime: 39,
    },
    {
      matchInfo: {
        homeTeam: "Manchester City",
        homeLogo: ManchesterCity,
        awayTeam: "Bournemouth",
        awayLogo: Bournemouth,
        homeScore: 0,
        awayScore: 0,
        status: "Not Started",
        time: "15:00",
        date: "25.11.2025",
        location: "Etihad Stadium",
      },
      competitionId: 100,
      competitionStage: "QF",
      liveTime: 39,
    },
    {
      matchInfo: {
        homeTeam: "Manchester City",
        homeLogo: ManchesterCity,
        awayTeam: "Arsenal",
        awayLogo: Arsenal,
        homeScore: 0,
        awayScore: 0,
        status: "Not Started",
        time: "15:00",
        date: "25.11.2025",
        location: "Etihad Stadium",
      },
      competitionId: 100,
      competitionStage: "SF",
      liveTime: 39,
    },
    {
      matchInfo: {
        homeTeam: "Manchester City",
        homeLogo: ManchesterCity,
        awayTeam: "Arsenal",
        awayLogo: Arsenal,
        homeScore: 0,
        awayScore: 0,
        status: "Not Started",
        time: "15:00",
        date: "25.11.2025",
        location: "Etihad Stadium",
      },
      competitionId: 100,
      competitionStage: "SF",
      liveTime: 39,
    },
    {
      matchInfo: {
        homeTeam: "Manchester City",
        homeLogo: ManchesterCity,
        awayTeam: "Real Madrid",
        awayLogo: RealMadrid,
        homeScore: 0,
        awayScore: 0,
        status: "Not Started",
        time: "15:00",
        date: "25.11.2025",
        location: "Etihad Stadium",
      },
      competitionId: 100,
      competitionStage: "F",
      liveTime: 39,
    },
  ],
};

const knockoutRoundsStages = ["QF", "SF", "F"];

const teams = [
  {
    name: "Manchester City",
    img: ManchesterCity,
  },
  {
    name: "Bournemouth",
    img: Bournemouth,
  },
  {
    name: "Liverpool",
    img: Liverpool,
  },
  {
    name: "Real Madrid",
    img: RealMadrid,
  },
  {
    name: "Arsenal",
    img: Arsenal,
  },
  {
    name: "Leeds United",
    img: LeedsUnited,
  },
  {
    name: "Newcastle United",
    img: NewcastleUnited,
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
              <h1 className="text-2xl font-bold">Competition Status</h1>
            </div>
            <div className="w-full flex flex-row justify-between items-center gap-2 bg-gray-700 p-4 rounded-2xl">
              {competitionStagesStatus.map((stage, index) => (
                <React.Fragment key={index}>
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
                  {index !== competitionStagesStatus.length - 1 ? (
                    <div
                      className={`w-full h-0.5 mx-2 ${stage.isPlayed ? "bg-cyan-500" : "bg-gray-400"}`}
                    />
                  ) : (
                    ""
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Matches */}
          <div className="w-full flex flex-col gap-2">
            <div className="px-2">
              <h1 className="text-2xl font-bold">Live Matches</h1>
            </div>
            <div className="w-full bg-gray-700 p-4 rounded-2xl">
              {matches.length === 0 ? (
                <p className="text-sm text-center">No live matches available</p>
              ) : (
                <div className="w-full grid grid-cols-2 gap-5">
                  {matches.map((match, index) => (
                    <div
                      key={index}
                      className="w-full h-full flex flex-row bg-gray-600 rounded-2xl"
                    >
                      <div className="w-1/4 h-full flex justify-center items-center border-r border-gray-500 py-4 px-10">
                        {match.matchInfo.status === "Live" ? (
                          <div className="flex flex-col justify-center items-center">
                            <span className="relative flex size-1.5">
                              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                              <span className="relative inline-flex size-1.5 rounded-full bg-red-500"></span>
                            </span>
                            <div className="flex flex-row">
                              <p className="text-xs text-gray-400">Live</p>
                            </div>
                            <p className="text-xs text-gray-400">{match.liveTime}'</p>
                          </div>
                        ) : match.matchInfo.status === "Finished" ? (
                          <div className="flex flex-col justify-center items-center">
                            <div className="flex flex-col justify-center items-center">
                              <p>{match.matchInfo.date}</p>
                              <p>FT</p>
                            </div>
                          </div>
                        ) : match.matchInfo.status === "Not Started" ? (
                          <div className="flex flex-col justify-center items-center">
                            <p className="text-xs text-gray-400">{match.matchInfo.date}</p>
                            <p className="text-xs text-gray-400">{match.matchInfo.time}</p>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="w-full flex flex-col gap-6 p-4">
                        <div className="flex flex-row gap-3 items-center">
                          {match.matchInfo.status === "Live" ? (
                            <div className="w-[5%]">
                              <p
                                className={`${match.matchInfo.homeScore > match.matchInfo.awayScore ? "font-bold" : "font-light"}`}
                              >
                                {match.matchInfo.homeScore}
                              </p>
                            </div>
                          ) : (
                            ""
                          )}

                          <div className="w-[10%] flex justify-center">
                            <Image src={match.matchInfo.homeLogo} alt="home-team" height={30} />
                          </div>
                          <p className="text-sm">{match.matchInfo.homeTeam}</p>
                        </div>

                        <div className="flex flex-row gap-3 items-center">
                          {match.matchInfo.status === "Live" ? (
                            <div className="w-[5%]">
                              <p
                                className={`${match.matchInfo.awayScore > match.matchInfo.homeScore ? "font-bold" : "font-light"}`}
                              >
                                {match.matchInfo.awayScore}
                              </p>
                            </div>
                          ) : (
                            ""
                          )}

                          <div className="w-[10%] flex justify-center">
                            <Image src={match.matchInfo.awayLogo} alt="home-team" height={30} />
                          </div>
                          <p className="text-sm">{match.matchInfo.awayTeam}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Right Component 1/3 */}
        <div className="w-1/3 flex flex-col h-full gap-5">
          {/* Competition Profile */}
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
                  <p className="text-sm">{competitionProfile.country}</p>
                </div>
              </div>
              {/* Description */}
              <div className="w-full flex flex-col gap-2 p-4 border-b border-gray-500">
                <p className="text-sm text-gray-400">Description:</p>
                <p className="text-sm text-justify">{competitionProfile.description}</p>
              </div>
              {/* Links */}
              <div className="w-full flex flex-col gap-2 p-4">
                {competitionProfile.instagram ? (
                  <div className="flex flex-row gap-2 items-center">
                    <Image src={Instagram} alt="instagram" height={15} />
                    <Link href={competitionProfile.instagram} target="_blank">
                      <p className="text-sm text-gray-300 hover:underline">Instagram</p>
                    </Link>
                  </div>
                ) : (
                  ""
                )}
                {competitionProfile.facebook ? (
                  <div className="flex flex-row gap-2 items-center">
                    <Image src={Facebook} alt="facebook" height={15} />
                    <Link href={competitionProfile.facebook} target="_blank">
                      <p className="text-sm text-gray-300 hover:underline">Facebook</p>
                    </Link>
                  </div>
                ) : (
                  ""
                )}
                {competitionProfile.tiktok ? (
                  <div className="flex flex-row gap-2 items-center">
                    <Image src={Tiktok} alt="tiktok" height={15} />
                    <Link href={competitionProfile.tiktok} target="_blank">
                      <p className="text-sm text-gray-300 hover:underline">Tiktok</p>
                    </Link>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const StagesPage = () => {
  const [knockoutRoundStage, setKnockoutRoundStage] = useState(0);
  return (
    <div className="w-full max-w-7xl flex flex-col px-10 pt-10 gap-5">
      {/* Knockout Rounds */}
      {knockoutRounds.competitionInfo.length > 0 ? (
        <div className="w-full flex flex-col gap-2">
          <div className="px-4">
            <h1 className="text-2xl font-bold">Knockout Rounds</h1>
          </div>
          <div className="w-full flex flex-col gap-2 bg-gray-700 rounded-2xl h-[400px] overflow-auto">
            {/* Competition Stage Selector */}
            <div className="w-full flex flex-row sticky top-0 bg-cyan-700 p-4">
              <div className="w-[5%]">
                {knockoutRoundStage !== 0 ? (
                  <ChevronLeftCircle
                    onClick={() => setKnockoutRoundStage(knockoutRoundStage - 1)}
                  />
                ) : (
                  ""
                )}
              </div>

              <div className="w-full flex justify-center items-center">
                <p>{knockoutRoundsStages[knockoutRoundStage]}</p>
              </div>
              <div className="w-[5%]">
                {knockoutRoundStage !== knockoutRoundsStages.length - 1 ? (
                  <ChevronRightCircle
                    onClick={() => setKnockoutRoundStage(knockoutRoundStage + 1)}
                  />
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5 p-4">
              {knockoutRounds.competitionInfo
                .filter(
                  (match) => match.competitionStage === knockoutRoundsStages[knockoutRoundStage]
                )
                .map((match, index) => (
                  <div key={index} className="w-full flex flex-col bg-gray-500 rounded-2xl">
                    {/* Date and Stage */}
                    <div className="w-full flex flex-row items-center justify-between p-4">
                      <p className="text-sm">{match.matchInfo.date}</p>
                      <p className="text-sm">{match.competitionStage}</p>
                    </div>
                    {/* Time and Score and Teams */}
                    <div className="w-full h-full flex flex-row bg-gray-600 rounded-b-2xl p-4">
                      <div className="w-1/4 flex justify-center items-center border-r border-gray-500">
                        {match.matchInfo.status === "Finished" ? (
                          "FT"
                        ) : match.matchInfo.status === "Not Started" ? (
                          <p className="text-sm">{match.matchInfo.time}</p>
                        ) : match.matchInfo.status === "Live" ? (
                          <div className="flex flex-col items-center justify-center">
                            <span className="relative flex size-1.5">
                              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                              <span className="relative inline-flex size-1.5 rounded-full bg-red-500"></span>
                            </span>
                            <div className="flex flex-row">
                              <p className="text-xs text-gray-400">Live</p>
                            </div>
                            <p className="text-xs text-gray-400">{match.liveTime}'</p>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="w-full flex flex-col gap-4 p-4">
                        <div className="flex flex-row gap-3 items-center">
                          {match.matchInfo.status !== "Not Started" ? (
                            <div className="w-[5%]">
                              <p
                                className={`${match.matchInfo.homeScore > match.matchInfo.awayScore ? "font-bold" : "font-light"}`}
                              >
                                {match.matchInfo.homeScore}
                              </p>
                            </div>
                          ) : (
                            ""
                          )}
                          <div className="w-[10%] flex justify-center">
                            <Image src={match.matchInfo.homeLogo} alt="home-team" height={30} />
                          </div>
                          <p className="text-sm">{match.matchInfo.homeTeam}</p>
                        </div>
                        <div className="flex flex-row gap-3 items-center">
                          {match.matchInfo.status !== "Not Started" ? (
                            <div className="w-[5%]">
                              <p
                                className={`${match.matchInfo.awayScore > match.matchInfo.homeScore ? "font-bold" : "font-light"}`}
                              >
                                {match.matchInfo.awayScore}
                              </p>
                            </div>
                          ) : (
                            ""
                          )}
                          <div className="w-[10%] flex justify-center">
                            <Image src={match.matchInfo.awayLogo} alt="away-team" height={30} />
                          </div>
                          <p className="text-sm">{match.matchInfo.awayTeam}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {/* Group Stage */}
      <div className="w-full flex flex-col gap-2">
        <div className="px-4">
          <h1 className="text-2xl font-bold">Group Stage</h1>
        </div>
        <div className="w-full flex p-4 bg-gray-700 rounded-2xl">
          <div className="w-full grid grid-cols-2 gap-5">
            {groupStage.competitionInfo.map((group, index) => (
              <div key={index} className="w-full flex flex-col rounded-2xl bg-gray-700">
                <div className="p-4 w-full rounded-t-2xl bg-gray-500">
                  <p>Group {group.group}</p>
                </div>
                <div className="w-full">
                  <div className="w-full bg-gray-600 flex flex-row px-4 py-2">
                    <div className="w-[60%] flex justify-center items-center">
                      <p className="text-sm">Team</p>
                    </div>
                    <div className="w-[35%] flex flex-row">
                      <div className="w-1/5 flex justify-center items-center">
                        <p className="text-sm">GP</p>
                      </div>
                      <div className="w-1/5 flex justify-center items-center">
                        <p className="text-sm">W</p>
                      </div>
                      <div className="w-1/5 flex justify-center items-center">
                        <p className="text-sm">D</p>
                      </div>
                      <div className="w-1/5 flex justify-center items-center">
                        <p className="text-sm">L</p>
                      </div>
                      <div className="w-1/5 flex justify-center items-center">
                        <p className="text-sm">+/-</p>
                      </div>
                    </div>
                    <div className="w-[5%] flex justify-center items-center">
                      <p className="text-sm">PTS</p>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col">
                  {group.teams.map((team, index) => (
                    <div key={index} className="w-full flex flex-row px-4 py-2">
                      <div className="w-[60%] flex items-center gap-4">
                        <p className="text-sm text-gray-300">{index + 1}</p>
                        <div className="w-full flex flex-row items-center gap-2">
                          <Image src={team.img} alt="team-logo" height={30} />
                          <p className="text-sm">{team.team}</p>
                        </div>
                      </div>
                      <div className="w-[35%] flex flex-row">
                        <div className="w-1/5 flex justify-center items-center">
                          <p className="text-sm">{team.gamesPlayed}</p>
                        </div>
                        <div className="w-1/5 flex justify-center items-center">
                          <p className="text-sm">{team.wins}</p>
                        </div>
                        <div className="w-1/5 flex justify-center items-center">
                          <p className="text-sm">{team.draws}</p>
                        </div>
                        <div className="w-1/5 flex justify-center items-center">
                          <p className="text-sm">{team.losses}</p>
                        </div>
                        <div className="w-1/5 flex justify-center items-center">
                          <p className="text-sm">{team.goalDiff}</p>
                        </div>
                      </div>
                      <div className="w-[5%] flex justify-center items-center">
                        <p className="text-sm">{team.points}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const TeamsPage = () => {
  return (
    <div className="w-full max-w-7xl flex flex-col px-10 pt-10 gap-2">
      {teams.map((team, index) => (
        <div key={index} className="w-full flex flex-row rounded-2xl bg-gray-700 p-4 gap-4">
          <div className="w-[5%] flex justify-center items-center">
            <Image src={team.img} alt="team-logo" height={60} />
          </div>

          <div className="flex items-center">
            <p className="text-md font-medium">{team.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const CompetitionPage = () => {
  const pathname = usePathname();
  const id = pathname.slice(1).split("/")[1]; // e.g. "/competition/205" -> "competition/205" -> "205"
  const competition = competitionList.find((comp) => comp.id === id);

  // States
  const [currentSelection, setCurrentSelection] = useState("Teams");

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
      ) : currentSelection === "Stages" ? (
        <StagesPage />
      ) : currentSelection === "Teams" ? (
        <TeamsPage />
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
