"use client";
import { Bell, LogOut, User } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useState } from "react";

// Props for DashboardNavbar
interface DashboardNavbarProps {
  currentPage: string;
  setCurrentPage: (pageName: string) => void;
}

const DashboardNavbar: React.FC<DashboardNavbarProps> = ({ currentPage, setCurrentPage }) => {
  const { data: session } = useSession();
  const [openProfileMenu, setOpenProfileMenu] = useState(false);

  if (!session) {
    redirect("/login");
  }

  console.log(currentPage);
  return (
    <nav className="w-full h-fit flex flex-row justify-between items-center m-5">
      {/* Logo */}
      <p>STARTUP_LOGO</p>

      {/* Dashboard Selection */}
      <div className="flex flex-row space-x-10">
        <button
          className={`p-2 rounded-lg hover:bg-gray-700 hover:cursor-pointer ${
            currentPage === "create" ? "bg-gray-700" : ""
          }`}
          onClick={() => setCurrentPage("create")}
        >
          Create
        </button>
        <button
          className={`p-2 rounded-lg hover:bg-gray-700 hover:cursor-pointer ${
            currentPage === "overview" ? "bg-gray-700" : ""
          }`}
          onClick={() => setCurrentPage("overview")}
        >
          Overview
        </button>
        <button
          className={`p-2 rounded-lg hover:bg-gray-700 hover:cursor-pointer ${
            currentPage === "stats" ? "bg-gray-700" : ""
          }`}
          onClick={() => setCurrentPage("stats")}
        >
          Stats
        </button>
        <button
          className={`p-2 rounded-lg hover:bg-gray-700 hover:cursor-pointer ${
            currentPage === "search" ? "bg-gray-700" : ""
          }`}
          onClick={() => setCurrentPage("search")}
        >
          Search
        </button>
      </div>

      {/* Notification and Profile */}
      <div className="flex flex-row space-x-5">
        {/* Notification */}
        <div className="flex justify-center items-center">
          <Bell />
        </div>

        {/* Profile */}
        {/* Profile Button / Icon */}
        <button
          className="flex flex-row space-x-2 rounded-lg p-2 hover:cursor-pointer hover:bg-gray-700 transition-all duration-100"
          onClick={() => setOpenProfileMenu(!openProfileMenu)}
        >
          <User />
          <p>{session ? session?.user?.name : "UNKNOWN"}</p>
        </button>

        {/* Dropdown Menu Profile */}
        {openProfileMenu && (
          <div
            className="absolute right-0 w-48 bg-gray-700 rounded-lg shadow-xl overflow-hidden animate-in fade-in origin-top-right border border-gray-600"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu-button"
          >
            <div className="py-1">
              <button
                className="flex items-center w-full px-4 py-2 text-sm text-red-400 hover:bg-gray-600 hover:text-red-300 hover:cursor-pointer transition duration-150"
                onClick={() => {
                  signOut();
                }}
              >
                <LogOut size={16} className="mr-3" />
                Sign Out
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default DashboardNavbar;
