import { ShieldHalf } from "lucide-react";
import React from "react";

const lastMatch = {
  homeTeam: "Manchester City",
  awayTeam: "Liverpool",
  homeScore: 1,
  awayScore: 3,
};

const teamForm = [
  {
    matchType: "SF",
    homeScore: 1,
    awayScore: 2,
  },
  {
    matchType: "QF",
    homeScore: 3,
    awayScore: 1,
  },
  {
    matchType: "RO16",
    homeScore: 3,
    awayScore: 1,
  },
  {
    matchType: "Train",
    homeScore: 3,
    awayScore: 1,
  },
];

const topPerfomers = [
  {
    title: "Top Scorer",
    name: "Erling Haaland",
    quantity: 16,
  },
  {
    title: "Top Assists",
    name: "Kevin De Bruyne",
    quantity: 20,
  },
  {
    title: "Most Clean Sheets",
    name: "Gianluigi Donnarumma",
    quantity: 5,
  },
];

const SearchProfileTeamTabOverview: React.FC = () => {
  return (
    <div className="space-y-4">
      {/* First row */}
      <div className="w-full flex flex-row space-x-4">
        {/* Last Match Container */}
        <div className="p-4 w-[50%] h-[200px] bg-gray-700 rounded-2xl">
          <h1 className="absolute text-md font-semibold text-white">Last Match</h1>
          <div className="flex justify-center items-center h-full flex-col">
            <div className="flex flex-row space-x-4 space-y-2">
              <div className="flex flex-row space-x-2">
                <p className="text-md font-semibold text-white">{lastMatch.homeTeam}</p>
                {<ShieldHalf />}
              </div>
              <p className="bg-gray-800 px-2 rounded-lg text-md font-semibold text-white">
                {lastMatch.homeScore} - {lastMatch.awayScore}
              </p>
              <div className="flex flex-row space-x-2">
                {<ShieldHalf />}
                <p className="text-md font-semibold text-white">{lastMatch.awayTeam}</p>
              </div>
            </div>
            <div className="flex flex-row space-x-4">
              <p className="text-sm text-gray-300">
                Competition Name{" "}
                <span className="text-2xl leading-none align-middle">&middot;</span> Date{" "}
                <span className="text-2xl leading-none align-middle">&middot;</span> Time
              </p>
            </div>
          </div>
        </div>
        {/* Team Form Container */}
        <div className="p-4 w-[50%] h-[200px] bg-gray-700 rounded-2xl">
          <h1 className="absolute text-md font-semibold text-white">Team Form</h1>
          {/* Team List */}
          <div className="flex flex-row justify-between items-center h-full px-2">
            {teamForm.map((match, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center space-y-2 rounded-2xl overflow-hidden"
              >
                <p className="text-xs font-medium text-white">{match.matchType}</p>
                <ShieldHalf size={48} />
                <div
                  className={`relative w-full flex justify-center items-center ${match.homeScore > match.awayScore ? "bg-green-600" : match.awayScore > match.homeScore ? "bg-red-600" : "bg-gray-600"}`}
                >
                  <p>
                    {match.homeScore} - {match.awayScore}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Second row */}
      <div className="w-full flex flex-row space-x-4">
        {/* Top Performers Container */}
        <div className="p-4 w-full h-[300px] bg-gray-700 rounded-2xl">
          <h1 className="absolute text-md font-semibold text-white">Top Performers</h1>
          {/* Performers List */}
          <div className="flex flex-row justify-center items-center h-full px-2 space-x-2">
            {topPerfomers.map((player, index) => (
              <div
                key={index}
                className="w-full rounded-2xl h-full flex justify-center items-center flex-col space-y-2"
              >
                <h1 className="text-md font-semibold text-white">{player.title}</h1>
                <img
                  src="/path-to-profile.jpg"
                  alt="Profile"
                  className="w-16 h-16 rounded-full object-cover border border-gray-300"
                />
                <p className="text-sm text-gray-300">{player.name}</p>
                <p className="text-2xl font-bold">{player.quantity}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchProfileTeamTabOverview;
