export default function Sidebar() {
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

          <div className="flex items-center gap-3 p-2 rounded hover:bg-gray-200 cursor-pointer">
            🏠 Dashboard
          </div>

          <div className="flex items-center gap-3 p-2 rounded hover:bg-gray-200 cursor-pointer">
            📝 Incidents
          </div>

          <div className="flex items-center gap-3 p-2 rounded hover:bg-gray-200 cursor-pointer">
            🖼 Units
          </div>

          {/* ACTIVE */}
          <div className="flex items-center gap-3 p-2 rounded bg-blue-100 text-blue-600 font-medium">
            👥 Volunteers
          </div>

          <div className="flex items-center gap-3 p-2 rounded hover:bg-gray-200 cursor-pointer">
            ⚙️ Settings
          </div>

        </div>
      </div>

      {/* LOGOUT */}
      <div className="flex items-center gap-3 text-gray-500 text-sm cursor-pointer">
        🚪 Logout
      </div>
    </div>
  );
}