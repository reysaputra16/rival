import React from "react";
import Image from "next/image";

const LatestCompetitionLeagueTableTeamEntry = (
  entry: LatestCompetitionLeagueTableTeamEntryProps
) => {
  return (
    <div
      className={`w-full flex flex-row justify-center items-center p-2 ${!entry.grayedOut ? "rounded-2xl bg-gray-800 border-2" : ""}`}
    >
      <div className="w-[5%] flex justify-center items-center">
        <p className={`text-sm ${entry.grayedOut ? "text-gray-400" : ""}`}>{entry.team.position}</p>
      </div>
      <div className="w-[55%] flex items-center px-2">
        <div className="flex flex-row gap-2">
          <Image src={entry.team.img} alt="team-logo" height={20} className="object-contain" />
          <p className={`text-sm ${entry.grayedOut ? "text-gray-400" : ""}`}>{entry.team.name}</p>
        </div>
      </div>
      <div className="w-[35%] flex justify-center items-center gap-5 px-4">
        <div className="w-1/5 flex justify-center items-center">
          <p className={`text-sm ${entry.grayedOut ? "text-gray-400" : ""}`}>
            {entry.team.gamesPlayed}
          </p>
        </div>

        <div className="w-1/5 flex justify-center items-center">
          <p className={`text-sm ${entry.grayedOut ? "text-gray-400" : ""}`}>{entry.team.wins}</p>
        </div>
        <div className="w-1/5 flex justify-center items-center">
          <p className={`text-sm ${entry.grayedOut ? "text-gray-400" : ""}`}>{entry.team.draws}</p>
        </div>
        <div className="w-1/5 flex justify-center items-center">
          <p className={`text-sm ${entry.grayedOut ? "text-gray-400" : ""}`}>{entry.team.losses}</p>
        </div>
        <div className="w-1/5 flex justify-center items-center">
          <p className={`text-sm ${entry.grayedOut ? "text-gray-400" : ""}`}>
            {entry.team.goalDiff >= 0 ? "+" : ""}
            {entry.team.goalDiff}
          </p>
        </div>
      </div>
      <div className="w-[5%] flex justify-center items-center">
        <p className={`text-sm ${entry.grayedOut ? "text-gray-400" : ""}`}>{entry.team.points}</p>
      </div>
    </div>
  );
};

const LatestCompetitionLeagueTable = (competitionLeague: CompetitionStageLeagueTableProps) => {
  return (
    <div className="w-full flex flex-col justify-center items-center px-4 py-2 gap-7">
      {/* Competition Title */}
      <div className="flex flex-row gap-2">
        <h1 className="text-lg font-medium">{competitionLeague.competitionStage}</h1>
      </div>

      {/* League Table Header */}
      <div className="w-full flex flex-col">
        {/* Header */}
        <div className="w-full flex flex-row justify-center items-center bg-gray-500 rounded-t-2xl p-2">
          <div className="w-[60%] flex justify-center items-center">
            <p className="text-sm">Team</p>
          </div>
          <div className="w-[35%] flex justify-center items-center gap-5 px-4">
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
        <div className="w-full flex flex-col justify-center items-center gap-2">
          {competitionLeague.teamPosition.mostTop ? (
            ""
          ) : competitionLeague.teamPosition.mostBottom ? (
            ""
          ) : (
            <>
              {/* Upper Team */}
              <LatestCompetitionLeagueTableTeamEntry
                team={competitionLeague.upperTeamPosition}
                grayedOut={true}
              />
              {/* Current Team */}
              <LatestCompetitionLeagueTableTeamEntry
                team={competitionLeague.teamPosition}
                grayedOut={false}
              />
              {/* Lower Team */}
              <LatestCompetitionLeagueTableTeamEntry
                team={competitionLeague.lowerTeamPosition}
                grayedOut={true}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LatestCompetitionLeagueTable;
