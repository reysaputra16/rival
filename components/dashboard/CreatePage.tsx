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
    <div className="p-8 flex flex-col items-center">
      {/* Main title and description */}
      <h1 className="text-4xl font-extrabold text-white mb-4 flex items-center">
        <Plus size={36} className="text-cyan-400 mr-3" /> What would you like to create?
      </h1>
      <p className="text-xl text-gray-400 mb-12">Select the foundation for your new analysis.</p>

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
