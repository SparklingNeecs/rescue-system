import Sidebar from "./sidebar";
import Navbar from "./navbar";

export default function Dashboard() {
  return (
    <div className="h-screen flex flex-col bg-[#f1f5f9]">

      {/* NAVBAR */}
      <Navbar />

      <div className="flex flex-1">

        {/* SIDEBAR */}
        <Sidebar />

        {/* MAIN CONTENT */}
        <div className="flex-1 p-6">

          {/* STATS */}
          <div className="grid grid-cols-5 gap-4 mb-4">

            <div className="bg-white p-4 rounded shadow border-b-4 border-red-500">
              <h2 className="text-red-500 text-xl font-bold">4</h2>
              <p className="text-[#262D31]">All Incidents</p>
            </div>

            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-red-500 text-xl font-bold">4</h2>
              <p className="text-[#262D31]">Active</p>
            </div>

            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-yellow-500 text-xl font-bold">1</h2>
              <p className="text-[#262D31]">Pending</p>
            </div>

            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-green-500 text-xl font-bold">1</h2>
              <p className="text-[#262D31]">Solved</p>
            </div>

            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-blue-500 text-xl font-bold">3</h2>
              <p className="text-[#262D31]">Closed</p>
            </div>

          </div>

          {/* CONTENT */}
          <div className="grid grid-cols-3 gap-4">

            {/* LEFT - INCIDENTS */}
            <div className="bg-white p-4 rounded shadow">

              <div className="flex justify-between mb-3">
                <h3 className="font-semibold text-[#262D31]">
                  Active Incidents
                </h3>
                <span className="bg-red-500 text-white px-2 rounded text-sm">4</span>
              </div>

              {/* SEARCH */}
              <input
                type="text"
                placeholder="Search type, location..."
                className="w-full border rounded-md p-2 mb-3 placeholder-[#5D7285]"
              />

              {/* INCIDENT CARD */}
              <div className="border-l-4 border-red-500 p-3 mb-3 bg-gray-50 rounded">

                <span className="text-xs bg-red-200 text-red-600 px-2 py-1 rounded">
                  Critical
                </span>

                <p className="text-[#262D31] font-semibold mt-2">
                  Vehicle Accident
                </p>

                <p className="text-[#656363] text-sm">
                  Rizal (Poblacion)
                </p>

                <p className="text-[#656363] text-sm">
                  2026-03-02 16:39
                </p>

              </div>

              <div className="border-l-4 border-green-500 p-3 mb-3 bg-gray-50 rounded">
                <p className="text-[#262D31] font-semibold">
                  Road Obstruction
                </p>
                <p className="text-[#656363] text-sm">
                  F. Magsaysay Rd.
                </p>
              </div>

              <div className="border-l-4 border-yellow-500 p-3 bg-gray-50 rounded">
                <p className="text-[#262D31] font-semibold">
                  Medical Emergency
                </p>
                <p className="text-[#656363] text-sm">
                  Lourdes
                </p>
              </div>

            </div>

            {/* RIGHT - MAP */}
            <div className="col-span-2 bg-white rounded shadow overflow-hidden">

              <iframe
                title="map"
                src="https://maps.google.com/maps?q=Santa%20Rosa%20Laguna&z=13&output=embed"
                className="w-full h-full min-h-[500px]"
              />

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}