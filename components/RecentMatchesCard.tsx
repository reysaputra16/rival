import React from "react";
import Image from "next/image";

const RecentMatchesCard = (recentMatches: RecentMatchWrapper) => {
  return (
    <div className="w-full flex flex-row gap-5 p-6 rounded-lg shadow-sm dark:shadow-border-main-dark dark:bg-secondary-dark bg-secondary justify-between items-center">
      {recentMatches.matches.map((match, index) => (
        <div
          key={index}
          className={`relative flex flex-row gap-2 justify-center items-center border py-4 px-2 w-full rounded-2xl ${match.outcome === "W" ? "border-green-500" : match.outcome === "D" ? "border-gray-500" : match.outcome === "L" ? "border-red-500" : ""}`}
        >
          <Image src={match.homeLogo} alt="home-logo" height={25} className="object-contain" />
          <p>
            {match.homeScore} - {match.awayScore}
          </p>
          <Image src={match.awayLogo} alt="away-logo" height={25} className="object-contain" />
          <div className="absolute top-12 px-4 dark:bg-secondary-dark bg-secondary">
            <p
              className={`${match.outcome === "W" ? "text-green-500" : match.outcome === "D" ? "text-gray-500" : match.outcome === "L" ? "text-red-500" : ""} font-medium text-md`}
            >
              {match.outcome}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentMatchesCard;
