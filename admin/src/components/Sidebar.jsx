import { Link, useLocation } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { RiDashboardLine } from "react-icons/ri";
import { FaFileAlt } from "react-icons/fa";
import { MdOutlineAnalytics } from "react-icons/md";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useAuth } from "../context/AuthContext";
import { RxCross1 } from "react-icons/rx";


const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const { logout } = useAuth();
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/admin/dashboard", icon: <RiDashboardLine /> },
    { name: "Complaints", path: "/admin/complaints", icon: <FaFileAlt /> },
    { name: "Analytics", path: "/admin/analytics", icon: <MdOutlineAnalytics /> },
  ];

  return (
    <>
      {/* Sidebar (Desktop & Mobile) */}
      <aside
        className={`fixed md:relative inset-y-0 left-0 z-50 bg-white p-4 w-64 shadow-lg transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-blue-700">e-Nivaran</h2>
          <button className="md:hidden" onClick={() => setSidebarOpen(false)}>
            { sidebarOpen ? <RxCross1 className="text-2xl font-bold text-gray-600" /> : <HiOutlineMenuAlt2 className="text-2xl" />}
            {/* <HiOutlineMenuAlt2 className="text-2xl" />
            <X /> */}
          </button>
        </div>
        <p className="text-xs text-gray-600 mb-6">Authority Portal</p>

        <nav className="space-y-4">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-2 p-2 rounded-lg text-gray-800 hover:bg-blue-200 transition delay-50 ${
                location.pathname === item.path ? "bg-blue-500 text-white hover:bg-blue-500 hover:text-white" : ""
              }`}
            >
              {item.icon} {item.name}
            </Link>
          ))}
        </nav>

        <button
          className="mt-6 flex items-center gap-2 p-2 w-full text-red-500 hover:bg-red-100 rounded-lg"
          onClick={logout}
        >
          <FiLogOut className="text-xl" /> Logout
        </button>
      </aside>

      {/* Sidebar Overlay for Mobile */}
      {sidebarOpen && (
        <div
            className="fixed inset-0 bg-opacity-25 md:hidden transition-opacity duration-300"
            onClick={() => setSidebarOpen(false)}
        ></div>
        )}
    </>
  );
};

export default Sidebar;
