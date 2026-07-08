import { Icon } from "@iconify/react";
import AdminLayout from "./alayout";
import { useState } from "react";

export default function AdminOverview() {
  // Sample data for recent account requests
  const recentRequests = [
    {
      id: 1,
      name: "Jandy Collins",
      role: "VOLUNTEER",
      email: "jayColl@gmail.com",
      requested: "March 29, 2029",
      status: "PENDING"
    },
    {
      id: 2,
      name: "Kandi Florendo",
      role: "RESCUER",
      email: "florendoK@gmail.com",
      requested: "February 14, 2029",
      status: "PENDING"
    },
    {
      id: 3,
      name: "Mona Manabat",
      role: "RESCUER",
      email: "mona102@gmail.com",
      requested: "March 4, 2029",
      status: "PENDING"
    }
  ];

  // Sample data for incident summary
  const incidents = [
    {
      id: "INC-002",
      type: "Vehicle Accident",
      location: "San Mariano",
      reported: "March 29, 2029",
      status: "SOLVED"
    },
    {
      id: "INC-004",
      type: "Road Obstruction",
      location: "Mabini",
      reported: "February 14, 2029",
      status: "SOLVED"
    },
    {
      id: "INC-007",
      type: "Medical Emergency",
      location: "Rajal Sur",
      reported: "March 4, 2029",
      status: "UNSOLVED"
    }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case "PENDING": return "bg-[#FCE3AE] border border-[#E1791E] text-[#E1791E] font-medium rounded-sm";
      case "SOLVED": return "bg-[#D5FFE5] border border-[#15803D] text-[#15803D] font-medium rounded-sm";
      case "UNSOLVED": return "bg-[#FDE6EA] border border-[#DC2626] text-[#DC2626] font-medium rounded-sm";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const getRoleColor = (role) => {
    switch(role) {
      case "VOLUNTEER": return "bg-[#D5FFE5] border border-[#15803D] text-[#15803D] font-medium rounded-sm";
      case "RESCUER": return "bg-[#CBE8FF] border border-[#4285F4] text-[#4285F4] font-medium  rounded-sm";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <AdminLayout>
      <div className="flex-1 overflow-y-auto p-6 bg-[#FAFAFF]">
        
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-[#262D31]">Admin Overview</h1>
          <p className="text-gray-500 text-sm">System health, user summary, and activity snapshot</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 -mt-2 mb-6">
          <div className="bg-white rounded-lg shadow p-5">
            <div className="flex items-start gap-3">
              <p className="text-5xl font-bold text-[#672778] leading-none">12</p>
              <div>
                <p className="text-gray-500 text-sm">Total Users</p>
                <span className="text-green-500 text-sm font-medium flex items-center">
                  3 this month
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-5">
            <div className="flex items-start gap-3">
              <p className="text-5xl font-bold text-[#15803D] leading-none">8</p>
              <div>
                <p className="text-gray-500 text-sm">Active accounts</p>
                <span className="text-blue-500 text-sm font-medium">89% Total</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-5">
            <div className="flex items-start gap-3">
              <p className="text-5xl font-bold text-[#E1791E] leading-none">2</p>
              <div>
                <p className="text-gray-500 text-sm">Pending Accounts</p>
                <span className="text-yellow-500 text-sm font-medium">Needs Review</span>
              </div>
            </div>
          </div>
        </div>




        {/* Recent Account Requests Table */}
        <div className="bg-white rounded-lg shadow mb-6 overflow-hidden">
          <div className="p-4 border-b flex justify-between items-center bg-[#EAE9F9]">
            <h2 className="font-semibold text-[#262D31]">Recent Account Request</h2>
            <button className="text-blue-600 text-sm font-medium hover:text-blue-700 flex items-center gap-1">
              View All
              <Icon icon="mdi:chevron-right" className="w-4 h-4" />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#000000] uppercase tracking-wider border-b border-[#EAE9F9]">Name</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#000000] uppercase tracking-wider border-b border-[#EAE9F9]">Role</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#000000] uppercase tracking-wider border-b border-[#EAE9F9]">Email</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#000000] uppercase tracking-wider border-b border-[#EAE9F9]">Requested</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#000000] uppercase tracking-wider border-b border-[#EAE9F9]">Status</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#000000] uppercase tracking-wider border-b border-[#EAE9F9]">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {recentRequests.map((request) => (
                  <tr key={request.id} className="hover:bg-gray-50 transition">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">{request.name}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 text-xs rounded-full ${getRoleColor(request.role)}`}>
                        {request.role}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-[#000000]">{request.email}</td>
                    <td className="px-4 py-3 text-sm text-[#000000]">{request.requested}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(request.status)}`}>
                        {request.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <button className="bg-[#15803D] text-[#F4F4FF] px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-[#166534] transition">
                          Accept
                        </button>
                        <button className="bg-[#DC2626] text-[#F4F4FF] px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-[#c11f1f] transition">
                          Decline
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow mb-6 overflow-hidden">
          <div className="p-4 border-b flex justify-between items-center bg-[#EAE9F9]">
            <h2 className="font-semibold text-[#262D31]">Incident Summary</h2>
            <button className="text-blue-600 text-sm font-medium hover:text-blue-700 flex items-center gap-1">
              View All
              <Icon icon="mdi:chevron-right" className="w-4 h-4" />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#000000] uppercase tracking-wider">ID</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#000000] uppercase tracking-wider">Type</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#000000] uppercase tracking-wider">Location</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#000000] uppercase tracking-wider">Reported</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#000000] uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {incidents.map((incident) => (
                  <tr key={incident.id} className="hover:bg-gray-50 transition">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">{incident.id}</td>
                    <td className="px-4 py-3 text-sm text-[#000000]">{incident.type}</td>
                    <td className="px-4 py-3 text-sm text-[#000000]">{incident.location}</td>
                    <td className="px-4 py-3 text-sm text-[#000000]">{incident.reported}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(incident.status)}`}>
                        {incident.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}