import React, { useState } from 'react'
import { FiSearch, FiBell } from "react-icons/fi";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { PiUserCircleFill } from "react-icons/pi";
import Sidebar from '../components/Sidebar'

const Analytics = () => {

    const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col px-2">
        {/* Top Bar */}
        <header className="bg-white shadow-md p-4 flex justify-between items-center md:hidden">
          <button onClick={() => setSidebarOpen(true)}>
            <HiOutlineMenuAlt2 className="text-2xl" />
          </button>
          <h1 className="text-xl font-semibold">Analytics</h1>
          <FiBell className="text-2xl text-gray-600" />
        </header>

        <main className="flex-1 p-6">
          {/* Search and Notifications (Only for larger screens) */}
          <div className="hidden md:flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold">Analytics</h1>
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
        </main>
      </div>

    </div>
  )
}

export default Analytics
