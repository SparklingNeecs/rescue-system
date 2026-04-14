import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { useNavigate, NavLink } from "react-router-dom";

export default function CivilianDashboard({ children }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('userRole');
    navigate('/login');
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden">

      {/* 🔷 NAVBAR */}
      <div className="h-16 bg-[#1f6b75] flex items-center justify-between px-4 text-white">

        {/* LEFT */}
        <div className="flex items-center gap-3">

          {/*BURGER */}
          <button
            onClick={() => setOpen(true)}
            className="block md:hidden"
          >
            <Icon icon="stash:burger-classic-duotone" width="28" className="text-gray-700" />
          </button>

          <img src="src/assets/logo.png" className="w-20 h-10" alt="logo" />

          <div className="hidden sm:block">
            <h1 className="font-semibold">CIVILIAN</h1>
            <p className="text-xs opacity-70">
              Municipality of Santa Rosa
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          <Icon icon="material-symbols-light:notifications" width="24" style={{ color: "#ffffff" }} />
        </div>
      </div>
    

      {/* 🔷 BODY */}
      <div className="flex flex-1 overflow-hidden relative">

        {/* 🟪 OVERLAY */}
        {open && (
          <div
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
            onClick={() => setOpen(false)}
          />
        )}

        {/* 🟪 SIDEBAR */}
        <div
          className={`
            fixed md:static z-50 top-0 left-0 h-full w-64 bg-[#F5F4FF] p-5 flex flex-col justify-between
            transform transition-transform duration-300
            ${open ? "translate-x-0" : "-translate-x-full"}
            md:translate-x-0
          `}
        >
          {/* TOP */}
          <div>

            {/* CLOSE BTN */}
            <div className="flex justify-between items-center mb-6 md:hidden">
              <span className="font-semibold">Menu</span>
              <button onClick={() => setOpen(false)}>✕</button>
            </div>

            {/* PROFILE */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                <Icon icon="iconamoon:profile-fill" width="24" />
              </div>

              <div>
                <p className="text-xs text-gray-500">Civilian</p>
                <p className="text-sm font-medium text-gray-700">
                  Juan Dela Cruz
                </p>
              </div>
            </div>

            {/* MENU */}
            <div className="space-y-2 text-gray-600 text-base">

              {/* Overview - Navigates to /civilian-dashboard */}
              <NavLink 
                to="/civilian-dashboard"
                onClick={() => setOpen(false)}
                className={({ isActive }) => 
                  `p-2 rounded hover:bg-gray-200 cursor-pointer flex items-center gap-2 ${
                    isActive ? 'bg-[#DFF1FF] text-[#0C7FDA] font-medium' : ''
                  }`
                }
              >
                <Icon icon="material-symbols-light:home-rounded" width="20" style={{ color: "#5D7285" }}/>
                Overview
              </NavLink>

              {/* Report - Navigates to /report1 */}
              <NavLink 
                to="/report"
                onClick={() => setOpen(false)}
                className={({ isActive }) => 
                  `p-2 rounded hover:bg-gray-200 cursor-pointer flex items-center gap-2 ${
                    isActive ? 'bg-[#DFF1FF] text-[#0C7FDA] font-medium' : ''
                  }`
                }
              >
                <Icon icon="solar:siren-bold" width="20" style={{ color: "#5D7285" }} />
                Report
              </NavLink>

              {/* Track - Navigates to /track-reports */}
              <NavLink 
                to="/track-reports"
                onClick={() => setOpen(false)}
                className={({ isActive }) => 
                  `p-2 rounded hover:bg-gray-200 cursor-pointer flex items-center gap-2 ${
                    isActive ? 'bg-[#DFF1FF] text-[#0C7FDA] font-medium' : ''
                  }`
                }
              >
                <Icon icon="mage:location-fill" width="20" style={{ color: "#5D7285" }} />
                Track
              </NavLink>  

              {/* Profile - Navigates to /edit-profile */}
              <NavLink 
                to="/edit-profile"
                onClick={() => setOpen(false)}
                className={({ isActive }) => 
                  `p-2 rounded hover:bg-gray-200 cursor-pointer flex items-center gap-2 ${
                    isActive ? 'bg-[#DFF1FF] text-[#0C7FDA] font-medium' : ''
                  }`
                }
              >
                <Icon icon="iconamoon:profile-fill" width="20" />
                Profile
              </NavLink>

            </div>
          </div>

          {/* LOGOUT */}
          <div 
            onClick={handleLogout}
            className="text-gray-500 text-sm cursor-pointer hover:text-red-600 flex items-center gap-2"
          >
            <Icon icon="majesticons:logout" width="20" />
            Logout
          </div>
        </div>

        {/* 🟦 MAIN CONTENT */}
        <div className="flex-1 bg-[#EEF2F6] overflow-y-auto pt-4 md:pt-6 pr-0 z-0">
          {children}
        </div>

      </div>
    </div>
  );
}