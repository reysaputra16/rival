import { Dot, ShieldHalf } from "lucide-react";
import { useState } from "react";
import SearchProfileTeamTabOverview from "./SearchProfileTeamTabOverview";
import SearchProfileTeamTabSquad from "./SearchProfileTeamTabSquad";
import SearchProfileTeamMatch from "./SearchProfileTeamMatch";

const SearchProfileTeam: React.FC<SearchProfileProps> = ({
  category,
  id,
  setSelectedId,
  setShowPopup,
}) => {
  const [currentTab, setCurrentTab] = useState("overview");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      {/* Container Profile */}
      <div className="relative flex flex-col w-full max-w-5xl bg-gray-900 rounded-2xl shadow-lg overflow-hidden">
        {/* Header Section */}
        <div className="relative flex items-center space-x-4 p-4 bg-gray-700 border-b-2 border-cyan-500">
          {/* Profile Picture (Currently no profile pic)*/}
          <img
            src="/path-to-profile.jpg"
            alt="Profile"
            className="w-16 h-16 rounded-full object-cover border border-gray-300"
          />
          {/* Name */}
          <div>
            <h2 className="text-lg font-semibold text-white">Test Team</h2>
            <p className="text-sm text-gray-400">@testteam</p>
          </div>

          {/* Close Button */}
          <button
            onClick={() => setShowPopup(false)}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 hover:scale-110 transition hover:cursor-pointer"
          >
            x
          </button>
        </div>

        {/* Body Section */}
        <div className="p-6 text-white space-y-4">
          {/* Navbar Overview */}
          <div className="flex justify-left space-x-6">
            <button
              className={`hover:underline hover:underline-offset-4 ${currentTab === "overview" ? "underline underline-offset-4" : "hover:cursor-pointer"}`}
              onClick={() => setCurrentTab("overview")}
            >
              Overview
            </button>

            <button
              className={`hover:underline hover:underline-offset-4 ${currentTab === "squad" ? "underline underline-offset-4" : "hover:cursor-pointer"}`}
              onClick={() => setCurrentTab("squad")}
            >
              Squad
            </button>
            <button
              className={`hover:underline hover:underline-offset-4 ${currentTab === "matches" ? "underline underline-offset-4" : "hover:cursor-pointer"}`}
              onClick={() => setCurrentTab("matches")}
            >
              Matches
            </button>
            <button
              className={`hover:underline hover:underline-offset-4 ${currentTab === "videos" ? "underline underline-offset-4" : "hover:cursor-pointer"}`}
              onClick={() => setCurrentTab("videos")}
            >
              Videos
            </button>
          </div>
          {currentTab === "overview" ? (
            <SearchProfileTeamTabOverview />
          ) : currentTab === "squad" ? (
            <SearchProfileTeamTabSquad />
          ) : currentTab === "matches" ? (
            <SearchProfileTeamMatch />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchProfileTeam;
