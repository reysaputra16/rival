import React from "react";

const mockTeamData = [
  {
    name: "Gianluigi Donnarumma",
    position: "Goalkeeper",
  },
  {
    name: "John Stones",
    position: "Defender",
  },
  {
    name: "Kevin De Bruyne",
    position: "Midfielder",
  },
  {
    name: "Bernardo Silva",
    position: "Midfielder",
  },
  {
    name: "Phil Foden",
    position: "Midfielder",
  },
  {
    name: "Erling Haaland",
    position: "Forward",
  },
  {
    name: "Omar Marmoush",
    position: "Forward",
  },
];

const SearchProfileTeamTabSquad = () => {
  return (
    <div className="w-full h-[515px] rounded-2xl overflow-auto space-y-2 flex flex-col">
      {mockTeamData.map((player, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-3 rounded-lg transition duration-150 bg-gray-700 hover:bg-gray-600 border border-gray-700"
        >
          <div className="flex items-center space-x-3">
            <img
              src="/path-to-profile.jpg"
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover border border-gray-300"
            />
            <div>
              <p className="font-semibold text-gray-200">{player.name}</p>
              <p className="text-xs text-gray-400">{player.position}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchProfileTeamTabSquad;
