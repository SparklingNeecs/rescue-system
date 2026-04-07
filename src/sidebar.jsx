import { NavLink, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('userRole');
    navigate('/login');
  };

  return (
    <div className="w-64 bg-[#f3f4f6] h-screen flex flex-col justify-between px-5 py-6">

      {/* TOP */}
      <div>

        {/* PROFILE */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-xl">
            👤
          </div>

          <div>
            <p className="text-[10px] text-gray-500">ADMIN</p>
            <p className="text-sm font-medium text-gray-700">
              Rescue member 01
            </p>
          </div>
        </div>

        {/* MENU */}
        <div className="space-y-2 text-gray-600 text-sm">

          <NavLink 
            to="/dashboard"
            className={({ isActive }) => 
              `flex items-center gap-3 p-2 rounded hover:bg-gray-200 cursor-pointer ${isActive ? 'bg-blue-100 text-blue-600 font-medium' : ''}`
            }
          >
            🏠 Dashboard
          </NavLink>

          <NavLink 
            to="/incidents"
            className={({ isActive }) => 
              `flex items-center gap-3 p-2 rounded hover:bg-gray-200 cursor-pointer ${isActive ? 'bg-blue-100 text-blue-600 font-medium' : ''}`
            }
          >
            📝 Incidents
          </NavLink>

          <NavLink 
            to="/units"
            className={({ isActive }) => 
              `flex items-center gap-3 p-2 rounded hover:bg-gray-200 cursor-pointer ${isActive ? 'bg-blue-100 text-blue-600 font-medium' : ''}`
            }
          >
            🖼 Units
          </NavLink>

          <NavLink 
            to="/volunteer-approval"
            className={({ isActive }) => 
              `flex items-center gap-3 p-2 rounded hover:bg-gray-200 cursor-pointer ${isActive ? 'bg-blue-100 text-blue-600 font-medium' : ''}`
            }
          >
            👥 Volunteers
          </NavLink>

          <NavLink 
            to="/edit-profile"
            className={({ isActive }) => 
              `flex items-center gap-3 p-2 rounded hover:bg-gray-200 cursor-pointer ${isActive ? 'bg-blue-100 text-blue-600 font-medium' : ''}`
            }
          >
            ⚙️ Settings
          </NavLink>

        </div>
      </div>

      {/* LOGOUT */}
      <div 
        onClick={handleLogout}
        className="flex items-center gap-3 text-gray-500 text-sm cursor-pointer hover:text-red-600"
      >
        🚪 Logout
      </div>
    </div>
  );
}