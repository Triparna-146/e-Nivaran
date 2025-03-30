import React, { useState } from "react";
import { FiSearch, FiBell } from "react-icons/fi";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { PiUserCircleFill } from "react-icons/pi";

const Complaints = () => {
  const [selectedFilter, setSelectedFilter] = useState("New");

  return (
    <div className="flex-1 flex flex-col p-4 md:p-6 bg-gray-100">
      {/* Top Bar (Mobile) */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center md:hidden rounded-lg">
        <button>
          <HiOutlineMenuAlt2 className="text-2xl" />
        </button>
        <h1 className="text-xl font-semibold">Complaints</h1>
        <FiBell className="text-2xl text-gray-600" />
      </header>

      {/* Search & Notifications (Large Screens) */}
      <div className="hidden md:flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Complaints</h1>
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

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-md mb-6 w-xl">
        <div className="flex justify-between text-sm bg-blue-200 p-2 rounded-md">
          {["New", "All", "Assigned", "In Progress", "Resolved"].map(
            (filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-3 py-1 w-full rounded-md ${
                  selectedFilter === filter
                    ? "bg-blue-500 text-white shadow-md"
                    : "text-slate-800"
                }`}
              >
                {filter}
              </button>
            )
          )}
        </div>
      </div>

      {/* Complaints Table */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">
          Recent Complaints
        </h2>
        <p className="text-gray-600 text-sm mb-4">
          Latest complaints received in the system
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border rounded-lg overflow-hidden shadow-md">
            <thead>
              <tr className="bg-blue-500 text-white text-left">
                <th className="px-4 py-3">ID</th>
                <th className="px-4 py-3">Subject</th>
                <th className="px-4 py-3">Department</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50 transition">
                <td className="px-4 py-3">COMP-2023-12345</td>
                <td className="px-4 py-3">Water Supply Issue</td>
                <td className="px-4 py-3">Water Supply</td>
                <td className="px-4 py-3">15 Mar 2024</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 text-sm font-semibold text-yellow-800 bg-yellow-200 rounded-full">
                    In Progress
                  </span>
                </td>
                <td className="px-4 py-3 text-center">
                  <button className="px-3 py-1 text-sm text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition">
                    View
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Complaints;
