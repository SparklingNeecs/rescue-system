import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ApplicantDetails from "./applicantdetails";
import DashboardLayout from "./dashboardlayout";

export default function IncidentManagement() {
  const navigate = useNavigate();
  const [selectedIncident, setSelectedIncident] = useState(null);

  const data = [
    {
      id: "INC-001-120126",
      status: "Pending",
      location: "Maharlika Hwy, S.",
      assigned: "Team R-Beta",
      reported: "March 02, 2026 - 11:26",
    },
  ];

  const handleViewIncident = (incident) => {
    navigate(`/incidents/${incident.id}`);
  };

  const handleResolveIncident = (incident) => {
    // Add your resolve logic here
    console.log("Resolve incident:", incident);
  };

  return (
    <DashboardLayout>
      <div className="p-6">

        {/* HEADER */}
        <div className="mb-4">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold text-gray-700">
              INCIDENT MANAGEMENT
            </h1>
            <span className="text-sm text-gray-500">
              Santa Rosa, Nueva Ecija
            </span>
          </div>

          <div className="flex gap-10 mt-4 border-b">
            <div className="pb-2 border-b-2 border-red-500">
              <p className="text-xl font-bold text-red-500">4</p>
              <p className="text-sm text-gray-600">All Incidents</p>
            </div>

            <div className="pb-2">
              <p className="text-xl font-bold text-red-500">4</p>
              <p className="text-sm text-gray-600">Active</p>
            </div>

            <div className="pb-2">
              <p className="text-xl font-bold text-yellow-500">1</p>
              <p className="text-sm text-gray-600">Pending</p>
            </div>

            <div className="pb-2">
              <p className="text-xl font-bold text-green-600">1</p>
              <p className="text-sm text-gray-600">Resolved</p>
            </div>
          </div>
        </div>

        {/* FILTERS */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center border rounded-md px-3 py-2 w-[250px] bg-white">
            <span className="text-gray-400 mr-2">🔍</span>
            <input
              type="text"
              placeholder="Search ID, type, location..."
              className="outline-none text-sm w-full"
            />
          </div>

          <select className="border rounded-md px-3 py-2 text-sm bg-white text-gray-600">
            <option>All Statuses</option>
          </select>

          <input
            type="text"
            placeholder="dd / mm / yy"
            className="border rounded-md px-3 py-2 text-sm w-[140px]"
          />

          <button className="text-sm text-gray-500 border px-3 py-2 rounded-md hover:bg-gray-100">
            ✕ clear
          </button>
        </div>

        {/* TABLE */}
        <div className="bg-white rounded-lg border overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Location</th>
                <th className="p-3 text-left">Assigned</th>
                <th className="p-3 text-left">Reported</th>
                <th className="p-3 text-left">Action</th>
              </tr>
            </thead>

            <tbody>
              {data.map((row, i) => (
                <tr key={i} className="border-t hover:bg-gray-50">
                  <td className="p-3">{row.id}</td>
                  <td className="p-3">
                    <span className="px-2 py-1 text-xs bg-gray-200 rounded-full">
                      {row.status}
                    </span>
                  </td>
                  <td className="p-3">{row.location}</td>
                  <td className="p-3">{row.assigned}</td>
                  <td className="p-3">{row.reported}</td>
                  <td className="p-3 flex gap-2">
                    <button 
                      onClick={() => handleViewIncident(row)}
                      className="text-xs px-2 py-1 border rounded text-blue-600 hover:bg-blue-50"
                    >
                      View
                    </button>
                    <button 
                      onClick={() => handleResolveIncident(row)}
                      className="text-xs px-2 py-1 border rounded text-green-600 hover:bg-green-50"
                    >
                      Resolve
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </DashboardLayout>
  );
}