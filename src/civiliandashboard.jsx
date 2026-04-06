import React, { useState } from "react";

export default function CivilianDashboard({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col overflow-hidden">

      {/* 🔷 NAVBAR */}
      <div className="h-16 bg-[#1f6b75] flex items-center justify-between px-4 text-white">

        {/* LEFT */}
        <div className="flex items-center gap-3">

          {/* 🍔 BURGER */}
          <button
            onClick={() => setOpen(true)}
            className="block md:hidden text-2xl"
          >
            ☰
          </button>

          <img src="src/assets/logo.png" className="w-10 h-10" />

          <div className="hidden sm:block">
            <h1 className="font-semibold">CIVILIAN</h1>
            <p className="text-xs opacity-70">
              Municipality of Santa Rosa
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div>🔔</div>
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
                👤
              </div>

              <div>
                <p className="text-xs text-gray-500">Civilian</p>
                <p className="text-sm font-medium text-gray-700">
                  Juan Dela Cruz
                </p>
              </div>
            </div>

            {/* MENU */}
            <div className="space-y-2 text-gray-600 text-sm">

              <div 
                onClick={() => setOpen(false)}
                className="p-2 rounded hover:bg-gray-200 cursor-pointer"
              >
                🏠 Overview
              </div>

              <div 
                onClick={() => setOpen(false)}
                className="p-2 rounded hover:bg-gray-200 cursor-pointer"
              >
                📝 Report
              </div>

              <div 
                onClick={() => setOpen(false)}
                className="p-2 rounded hover:bg-gray-200 cursor-pointer"
              >
                📍 Track
              </div>

              <div 
                onClick={() => setOpen(false)}
                className="p-2 rounded bg-blue-100 text-blue-600 font-medium"
              >
                👤 Profile
              </div>

            </div>
          </div>

          {/* LOGOUT */}
          <div className="text-gray-500 text-sm cursor-pointer">
            🚪 Logout
          </div>
        </div>

        {/* 🟦 MAIN CONTENT */}
        <div className="flex-1 bg-[#EEF2F6] overflow-y-auto p-4 md:p-6 z-0">
          {children}
        </div>

      </div>
    </div>
  );
}