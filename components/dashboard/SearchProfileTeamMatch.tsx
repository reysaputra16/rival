import React, { useState } from "react";

interface Fixture {
  homeTeam: string;
  awayTeam: string;
  date: Date;
  time: string;
}

const results = [
  {
    homeTeam: "Manchester City",
    awayTeam: "Bournemouth",
    homeScore: 3,
    awayScore: 1,
    date: new Date("2025-11-02"),
  },
  {
    homeTeam: "Manchester City",
    awayTeam: "Liverpool",
    homeScore: 3,
    awayScore: 0,
    date: new Date("2025-11-09"),
  },
];

const fixtures = [
  {
    homeTeam: "Newcastle United",
    awayTeam: "Manchester City",
    date: new Date("2025-11-22"),
    time: "17:30",
  },
  {
    homeTeam: "Manchester City",
    awayTeam: "Leeds United",
    date: new Date("2025-11-29"),
    time: "15:00",
  },
  {
    homeTeam: "Fulham",
    awayTeam: "Manchester City",
    date: new Date("2025-12-02"),
    time: "19:30",
  },
  {
    homeTeam: "Fulham",
    awayTeam: "Manchester City",
    date: new Date("2025-12-02"),
    time: "19:30",
  },
  {
    homeTeam: "Fulham",
    awayTeam: "Manchester City",
    date: new Date("2025-12-02"),
    time: "19:30",
  },
  {
    homeTeam: "Fulham",
    awayTeam: "Manchester City",
    date: new Date("2025-12-02"),
    time: "19:30",
  },
  {
    homeTeam: "Fulham",
    awayTeam: "Manchester City",
    date: new Date("2025-12-02"),
    time: "19:30",
  },
  {
    homeTeam: "Fulham",
    awayTeam: "Manchester City",
    date: new Date("2025-12-02"),
    time: "19:30",
  },
  {
    homeTeam: "Fulham",
    awayTeam: "Manchester City",
    date: new Date("2025-12-02"),
    time: "19:30",
  },
];

const buttons = ["Fixtures", "Results"];

const SearchProfileTeamMatch = () => {
  const [matchType, setMatchType] = useState("Fixtures");
  return (
    <div className="flex flex-col w-full h-[515px] space-y-4">
      {/* Fixtures or Results Button */}
      <div className="flex flex-row space-x-4 h-fit">
        {buttons.map((button, index) => (
          <button
            key={index}
            className={`flex px-4 py-0.5 rounded-2xl border ${matchType === button ? "bg-gray-700 border-gray-700" : "border-gray-600 hover:cursor-pointer hover:bg-gray-600 transition duration-150"}`}
            onClick={() => setMatchType(button)}
          >
            {button}
          </button>
        ))}
      </div>
      {/* Match List (Fixtures / Results) */}
      <div className="w-full h-full rounded-2xl overflow-auto space-y-2 flex flex-col">
        {matchType === "Fixtures"
          ? fixtures.map((match, index) => (
              <div
                key={index}
                className="w-full flex flex-row p-4 rounded-lg transition duration-150 bg-gray-700 hover:bg-gray-600 border border-gray-700"
              >
                <div className="w-[25%]">
                  <p>
                    {match.date.getDate() +
                      " " +
                      match.date.toLocaleString("default", { month: "short" })}
                  </p>
                </div>
                <div className="flex flex-row w-[50%] items-center justify-start space-x-4">
                  {/* Home Team Name */}
                  <div className="w-full flex justify-end">
                    <p className="text-md font-semibold text-white text-right">{match.homeTeam}</p>
                  </div>
                  {/* Home Logo */}
                  <div className="w-fit">
                    <img
                      src="/path-to-team.jpg"
                      alt="Team"
                      className="w-6 h-6 rounded-full object-cover border border-gray-300"
                    />
                  </div>

                  {/* Time */}
                  <div className="px-2 rounded-lg bg-gray-600">
                    <p className="text-lg font-extrabold text-cyan-400 w-1/6 text-center">
                      {match.time}
                    </p>
                  </div>

                  {/* Away Logo */}
                  <div className="w-fit">
                    <img
                      src="/path-to-team.jpg"
                      alt="Team"
                      className="w-6 h-6 rounded-full object-cover border border-gray-300"
                    />
                  </div>

                  {/* Away Team Name */}
                  <div className="w-full flex justify-start">
                    <p className="text-md font-semibold text-white text-left">{match.awayTeam}</p>
                  </div>
                </div>
              </div>
            ))
          : matchType === "Results"
            ? results.map((match, index) => (
                <div
                  key={index}
                  className="w-full flex flex-row p-4 rounded-lg transition duration-150 bg-gray-700 hover:bg-gray-600 border border-gray-700"
                >
                  <div className="w-[25%]">
                    <p>
                      {match.date.getDate() +
                        " " +
                        match.date.toLocaleString("default", { month: "short" })}
                    </p>
                  </div>
                  <div className="flex flex-row w-[50%] items-center justify-start space-x-4">
                    {/* Home Team Name */}
                    <div className="w-full flex justify-end">
                      <p className="text-md font-semibold text-white text-right">
                        {match.homeTeam}
                      </p>
                    </div>
                    {/* Home Logo */}
                    <div className="w-fit">
                      <img
                        src="/path-to-team.jpg"
                        alt="Team"
                        className="w-6 h-6 rounded-full object-cover border border-gray-300"
                      />
                    </div>

                    {/* Score */}
                    <div className="w-1/3 px-2 rounded-lg bg-gray-600">
                      <p className="text-lg font-extrabold text-cyan-400 text-center">
                        {match.homeScore} - {match.awayScore}
                      </p>
                    </div>

                    {/* Away Logo */}
                    <div className="w-fit">
                      <img
                        src="/path-to-team.jpg"
                        alt="Team"
                        className="w-6 h-6 rounded-full object-cover border border-gray-300"
                      />
                    </div>

                    {/* Away Team Name */}
                    <div className="w-full flex justify-start">
                      <p className="text-md font-semibold text-white text-left">{match.awayTeam}</p>
                    </div>
                  </div>
                </div>
              ))
            : ""}
      </div>
    </div>
  );
};

export default SearchProfileTeamMatch;
