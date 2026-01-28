import React from "react";
import Image from "next/image";

import PremierLeague from "@/public/football_logos/premier-league.svg";
import ManchesterCity from "@/public/football_logos/manchester-city.svg";
import Arsenal from "@/public/football_logos/arsenal.svg";
import { MoveRight } from "lucide-react";

const MatchCard = (matchInfo: MatchCardProps) => {
  return (
    <div className="w-full flex flex-col rounded-lg shadow-sm dark:shadow-border-main-dark dark:bg-secondary-dark bg-secondary text-sm">
      {/* Competition Name and Logo */}
      {matchInfo.competitionName && matchInfo.competitionLogo ? (
        <div className="flex flex-row gap-2 border-b dark:border-border-main-dark border-border-main p-4">
          <Image src={matchInfo.competitionLogo} alt="comp-logo" height={20} />
          <div className="flex items-center">
            <p className="text-xs font-extralight">{matchInfo.competitionName}</p>
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="w-full h-full flex flex-row">
        {/* Home and Away Team */}
        <div className="w-[70%] flex flex-col gap-3 px-2 py-6">
          {/* Home Team */}
          <div className="w-full flex flex-row gap-5">
            {/* Home Team and Logo */}
            <div className="w-full flex flex-row gap-2">
              <div className="w-[20%] flex justify-center items-center">
                <Image src={matchInfo.homeLogo} alt="comp-logo" height={30} />
              </div>

              <div className="w-full overflow-hidden flex items-center">
                <p className="text-sm">{matchInfo.homeTeam}</p>
              </div>
            </div>
            {/* Home Score */}
            {matchInfo.status !== "Not Started" &&
            matchInfo.awayScore !== undefined &&
            matchInfo.homeScore !== undefined ? (
              <div className="flex items-center w-[10%]">
                <p className="text-lg font-medium">{matchInfo.homeScore}</p>
              </div>
            ) : (
              ""
            )}
          </div>
          {/* Away Team */}
          <div className="flex flex-row gap-5">
            {/* Away Team and Logo */}
            <div className="w-full flex flex-row gap-2">
              <div className="w-[20%] flex justify-center items-center">
                <Image src={matchInfo.awayLogo} alt="comp-logo" height={30} />
              </div>
              <div className="w-full overflow-hidden flex items-center">
                <p className="text-sm">{matchInfo.awayTeam}</p>
              </div>
            </div>
            {/* Away Score */}
            {matchInfo.status !== "Not Started" &&
            matchInfo.awayScore !== undefined &&
            matchInfo.homeScore !== undefined ? (
              <div className="flex items-center w-[10%]">
                <p className="text-lg font-medium">{matchInfo.awayScore}</p>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        {/* Date and Time */}
        <div className="w-[30%] flex flex-col justify-center items-center border-l dark:border-zinc-800 border-zinc-100 gap-1.5">
          {/* If status is Live, then Live writing
                If status is "Not Started" or "Finished", then show date writing
            */}
          {matchInfo.status === "Live" ? (
            <>
              <p className="dark:text-zinc-400 text-zinc-500">Live</p>
              <p className="dark:text-zinc-400 text-zinc-500">{matchInfo.liveTime}'</p>
            </>
          ) : (
            <>
              <p className="font-bold">{matchInfo.date}</p>
              <p className="text-md font-extralight">
                {matchInfo.status === "Not Started"
                  ? matchInfo.time
                  : matchInfo.status === "Finished"
                    ? "FT"
                    : ""}
              </p>
            </>
          )}
        </div>
      </div>
      {/* Match Info */}
      <div className="flex flex-row items-center gap-2 p-2 dark:text-zinc-500 text-zinc-400 hover:text-text-main hover:dark:text-text-main-dark cursor-pointer transition-all duration-300">
        <MoveRight width={15} />
        <p className="text-xs">Match Details</p>
      </div>
    </div>
  );
};

export default MatchCard;
