import { Trophy, CheckCircle, Users } from "lucide-react";

const SearchList: React.FC<SearchListProps> = ({
  category,
  searchResults,
  setSelectedId,
  setShowPopup,
}) => {
  return (
    <div className="space-y-2">
      {/* Competition Category */}
      {category === "competition"
        ? (searchResults as Competition[]).map((item) => (
            <div
              key={item._id}
              className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition duration-150 bg-gray-700 hover:bg-gray-600 border border-gray-700`}
              onClick={() => {
                setShowPopup(true);
                setSelectedId(item._id);
              }}
            >
              <div className="flex items-center space-x-3">
                <Trophy size={20} className="text-cyan-400" />
                <div>
                  <p className="font-semibold text-gray-200">{item.competitionName}</p>
                  <p className="text-xs text-gray-400">{item.sports.join(", ")}</p>
                </div>
              </div>
              <p className="text-xs font-medium px-2 py-0.5 rounded-full bg-emerald-800 text-emerald-200">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </p>
            </div>
          ))
        : ""}

      {/* Match Category */}
      {category === "match"
        ? (searchResults as Match[]).map((item) => (
            <div
              key={item._id}
              className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition duration-150 bg-gray-700 hover:bg-gray-600 border border-gray-700`}
              onClick={() => {
                setShowPopup(true);
                setSelectedId(item._id);
              }}
            >
              <div className="flex items-center space-x-3">
                <CheckCircle size={20} className="text-yellow-400" />
                <div>
                  <p className="font-semibold text-gray-200">{item.matchName}</p>
                  <p className="text-xs text-gray-400">{item.sport}</p>
                </div>
              </div>
              <p className="text-xs font-medium px-2 py-0.5 rounded-full bg-emerald-800 text-emerald-200">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </p>
            </div>
          ))
        : ""}

      {/* Team Category */}
      {category === "team"
        ? (searchResults as Team[]).map((item) => (
            <div
              key={item._id}
              className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition duration-150 bg-gray-700 hover:bg-gray-600 border border-gray-700`}
              onClick={() => {
                setShowPopup(true);
                setSelectedId(item._id);
              }}
            >
              <div className="flex items-center space-x-3">
                <Users size={20} className="text-emerald-400" />
                <div>
                  <p className="font-semibold text-gray-200">{item.teamName}</p>
                  <p className="text-xs text-gray-400">{item.sports.join(", ")}</p>
                </div>
              </div>
              <p className="text-xs font-medium px-2 py-0.5 rounded-full bg-emerald-800 text-emerald-200">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </p>
            </div>
          ))
        : ""}
    </div>
  );
};

export default SearchList;
