import React from "react";
import Image from "next/image";
import { Calendar, MapPin } from "lucide-react";

const LatestCompetitionKnockoutRound = (info: CompetitionStageKnockoutRoundProps) => {
  return (
    <div className="w-full flex flex-col justify-center items-center px-4 py-2 gap-7">
      {/* Competition Title */}
      <div className="flex flex-row gap-2">
        <p className="text-lg font-medium">
          {info.competitionStage} - {info.matchInfo.type}
        </p>
      </div>

      <div className="w-full flex flex-col gap-7 px-4 py-2">
        {/* Logo and Score/Time */}
        <div className="w-full flex flex-row justify-center items-center gap-5">
          <div className="w-2/5 flex justify-center">
            <Image
              src={info.matchInfo.homeLogo}
              alt="home-team"
              height={60}
              className="object-contain"
            />
          </div>
          <div className="w-1/5 flex justify-center">
            <div className="dark:bg-zinc-900 bg-zinc-200 p-2 rounded-2xl">
              <p className="text-xl">
                {info.matchInfo.status === "Not Started"
                  ? info.matchInfo.time
                  : `${info.matchInfo.homeScore} - ${info.matchInfo.awayScore}`}
              </p>
            </div>
          </div>
          <div className="w-2/5 flex justify-center">
            <Image
              src={info.matchInfo.awayLogo}
              alt="away-team"
              height={60}
              className="object-contain"
            />
          </div>
        </div>

        {/* Team names */}
        <div className="w-full flex flex-row justify-center items-center gap-5">
          <div className="w-2/5">
            <p className="text-center text-xs">{info.matchInfo.homeTeam}</p>
          </div>
          <div className="w-1/5" />
          <div className="w-2/5">
            <p className="text-center text-xs">{info.matchInfo.awayTeam}</p>
          </div>
        </div>

        {/* Date and Location */}
        <div className="w-full flex flex-row justify-center items-center gap-5">
          <div className="flex flex-row items-center gap-2">
            <Calendar size={15} className="text-gray-500" />
            <p className="text-xs">{info.matchInfo.date}</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <MapPin size={15} className="text-gray-500" />
            <p className="text-xs">{info.matchInfo.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestCompetitionKnockoutRound;
