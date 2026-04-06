export default function DashboardLayout({ children }) {
  return (
    <div className="h-screen flex flex-col overflow-hidden">

      {/* 🔷 NAVBAR */}
      <div className="h-16 bg-[#1f6b75] flex items-center justify-between px-6 text-white">
        <div className="flex items-center gap-3">
          <img src="src/assets/logo.png" className="w-10 h-10" />
          <div>
            <h1 className="font-semibold">Rescue Team</h1>
            <p className="text-xs opacity-70">
              Municipality of Santa Rosa
            </p>
          </div>
        </div>

        🔔
      </div>

      {/* 🔷 BODY */}
      <div className="flex flex-1 overflow-hidden">

        {/* 🟪 SIDEBAR (FIXED / NO SCROLL) */}
        <div className="w-64 bg-[#F5F4FF] flex flex-col justify-between p-5">

          <div>

            {/* PROFILE */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                👤
              </div>

              <div>
                <p className="text-xs text-gray-500">ADMIN</p>
                <p className="text-sm font-medium text-gray-700">
                  Rescue member 01
                </p>
              </div>
            </div>

            {/* MENU */}
            <div className="space-y-2 text-gray-600 text-sm">

              <div className="p-2 rounded hover:bg-gray-200 cursor-pointer">
                🏠 Dashboard
              </div>

              <div className="p-2 rounded hover:bg-gray-200 cursor-pointer">
                📝 Incidents
              </div>

              <div className="p-2 rounded hover:bg-gray-200 cursor-pointer">
                🖼 Units
              </div>

              <div className="p-2 rounded bg-blue-100 text-blue-600 font-medium">
                👥 Volunteers
              </div>

              <div className="p-2 rounded hover:bg-gray-200 cursor-pointer">
                ⚙️ Settings
              </div>

            </div>
          </div>

          {/* LOGOUT (FIXED BOTTOM) */}
          <div className="text-gray-500 text-sm cursor-pointer">
            🚪 Logout
          </div>
        </div>

        {/* 🟦 MAIN CONTENT (ONLY THIS SCROLLS) */}
        <div className="flex-1 bg-[#EEF2F6] overflow-y-auto p-6">
          {children}
        </div>

      </div>
    </div>
  );
}