import { Search } from "lucide-react";
import { useState } from "react";
import SearchList from "./SearchSearchList";
import SearchProfileTeam from "./SearchProfileTeam";

const SearchPage: React.FC = () => {
  const [category, setCategory] = useState("match");
  const [searchText, setSearchText] = useState("");
  const [submitSearch, setSubmitSearch] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [finalSearchResults, setFinalSearchResults] = useState<Team[] | Match[] | Competition[]>(
    []
  );
  const [showPopup, setShowPopup] = useState(false);
  const [selectedId, setSelectedId] = useState("");

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitSearch(true);

    try {
      const response = await fetch(`/api/dashboard/find-${category}?searchText=${searchText}`, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setFinalSearchResults(data);
    } catch (error) {
      console.log(error);
    }

    setSubmitSearch(false);
    setHasSearched(true);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
    setFinalSearchResults([]);
    setSelectedId("");
    setShowPopup(false);
  };
  return (
    <div className={`p-8 flex flex-col items-center ${showPopup ? "overflow-hidden" : ""}`}>
      {/* Main title and description */}
      <h1 className="text-4xl font-extrabold text-white mb-4 flex items-center">
        <Search size={36} className="text-cyan-400 mr-3" /> Search
      </h1>

      {/* Search Container */}
      <div className="w-full max-w-4xl p-8 space-y-4">
        <form onSubmit={handleSearch} className="flex flex-row space-x-4">
          {/* Category Selection */}
          <select name="category" id="category" onChange={handleCategoryChange} className="w-[25%]">
            <option value="match">Matches</option>
            <option value="team">Teams</option>
            <option value="competition">Competitions</option>
          </select>
          {/* Search Bar */}
          <input
            type="text"
            id="searchText"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:ring-cyan-500 focus:border-cyan-500 transition duration-150"
            placeholder="Search Here"
          />
          {/* Submit Button */}
          <button
            disabled={submitSearch}
            className={`w-[20%] py-2 px-4 rounded-lg font-semibold shadow-md transition duration-200 ${submitSearch ? "bg-cyan-600 cursor-not-allowed opacity-75" : "bg-cyan-500 hover:bg-cyan-600 text-white shadow-cyan-500/40 hover:shadow-cyan-400/50 hover:cursor-pointer"}`}
          >
            {submitSearch ? (
              <div className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Searching...
              </div>
            ) : (
              "Search"
            )}
          </button>
        </form>

        {/* Search List */}
        <SearchList
          category={category}
          searchResults={finalSearchResults}
          setSelectedId={setSelectedId}
          setShowPopup={setShowPopup}
        />

        {/* Popup Modal */}
        {showPopup && selectedId !== "" && category === "team" ? (
          <SearchProfileTeam
            category="team"
            id={selectedId}
            setSelectedId={setSelectedId}
            setShowPopup={setShowPopup}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default SearchPage;
