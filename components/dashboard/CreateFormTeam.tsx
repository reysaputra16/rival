import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import StyledCheckbox from "../StyledCheckbox";

const CreateTeamPage: React.FC<{ subPage: string; setSubPage: (newSubPage: string) => void }> = ({
  subPage,
  setSubPage,
}) => {
  const [teamName, setTeamName] = useState("");
  const [sports, setSports] = useState<string[]>([]);
  const [description, setDescription] = useState("");
  const [joinedDate, setJoinedDate] = useState("");
  const [owners, setOwners] = useState<string[]>([]);
  const [admins, setAdmins] = useState<string[]>([]);
  const [members, setMembers] = useState<string[]>([]);
  const [isPublic, setIsPublic] = useState(false);
  const [submitForm, setSubmitForm] = useState(false);
  const { data: session, status } = useSession();
  const sportsSelection = ["Football", "Basketball", "Volleyball"];

  // Set the creator and joined date from current date as the owner
  useEffect(() => {
    if (status === "authenticated" && session?.user?.id) {
      setOwners([session.user.id]);
    }
    const currentDate = new Date();
    setJoinedDate(currentDate.toJSON());
  }, [status, session]);

  // Create Team Logic
  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitForm(true);

    try {
      const response = await fetch("/api/dashboard/create-team", {
        method: "POST",
        body: JSON.stringify({
          teamName: teamName,
          sports: sports,
          desc: description,
          joinedDate: joinedDate,
          owners: owners,
          admins: admins,
          members: members,
          isPublic: isPublic,
        }),
      });

      if (response.ok) {
        setSubPage("Main");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitForm(false);
    }
  };

  // Privacy Selector logic
  const handlePrivacyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;

    if (selectedValue === "Public") {
      setIsPublic(true);
    } else {
      setIsPublic(false);
    }
  };

  // Sports selector logic
  const handleSportsCheckboxChange = (sport: string) => {
    if (sports.includes(sport)) {
      setSports(sports.filter((item) => item !== sport));
    } else {
      setSports([...sports, sport]);
    }
  };

  return (
    <div className="p-8 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-white mb-4 flex items-center">Create a Team</h1>

      {/* Create Form Container */}
      <div className="w-full max-w-4xl bg-gray-700 p-8 rounded-xl shadow-2xl shadow-cyan-500/50 border-t-4 border-cyan-500">
        <h1 className="text-3xl font-extrabold text-white mb-2 text-center">
          <span className="text-cyan-400">Create</span>
        </h1>

        {/* Create Form Start */}
        <form onSubmit={handleCreate} className="space-y-6">
          {/* Team Name */}
          <div>
            <label htmlFor="teamName" className="block text-sm font-medium text-gray-300 mb-2">
              Team Name
            </label>
            <input
              type="text"
              id="teamName"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              required
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:ring-cyan-500 focus:border-cyan-500 transition duration-150"
              placeholder="e.g. Man City"
            />
          </div>

          {/* Sport Checkboxes */}
          <div>
            <label htmlFor="sports" className="block text-sm font-medium text-gray-300 mb-2">
              Sports <span className="font-bold">(Choose at least one)</span>
            </label>
            {sportsSelection.map((sport) => (
              <StyledCheckbox
                id={sport}
                label={sport}
                isChecked={sports.includes(sport)}
                setChecked={() => handleSportsCheckboxChange(sport)}
              />
            ))}
            <br />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">
              Description
            </label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:ring-cyan-500 focus:border-cyan-500 transition duration-150"
              placeholder="Tell us about your team..."
            />
          </div>

          {/* Public / Private */}
          <div>
            <label htmlFor="privacy" className="block text-sm font-medium text-gray-300 mb-2">
              Privacy Level
            </label>
            <select
              id="privacy"
              value={isPublic ? "Public" : "Private"}
              onChange={handlePrivacyChange}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:ring-cyan-500 focus:border-cyan-500 transition duration-150"
            >
              <option value="Private">Private</option>
              <option value="Public">Public</option>
            </select>
          </div>

          {/* Submit Button and Back Button */}
          <div className="flex flex-row space-x-5">
            {/* Back Button */}
            <button
              className="w-[30%] py-2 px-4 rounded-lg font-semibold shadow-md transition duration-200 bg-red-500 hover:bg-red-600 text-white shadow-red-500/40 hover:shadow-red-400/50 hover:cursor-pointer"
              onClick={() => {
                setSubPage("Main");
              }}
            >
              Back
            </button>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={submitForm}
              className={`w-[70%] py-2 px-4 rounded-lg font-semibold shadow-md transition duration-200 ${
                submitForm
                  ? "bg-cyan-600 cursor-not-allowed opacity-75"
                  : "bg-cyan-500 hover:bg-cyan-600 text-white shadow-cyan-500/40 hover:shadow-cyan-400/50 hover:cursor-pointer "
              }`}
            >
              {submitForm ? (
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
                  Creating...
                </div>
              ) : (
                "Create Competition / League"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTeamPage;
