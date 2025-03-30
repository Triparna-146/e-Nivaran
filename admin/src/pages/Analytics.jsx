import React from "react";
import { FiSearch, FiBell } from "react-icons/fi";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { PiUserCircleFill } from "react-icons/pi";

const Analytics = () => {
  return (
    <div className="flex-1 flex flex-col p-4 md:p-6 bg-gray-100">
      {/* Top Bar (Mobile) */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center md:hidden rounded-lg">
        <button>
          <HiOutlineMenuAlt2 className="text-2xl" />
        </button>
        <h1 className="text-xl font-semibold">Analytics</h1>
        <FiBell className="text-2xl text-gray-600" />
      </header>

      {/* Search & Notifications (Large Screens) */}
      <div className="hidden md:flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Analytics</h1>
        <div className="flex items-center gap-4">
          <div className="relative">
            <FiSearch className="absolute right-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-2 rounded-lg border w-72 shadow-sm focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <FiBell className="text-2xl text-gray-600 cursor-pointer" />
          <PiUserCircleFill className="text-4xl text-gray-800 cursor-pointer" />
        </div>
      </div>

      {/* Analytics Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">
          Dashboard Overview
        </h2>
        <p className="text-gray-600 text-sm mb-4">
          Here you can find insights and analytics of the system.
        </p>

        {/* Analytics Cards Placeholder */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Total Complaints</h3>
            <p className="text-3xl font-bold mt-2">1,234</p>
          </div>
          <div className="bg-green-500 text-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Resolved Complaints</h3>
            <p className="text-3xl font-bold mt-2">987</p>
          </div>
          <div className="bg-red-500 text-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Pending Complaints</h3>
            <p className="text-3xl font-bold mt-2">247</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
