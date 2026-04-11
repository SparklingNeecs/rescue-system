import { Icon } from "@iconify/react";
import DashboardLayout from "./dashboardlayout";
import { Outlet } from "react-router-dom";
import IncidentDetails from "./incidentdetails";
import { useState } from "react";

export default function Dashboard() {
  const [selectedIncident, setSelectedIncident] = useState(null);
  
  return (
    <DashboardLayout>
      <div className="h-full flex flex-col bg-[#f1f5f9] overflow-hidden">
        
        {/* STATS - STICKY */}
        <div className="sticky top-0 z-10 bg-[#f1f5f9] pt-4 pb-2">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border-b-4 border-red-500">
              <h2 className="text-red-500 text-2xl font-bold">4</h2>
              <p className="text-[#262D31] text-sm">All Incidents</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border-b-4 border-orange-500">
              <h2 className="text-orange-500 text-2xl font-bold">4</h2>
              <p className="text-[#262D31] text-sm">Active</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border-b-4 border-yellow-500">
              <h2 className="text-yellow-500 text-2xl font-bold">1</h2>
              <p className="text-[#262D31] text-sm">Pending</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border-b-4 border-green-600">
              <h2 className="text-green-600 text-2xl font-bold">1</h2>
              <p className="text-[#262D31] text-sm">Solved</p>
            </div>
          </div>
        </div>
        
        {/* THREE COLUMN LAYOUT - SCROLLABLE */}
        <div className="flex-1 min-h-0 overflow-hidden">
          <div className="flex gap-4 h-full">
            
            {/* INCIDENT LIST - LEFT SIDE (sticky search + scrollable list) */}
            <div className="w-80 flex-shrink-0 bg-white rounded-lg shadow-sm flex flex-col overflow-hidden">
              {/* Sticky Header */}
              <div className="sticky top-0 bg-white z-10 p-4 pb-2 border-b border-gray-100">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-[#262D31]">Active Incidents</h3>
                  <span className="bg-red-500 text-white px-2 py-0.5 rounded text-xs">3</span>
                </div>
                
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Search type..."
                    className="w-full border rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
                  />
                  <select className="border rounded-md px-2 text-sm">
                    <option>All</option>
                    <option>New</option>
                    <option>Onscene</option>
                    <option>Pending</option>
                  </select>
                </div>
              </div>
              
              {/* Scrollable Incident List */}
              <div className="flex-1 overflow-y-auto p-4 pt-2 space-y-3">
                
                {/* INCIDENT 1 - New / Critical - Red border */}
                <div 
                  onClick={() => setSelectedIncident({
                    id: "INC-002",
                    title: "Vehicle Accident",
                    status: "Critical",
                    address: "779 Maharlika Hwy, Brgy. Rizal, Santa Rosa, Nueva Ecija, PH, 3101",
                    coordinates: "15.428991, 120.938698",
                    reporter: "Juan Dela Cruz",
                    contact: "09998765437",
                    description: "Two vehicles collided along Maharlika Highway, causing traffic obstruction and minor injuries.",
                    timeline: ["Dispatch", "Resolve"]
                  })}
                  className="border-l-4 border-red-500 p-3 bg-[#F5F4FF] rounded-lg cursor-pointer hover:shadow-md transition"
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-medium text-red-600 bg-red-50 px-2 py-0.5 rounded">
                      New
                    </span>
                    <span className="text-xs text-gray-400">INC-002</span>
                  </div>
                  
                  <p className="text-[#262D31] font-semibold text-sm mb-2">
                    Vehicle Accident
                  </p>
                  
                  <div className="flex items-center gap-1 text-gray-500 text-xs mb-1">
                    <Icon icon="ic:outline-location-on" width="14" />
                    <span>Rizal (Poblacion)</span>
                  </div>
                  
                  <div className="flex items-center gap-1 text-gray-400 text-xs">
                    <Icon icon="material-symbols:calendar-clock-outline" width="14" />
                    <span>2026-03-02 16:39</span>
                  </div>
                </div>
                
                {/* INCIDENT 2 - Solved - Green border */}
                <div 
                  onClick={() => setSelectedIncident({
                    id: "INC-004",
                    title: "Road Obstruction",
                    status: "Solved",
                    address: "F. Magsaysay Rd.",
                    coordinates: "15.428991, 120.938698",
                    reporter: "Maria Santos",
                    contact: "09123456789",
                    description: "Fallen tree blocking the road.",
                  })}
                  className="border-l-4 border-green-500 p-3 bg-[#F5F4FF] rounded-lg cursor-pointer hover:shadow-md transition"
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded">
                      Solved
                    </span>
                    <span className="text-xs text-gray-400">INC-004</span>
                  </div>
                  
                  <p className="text-[#262D31] font-semibold text-sm mb-2">
                    Road Obstruction
                  </p>
                  
                  <div className="flex items-center gap-1 text-gray-500 text-xs mb-1">
                    <Icon icon="ic:outline-location-on" width="14" />
                    <span>Frt Magsaysay Rd.</span>
                  </div>
                  
                  <div className="flex items-center gap-1 text-gray-400 text-xs">
                    <Icon icon="material-symbols:calendar-clock-outline" width="14" />
                    <span>2026-02-26 11:39</span>
                  </div>
                </div>
                
                {/* INCIDENT 3 - On Scene - Yellow border */}
                <div 
                  onClick={() => setSelectedIncident({
                    id: "INC-007",
                    title: "Medical Emergency",
                    status: "On Scene",
                    address: "Lourdes",
                    coordinates: "15.428991, 120.938698",
                    reporter: "Robert Cruz",
                    contact: "09781234567",
                    description: "Elderly person experiencing chest pains.",
                  })}
                  className="border-l-4 border-yellow-500 p-3 bg-[#F5F4FF] rounded-lg cursor-pointer hover:shadow-md transition"
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-medium text-yellow-600 bg-yellow-50 px-2 py-0.5 rounded">
                      On Scene
                    </span>
                    <span className="text-xs text-gray-400">INC-007</span>
                  </div>
                  
                  <p className="text-[#262D31] font-semibold text-sm mb-2">
                    Medical Emergency
                  </p>
                  
                  <div className="flex items-center gap-1 text-gray-500 text-xs mb-1">
                    <Icon icon="ic:outline-location-on" width="14" />
                    <span>Lourdes</span>
                  </div>
                  
                  <div className="flex items-center gap-1 text-gray-400 text-xs">
                    <Icon icon="material-symbols:calendar-clock-outline" width="14" />
                    <span>2026-03-02 14:39</span>
                  </div>
                </div>

                {/* INCIDENT 4 - Pending - Orange border */}
                <div 
                  onClick={() => setSelectedIncident({
                    id: "INC-009",
                    title: "Fire Incident",
                    status: "Pending",
                    address: "Brgy. Dila-dila",
                    coordinates: "15.428991, 120.938698",
                    reporter: "Ana Reyes",
                    contact: "09234567890",
                    description: "Structure fire reported.",
                  })}
                  className="border-l-4 border-orange-500 p-3 bg-[#F5F4FF] rounded-lg cursor-pointer hover:shadow-md transition"
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-medium text-orange-600 bg-orange-50 px-2 py-0.5 rounded">
                      Pending
                    </span>
                    <span className="text-xs text-gray-400">INC-009</span>
                  </div>
                  
                  <p className="text-[#262D31] font-semibold text-sm mb-2">
                    Fire Incident
                  </p>
                  
                  <div className="flex items-center gap-1 text-gray-500 text-xs mb-1">
                    <Icon icon="ic:outline-location-on" width="14" />
                    <span>Brgy. Dila-dila</span>
                  </div>
                  
                  <div className="flex items-center gap-1 text-gray-400 text-xs">
                    <Icon icon="material-symbols:calendar-clock-outline" width="14" />
                    <span>2026-03-03 09:15</span>
                  </div>
                </div>
                
              </div>
            </div>
            
            {/* MAP - MIDDLE (always visible) */}
            <div className={`bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 flex-1`}>
              <iframe
                title="map"
                src="https://maps.google.com/maps?q=Santa%20Rosa,%20Nueva%20Ecija,%20Philippines&z=14&output=embed"
                className="w-full h-full min-h-[550px]"
              />
            </div>
            
            {/* DETAILS PANEL - RIGHT SIDE */}
            {selectedIncident && (
              <div className="w-96 flex-shrink-0 bg-white rounded-lg shadow-sm transition-all duration-300 animate-slide-in overflow-hidden">
                <IncidentDetails
                  data={selectedIncident}
                  onClose={() => setSelectedIncident(null)}
                />
              </div>
            )}
            
          </div>
        </div>
        
        <Outlet />
        
      </div>
    </DashboardLayout>
  );
}