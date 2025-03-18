import { useState } from "react";
import { FiSearch, FiBell } from "react-icons/fi";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { PiUserCircleFill } from "react-icons/pi";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col px-2">
        {/* Top Bar */}
        <header className="bg-white shadow-md p-4 flex justify-between items-center md:hidden">
          <button onClick={() => setSidebarOpen(true)}>
            <HiOutlineMenuAlt2 className="text-2xl" />
          </button>
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <FiBell className="text-2xl text-gray-600" />
        </header>

        <main className="flex-1 p-6">
          {/* Search and Notifications (Only for larger screens) */}
          <div className="hidden md:flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold">Dashboard</h1>
            <div className="flex items-center gap-4">
              <div className="relative">
                <FiSearch className="absolute right-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="px-3 py-2 rounded-lg border w-72"
                />
              </div>
              <FiBell className="text-2xl text-gray-600" />
              <PiUserCircleFill className="text-4xl text-gray-800" />
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-6">
            {[
              { title: "Total Complaints", value: "1,248" },
              { title: "Resolved", value: "952" },
              { title: "Pending", value: "296" },
              { title: "Avg. Resolution Time", value: "48h" },
            ].map((stat, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-gray-600 text-md">{stat.title}</h3>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Complaints Table Placeholder */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-1">Recent Complaints</h2>
            <p className="text-gray-600 text-sm">Latest Complains recieved in the system</p>
            <div className="">
              <table className="table-auto w-full mt-4 border-collapse"> 
                <thead>
                  <tr className="bg-gray-200 border border-2 border-gray-300">
                    <th className="px-4 py-2">ID</th>
                    <th className="px-4 py-2">Subject</th>
                    <th className="px-4 py-2">Department</th>
                    <th className="px-4 py-2">Date</th>
                    <th className="px-4 py-2">Status</th>
                    <th className="px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b-2 border-x-2 text-sm border-gray-300">
                    <td className="px-4 py-2 text-center">sdfkjasdfk</td>
                    <td className="px-4 py-2 text-center">sdfkjasdfk</td>
                    <td className="px-4 py-2 text-center">sdfkjasdfk</td>
                    <td className="px-4 py-2 text-center">sdfkjasdfk</td>
                    <td className="px-4 py-2 text-center">sdfkjasdfk</td>
                    <td className="px-4 py-2 text-center">sdfkjasdfk</td>
                  </tr>
                </tbody>  
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
