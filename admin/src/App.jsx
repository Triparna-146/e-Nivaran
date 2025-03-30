import { useState, useContext } from "react";
import {
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import AdminLogin from "./pages/AdminLogin";
import { AuthProvider } from "./context/AuthContext";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Complaints from "./pages/Complaints";
import Analytics from "./pages/Analytics";
import Sidebar from './components/Sidebar'
import { AdminContext } from "./context/AdminContext";

function App() {

  const {aToken} = useContext(AdminContext);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <Routes>
      {/* If not logged in, redirect all routes to login */}
      {!aToken ? (
        <>
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="*" element={<Navigate to="/admin/login" replace />} />
        </>
      ) : (
        <Route path="/*" element={  
          <div className="flex h-screen w-full">
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div className="flex-1 p-4">
              <Routes>
                <Route path="/admin/dashboard" element={<Dashboard />} />
                <Route path="/admin/complaints" element={<Complaints />} />
                <Route path="/admin/analytics" element={<Analytics />} />
                {/* If the user types an invalid route, redirect to Dashboard */}
                <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
              </Routes>
            </div>
          </div>
        } />
      )}
    </Routes>
  );
}

export default App;
