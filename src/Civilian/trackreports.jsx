import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import CivilianDashboard from "./civiliandashboard";
import { useState } from "react";

export default function TrackReports() {
  const navigate = useNavigate();
  const [selectedIncident, setSelectedIncident] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Full incident data with all details
  const recentReports = [
    {
      id: "INC-002",
      title: "Vehicle Accident",
      location: "Rizal (Poblacion)",
      date: "March 02, 2026 - 16:39",
      status: "On Scene",
      type: "Vehicle Accident",
      reportedBy: "Juan Dela Cruz",
      casualties: "3 People",
      description: "Two vehicles collided along Maharlika Highway, causing traffic obstruction and minor injuries.",
      progress: {
        reported: true,
        verified: true,
        dispatched: true,
        onScene: true,
        resolved: false
      },
      team: {
        name: "Team Alpha",
        members: ["Team Captain", "Paramedic", "Driver"]
      },
      timeline: [
        { text: "Incident reported by Juan Dela Cruz via mobile app.", time: "09:14" },
        { text: "Report received and accepted by Rescue Team.", time: "09:16" },
        { text: "Team Alpha en route — ETA 4 min.", time: "09:17" }
      ],
      locationDetails: {
        address: "Santa Rosa-Tarlac Road, Santa Rosa, Nueva Ecija",
        coordinates: "15.428991, 120.938698"
      }
    },
    {
      id: "INC-004",
      title: "Road Obstruction",
      location: "F. Magsaysay Rd.",
      date: "February 26, 2026 - 11:39",
      status: "Resolved",
      type: "Road Obstruction",
      reportedBy: "Maria Santos",
      casualties: "0 People",
      description: "Fallen tree blocking the road. Road cleared and resolved.",
      progress: {
        reported: true,
        verified: true,
        dispatched: true,
        onScene: true,
        resolved: true
      },
      team: {
        name: "Team Bravo",
        members: ["Team Captain", "Driver"]
      },
      timeline: [
        { text: "Incident reported by Maria Santos via mobile app.", time: "11:39" },
        { text: "Report received and accepted by Rescue Team.", time: "11:42" },
        { text: "Team Bravo arrived on scene.", time: "11:50" },
        { text: "Road cleared and resolved.", time: "12:15" }
      ],
      locationDetails: {
        address: "F. Magsaysay Rd., Santa Rosa",
        coordinates: "15.428991, 120.938698"
      }
    },
    {
      id: "INC-007",
      title: "Medical Emergency",
      location: "Lourdes",
      date: "March 02, 2026 - 14:39",
      status: "On Scene",
      type: "Medical Emergency",
      reportedBy: "Robert Cruz",
      casualties: "1 Person",
      description: "Elderly person experiencing chest pains. Patient is stable.",
      progress: {
        reported: true,
        verified: true,
        dispatched: true,
        onScene: true,
        resolved: false
      },
      team: {
        name: "Team Charlie",
        members: ["Paramedic", "Driver"]
      },
      timeline: [
        { text: "Incident reported by Robert Cruz via mobile app.", time: "14:39" },
        { text: "Report received and accepted by Rescue Team.", time: "14:42" },
        { text: "Team Charlie en route — ETA 3 min.", time: "14:44" }
      ],
      locationDetails: {
        address: "Lourdes, Santa Rosa",
        coordinates: "15.428991, 120.938698"
      }
    },
    {
      id: "INC-009",
      title: "Fire Incident",
      location: "Brgy. Dila-dila",
      date: "March 03, 2026 - 09:15",
      status: "Pending",
      type: "Fire Incident",
      reportedBy: "Ana Reyes",
      casualties: "0 People",
      description: "Structure fire reported at residential area. Fire department notified.",
      progress: {
        reported: true,
        verified: false,
        dispatched: false,
        onScene: false,
        resolved: false
      },
      team: {
        name: "Team Delta",
        members: ["Team Captain", "Firefighter", "Driver"]
      },
      timeline: [
        { text: "Incident reported by Ana Reyes via mobile app.", time: "09:15" },
        { text: "Waiting for verification...", time: "09:16" }
      ],
      locationDetails: {
        address: "Brgy. Dila-dila, Santa Rosa",
        coordinates: "15.428991, 120.938698"
      }
    }
  ];

  const handleIncidentClick = (report) => {
    setSelectedIncident(report);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedIncident(null);
  };

  return (
    <CivilianDashboard>
      <div className="p-6 -mt-8">
        <div className="flex items-center gap-3">
          <Icon 
            icon="f7:person-2-fill"
            width="36" 
            style={{ color: "#0E4B5E" }}
          />
          <h1 className="text-3xl font-bold text-[#474C53]">
            Track Incident Report
          </h1>
        </div>
        <p className="text-[#5D7285] text-base mb-6">
          Enter your reference number to check the real-time status of your report.
        </p>
        
        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search Incident Name, ID, Reference Number."
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          />
        </div>
        
        {/* Reports List */}
        <div className="space-y-4">
          {recentReports.map((report) => (
            <div
              key={report.id}
              onClick={() => handleIncidentClick(report)}
              className="flex items-center gap-4 bg-[#F7F7F7] border border-gray-200 rounded-md px-5 py-4 hover:bg-gray-100 transition cursor-pointer"
            >
              {/* LEFT RED LINE */}
              <div className="w-[3px] self-stretch bg-red-500 rounded-full"></div>

              {/* CONTENT */}
              <div className="flex-1 flex justify-between items-center">
                {/* LEFT */}
                <div>
                  <h3 className="text-[#262D31] text-[26px] font-semibold mb-1">
                    {report.title}
                  </h3>

                  <div className="flex flex-col gap-1 text-[#5D7285] text-[14px] font-normal">
                    <div className="flex items-center gap-1">
                      <Icon icon="mdi:map-marker" width="14" />
                      <span>{report.location}</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <Icon icon="mdi:calendar" width="14" />
                      <span>{report.date}</span>
                    </div>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="flex flex-col items-end gap-2">
                  <span className="text-[#8B8A8A] text-[16px] font-normal">
                    {report.id}
                  </span>

                  <span className={`text-[14px] font-medium px-3 py-[2px] border rounded-lg ${
                    report.status === "Resolved" ? "text-green-600 bg-green-50 border-green-600" :
                    report.status === "On Scene" ? "text-[#DCA226] bg-[#FFFBDE] border-[#DCA226]" :
                    report.status === "Pending" ? "text-orange-600 bg-orange-50 border-orange-600" :
                    "text-red-600 bg-red-50 border-red-600"
                  }`}>
                    {report.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL POPUP - with z-index higher than sidebar (z-50) */}
      {showModal && selectedIncident && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black/50 z-[100]"
            onClick={handleCloseModal}
          ></div>

          {/* Modal Content */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
              
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="sticky top-0 float-right m-4 text-gray-400 hover:text-gray-600 text-2xl z-10 bg-white rounded-full p-1 w-8 h-8 flex items-center justify-center shadow-sm"
              >
                ✕
              </button>

              <div className="p-6 pt-0">
                {/* Header */}
                <div className="border-b border-gray-200 pb-4 mb-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-3">
                        <h1 className="text-3xl font-bold text-[#262D31]">
                          {selectedIncident.id}
                        </h1>
                        <span className={`text-sm px-3 py-1 rounded font-medium ${
                          selectedIncident.status === "Resolved" ? "bg-green-100 text-green-600" :
                          selectedIncident.status === "On Scene" ? "bg-yellow-100 text-yellow-600" :
                          selectedIncident.status === "Pending" ? "bg-orange-100 text-orange-600" :
                          "bg-red-100 text-red-600"
                        }`}>
                          {selectedIncident.status}
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm mt-1">
                        Submitted {selectedIncident.date}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Title & Location */}
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-[#262D31]">{selectedIncident.title}</h2>
                  <div className="flex items-center gap-1 text-gray-500 mt-1">
                    <Icon icon="mdi:map-marker" width="16" />
                    <span className="text-sm">{selectedIncident.location}</span>
                  </div>
                </div>

                {/* Response Progress */}
                <div className="bg-[#F8F9FA] rounded-lg p-6 border border-gray-200 mb-6">
                  <h3 className="font-semibold text-[#262D31] mb-4">Response Progress</h3>
                  <div className="flex items-center justify-between relative">
                    <div className="absolute left-0 right-0 h-1 bg-gray-200 top-1/2 -translate-y-1/2"></div>
                    <div 
                      className="absolute left-0 h-1 bg-green-500 top-1/2 -translate-y-1/2 transition-all duration-500"
                      style={{ 
                        width: `${Object.values(selectedIncident.progress).filter(v => v === true).length / Object.values(selectedIncident.progress).length * 100}%` 
                      }}
                    ></div>
                    
                    {[
                      { key: 'reported', label: 'Reported' },
                      { key: 'verified', label: 'Verified' },
                      { key: 'dispatched', label: 'Dispatched' },
                      { key: 'onScene', label: 'On Scene' },
                      { key: 'resolved', label: 'Resolved' }
                    ].map((step) => {
                      const isCompleted = selectedIncident.progress[step.key];
                      return (
                        <div key={step.key} className="flex flex-col items-center relative z-10">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            isCompleted ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-400'
                          }`}>
                            {isCompleted ? '✓' : ''}
                          </div>
                          <span className={`text-xs mt-2 font-medium ${
                            isCompleted ? 'text-green-600' : 'text-gray-400'
                          }`}>
                            {step.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-[#F8F9FA] rounded-lg p-4 border border-gray-200">
                      <h4 className="font-semibold text-[#262D31] mb-3">Incident Details</h4>
                      <div className="space-y-3">
                        <div>
                          <p className="text-xs text-gray-500">Type of Incident</p>
                          <p className="font-medium text-[#262D31]">{selectedIncident.type}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Reported by</p>
                          <p className="font-medium text-[#262D31]">{selectedIncident.reportedBy}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Victims / Casualties</p>
                          <p className="font-medium text-[#262D31]">{selectedIncident.casualties}</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#F8F9FA] rounded-lg p-4 border border-gray-200">
                      <h4 className="font-semibold text-[#262D31] mb-2">Description</h4>
                      <p className="text-sm text-[#5D7285] leading-relaxed">
                        {selectedIncident.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-[#F8F9FA] rounded-lg p-4 border border-gray-200">
                      <h4 className="font-semibold text-[#262D31] mb-2">Location Map</h4>
                      <div className="relative w-full h-48 rounded-lg overflow-hidden">
                        <iframe
                          title="incident-map"
                          src={`https://maps.google.com/maps?q=${selectedIncident.locationDetails.coordinates}&z=14&output=embed`}
                          className="w-full h-full"
                          allowFullScreen
                          loading="lazy"
                        />
                      </div>
                      <div className="mt-2 text-xs text-gray-400 flex justify-between">
                        <span>Map data ©2026 Google</span>
                        <span className="underline cursor-pointer">Terms of Use</span>
                      </div>
                    </div>

                    <div className="bg-[#F8F9FA] rounded-lg p-4 border border-gray-200">
                      <h4 className="font-semibold text-[#262D31] mb-2">{selectedIncident.team.name}</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedIncident.team.members.map((member, index) => (
                          <span
                            key={index}
                            className="text-xs bg-white px-3 py-1 rounded-full text-[#262D31] border border-gray-200"
                          >
                            {member}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Activity Timeline - Full Width */}
                <div className="mt-6 bg-[#F8F9FA] rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-[#262D31] mb-3">Activity Timeline</h4>
                  <div className="space-y-3">
                    {selectedIncident.timeline.map((item, index) => (
                      <div key={index} className="flex justify-between items-start border-b border-gray-200 pb-2 last:border-0">
                        <p className="text-sm text-[#5D7285]">{item.text}</p>
                        <span className="text-xs text-gray-400 whitespace-nowrap ml-4">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </CivilianDashboard>
  );
}