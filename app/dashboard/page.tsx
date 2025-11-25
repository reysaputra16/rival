"use client";
import CreatePage from "@/components/dashboard/CreatePage";
import DashboardNavbar from "@/components/dashboard/Navbar";
import SearchPage from "@/components/dashboard/SearchPage";
import { useState } from "react";

const Dashboard: React.FC = () => {
  /* States */
  const [currentPage, setCurrentPage] = useState("overview");

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar of Dashboard */}
      <DashboardNavbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Pages */}
      {currentPage === "create" ? <CreatePage /> : currentPage === "search" ? <SearchPage /> : ""}
    </div>
  );
};

export default Dashboard;
