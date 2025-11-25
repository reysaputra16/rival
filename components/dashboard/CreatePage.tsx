import { ClipboardList, Plus, Trophy, Users } from "lucide-react";
import React, { useState } from "react";
import CreationCard from "./CreateCreationCard";
import CreateCompetitionPage from "./CreateFormCompetition";
import CreateMatchPage from "./CreateFormMatch";
import CreateTeamPage from "./CreateFormTeam";

const CreateSelectionPage: React.FC<{
  subPage: string;
  setSubPage: (newSubPage: string) => void;
}> = ({ subPage, setSubPage }) => {
  return (
    <div className="h-full p-8 pt-20 flex flex-col items-center justify-center">
      {/* Main title and description */}
      <h1 className="text-6xl font-extrabold text-white mb-4 flex items-center">Create your own</h1>
      <p className="text-xl text-gray-400 mb-12">Select the appropriate option for your sport</p>

      {/* Three centered cards */}
      <div className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-8 max-w-5xl w-full justify-center">
        <CreationCard
          title="Competition / League"
          description="Create a multi-team tournament or league structure to track scheduled matches and standings"
          icon={<Trophy />}
          onClick={() => setSubPage("CompetitionCreator")}
        />
        <CreationCard
          title="Standalone Match"
          description="Log a single game (practice, scrimmage, friendly) to get a quick, one-off analysis for your team."
          icon={<ClipboardList />}
          onClick={() => setSubPage("MatchCreator")}
        />
        <CreationCard
          title="Team Profile"
          description="Register a new team/club profile and its roster to begin tracking individual player stats and progress."
          icon={<Users />}
          onClick={() => setSubPage("TeamCreator")}
        />
      </div>
    </div>
  );
};

const CreatePage: React.FC = () => {
  const [subPage, setSubPage] = useState("Main");

  return (
    <>
      {subPage === "Main" ? (
        <CreateSelectionPage subPage={subPage} setSubPage={setSubPage} />
      ) : subPage === "CompetitionCreator" ? (
        <CreateCompetitionPage subPage={subPage} setSubPage={setSubPage} />
      ) : subPage === "MatchCreator" ? (
        <CreateMatchPage subPage={subPage} setSubPage={setSubPage} />
      ) : subPage === "TeamCreator" ? (
        <CreateTeamPage subPage={subPage} setSubPage={setSubPage} />
      ) : (
        ""
      )}
    </>
  );
};

export default CreatePage;
