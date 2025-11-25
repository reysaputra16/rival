"use client";
import {
  Bell,
  CircleUserRound,
  LogOut,
  Search,
  Settings,
  SquareChartGantt,
  SquarePen,
  Target,
  User,
} from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useState } from "react";
import blankProfilePic from "@/public/blank-profile-pic.jpg";

// Props for DashboardNavbar
interface DashboardNavbarProps {
  currentPage: string;
  setCurrentPage: (pageName: string) => void;
}

const navbarSelection = [
  {
    name: "Create",
    icon: <SquarePen />,
  },
  {
    name: "Overview",
    icon: <SquareChartGantt />,
  },
  {
    name: "Stats",
    icon: <Target />,
  },
  {
    name: "Search",
    icon: <Search />,
  },
];

const DashboardNavbar: React.FC<DashboardNavbarProps> = ({ currentPage, setCurrentPage }) => {
  const { data: session } = useSession();
  const [openProfileMenu, setOpenProfileMenu] = useState(false);

  if (!session) {
    redirect("/login");
  }

  console.log(currentPage);
  return (
    <nav className="w-full h-fit flex flex-row justify-center items-center py-4 px-6">
      {/* Logo */}
      <div className="w-1/4">
        <p>RIVAL_LOGO</p>
      </div>

      {/* Dashboard Selection */}
      <div className="w-full flex justify-center">
        <div className="w-fit flex flex-row space-x-10 bg-gray-800 py-2 px-6 rounded-full">
          {navbarSelection.map((selection, index) => (
            <button
              key={index}
              className={`p-2 rounded-2xl transition-all duration-300 text-gray-400 hover:text-white hover:cursor-pointer flex flex-row gap-2 ${
                currentPage === selection.name ? "bg-gray-700 text-white" : ""
              }`}
              onClick={() => setCurrentPage(selection.name)}
            >
              {selection.icon}
              <p className="font-bold">{selection.name}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Notification and Profile */}
      <div className="w-1/4 flex flex-row justify-end space-x-5">
        {/* Notification */}
        <div className="flex justify-center items-center">
          <Bell />
        </div>

        {/* Profile */}
        {/* Profile Button / Icon */}
        <button
          className="flex flex-row items-center space-x-2 rounded-lg p-2 hover:cursor-pointer"
          onClick={() => setOpenProfileMenu(!openProfileMenu)}
        >
          <img
            src={blankProfilePic.src}
            alt={blankProfilePic.src}
            width={30}
            height={30}
            className="rounded-full object-cover"
          />
          <p className="font-medium text-gray-400 hover:text-white transition-all duration-300 hover:cursor-pointer">
            {session ? session?.user?.name : "UNKNOWN"}
          </p>
        </button>
      </div>
      {/* Dropdown Menu Profile */}
      {openProfileMenu && (
        <div className="absolute right-5 top-20 w-48 bg-gray-700 transition-all animate-in fade-in rounded-lg shadow-xl border border-gray-600">
          <div className="py-1">
            <button className="flex items-center w-full px-4 py-2 text-sm text-gray-400 hover:text-white hover:cursor-pointer transition duration-300">
              <CircleUserRound size={16} className="mr-3" />
              <p>Account</p>
            </button>
            <button className="flex items-center w-full px-4 py-2 text-sm text-gray-400 hover:text-white hover:cursor-pointer transition duration-300">
              <Settings size={16} className="mr-3" />
              <p>Settings</p>
            </button>
            <button
              className="flex items-center w-full px-4 py-2 text-sm text-red-400 hover:text-red-300 hover:cursor-pointer transition duration-300"
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
    </nav>
  );
};

export default DashboardNavbar;
