import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import DashboardLayout from "./mrtlayout";

// Approved volunteers data (Roster)
const rosterVolunteers = [
  {
    id: 1,
    volunteerId: "V-0861",
    name: "Mark Chavez",
    role: "First Aid Volunteer",
    experience: "1 Year Experience",
    location: "Brgy. Isla, Nueva Ecija",
    status: "On Scene",
    statusColor: "text-red-500 bg-red-50 border-red-200",
    statusDot: "bg-red-500",
    specialty: ["First Aid", "BLS/CPR", "EMT-B"],
    assignment: "INC-004",
    assignmentTitle: "Vehicle Accident",
    eta: "2 Mins",
    contact: "09123456789",
    email: "mark.chavez@email.com",
    yearsActive: "1 Year",
    availability: "M, T, W, TH, F",
    certifications: ["BLS/CPR", "First Aid"],
    skills: ["Basic Life Support", "Emergency Driving", "First Aid"],
    recentIncidents: [
      { id: "INC-004", title: "Vehicle Accident", date: "Today - 10:30", status: "On Scene" }
    ]
  },
  {
    id: 2,
    volunteerId: "V-0862",
    name: "Kyla Tala",
    role: "Transportation Support",
    experience: "7 Years",
    location: "Brgy. Isla, Nueva Ecija",
    status: "En Route",
    statusColor: "text-yellow-500 bg-yellow-50 border-yellow-200",
    statusDot: "bg-yellow-500",
    specialty: ["Emergency Driving", "CDL - Pro", "BLS/CPR", "Logistics"],
    assignment: "INC-0322",
    assignmentTitle: "Structure Fire",
    eta: "2 mins",
    contact: "09887655680",
    email: "kyla.tala@email.com",
    yearsActive: "7 Years",
    availability: "M, T, W, TH, F",
    certifications: ["BLS/CPR", "First Aid", "EMT-B"],
    skills: ["Patient Triage", "Wound Care", "IV Administration"],
    recentIncidents: [
      { id: "INC-0322", title: "Structure Fire", date: "Today - 9:54", status: "En Route" },
      { id: "INC-862", title: "Medical Emergency", date: "11/25/25 - 13:24", status: "Resolved" }
    ]
  },
  {
    id: 3,
    volunteerId: "V-0863",
    name: "Rio de Carpio",
    role: "Logistics Support",
    experience: "3 Years Experience",
    location: "Brgy. Isla, Nueva Ecija",
    status: "Available",
    statusColor: "text-green-500 bg-green-50 border-green-200",
    statusDot: "bg-green-500",
    specialty: ["Emergency Driving", "CDL - Pro", "Logistics"],
    assignment: null,
    assignmentTitle: null,
    eta: null,
    contact: "09123456780",
    email: "rio.carpio@email.com",
    yearsActive: "3 Years",
    availability: "M, T, W, TH, F",
    certifications: ["CDL", "First Aid"],
    skills: ["Logistics", "Emergency Driving"],
    recentIncidents: []
  },
  {
    id: 4,
    volunteerId: "V-0864",
    name: "Rambo Moreno",
    role: "Search Assistance Volunteer",
    experience: "2 Years Experience",
    location: "Brgy. Isla, Nueva Ecija",
    status: "Stand By",
    statusColor: "text-blue-500 bg-blue-50 border-blue-200",
    statusDot: "bg-blue-500",
    specialty: ["BLS/CPR", "Emergency Driving", "CDL - Pro"],
    assignment: null,
    assignmentTitle: null,
    eta: null,
    contact: "09123456781",
    email: "rambo.moreno@email.com",
    yearsActive: "2 Years",
    availability: "M, T, W, TH, F",
    certifications: ["BLS/CPR", "First Aid", "EMT-B"],
    skills: ["Search and Rescue", "First Aid"],
    recentIncidents: []
  },
];

const applicants = [
  {
    id: 5,
    name: "Mark Chavez",
    role: "First Aid Volunteer",
    experience: "1 Year Experience",
    location: "Brgy. Isla, Nueva Ecija",
    age: 28,
    email: "mark.chavez@email.com",
    contact: "09123456789",
    availability: "M, T, W, TH, F",
    preferredRole: "First Aid Volunteer",
    certifications: ["BLS/CPR", "First Aid"],
    skills: ["Basic Life Support", "Emergency Driving", "First Aid"],
    files: ["BLS-cert.pdf", "FA-cert.pdf"],
    status: "Pending Application",
    appliedDate: "March 23, 2027"
  },
  {
    id: 6,
    name: "Kyla Tala",
    role: "First Aid Volunteer",
    experience: "1 Year Experience",
    location: "Brgy Isla, NE",
    age: 29,
    email: "abakada@gmail.com",
    contact: "09887655680",
    availability: "M, W, SA, SU",
    preferredRole: "Paramedic",
    certifications: ["BLS/CPR", "First Aid", "EMT-B"],
    skills: ["Patient Triage", "Wound Care", "IV Administration"],
    files: ["OFA-cert.pdf", "EMT-cert.pdf", "FA-cert.pdf"],
    status: "Pending Application",
    appliedDate: "March 23, 2027"
  },
];

// Helper function to truncate specialty with +N
const getDisplaySpecialty = (specialty, maxDisplay = 3) => {
  if (specialty.length <= maxDisplay) {
    return { display: specialty, remaining: 0 };
  }
  const display = specialty.slice(0, maxDisplay);
  const remaining = specialty.length - maxDisplay;
  return { display, remaining };
};

export default function Volunteer() {
  const [selected, setSelected] = useState(null);
  const [activeTab, setActiveTab] = useState("roster");
  const [selectedRoster, setSelectedRoster] = useState(null);
  const navigate = useNavigate();

  const getStatusColor = (status) => {
    switch (status) {
      case "On Scene":
        return "text-red-500 bg-red-50 border-red-200";
      case "En Route":
        return "text-yellow-500 bg-yellow-50 border-yellow-200";
      case "Available":
        return "text-green-500 bg-green-50 border-green-200";
      case "Stand By":
        return "text-blue-500 bg-blue-50 border-blue-200";
      default:
        return "text-gray-500 bg-gray-50 border-gray-200";
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "On Scene": return "bg-orange-100 text-orange-700";
      case "En Route": return "bg-blue-100 text-blue-700";
      case "Available": return "bg-green-100 text-green-700";
      case "Stand By": return "bg-yellow-100 text-yellow-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusDot = (status) => {
    switch (status) {
      case "On Scene":
        return "bg-red-500";
      case "En Route":
        return "bg-yellow-500";
      case "Available":
        return "bg-green-500";
      case "Stand By":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  const handleViewFullApplication = (applicant) => {
    setSelected(applicant);
  };

  const handleAccept = (applicant) => {
    console.log("Accepted:", applicant);
  };

  const handleReject = (applicant) => {
    console.log("Rejected:", applicant);
  };

  const handleAcceptPanel = () => {
    if (selected) {
      console.log("Accepted from panel:", selected);
      setSelected(null);
    }
  };

  const handleRejectPanel = () => {
    if (selected) {
      console.log("Rejected from panel:", selected);
      setSelected(null);
    }
  };

  const handleRosterClick = (volunteer) => {
    setSelectedRoster(volunteer);
  };

  const handleCloseRosterPanel = () => {
    setSelectedRoster(null);
  };

  return (
    <DashboardLayout>
      <div className="flex h-full overflow-hidden -mt-8">
        
        {/* LEFT SIDE */}
        <div className="flex-1 p-6 overflow-y-auto">
          
          {/* HEADER */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold flex items-center gap-2">
                👥 Volunteers
              </h2>
              <p className="text-sm text-gray-500">
                Volunteer roster & deployment status
              </p>
            </div>
            
            <div className="relative">
              <input
                placeholder="Search ID, type, location..."
                className="border px-3 py-2 rounded-md text-sm w-[250px] pl-8"
              />
              <Icon 
                icon="material-symbols:search" 
                className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
              />
            </div>
          </div>
          
          {/* TABS */}
          <div className="flex gap-6 border-b mb-4">
            <button 
              onClick={() => setActiveTab("roster")}
              className={`pb-2 ${activeTab === "roster" ? "border-b-2 border-blue-500 font-semibold" : "text-gray-500"}`}
            >
              Roster
            </button>
            <button 
              onClick={() => setActiveTab("applicant")}
              className={`pb-2 ${activeTab === "applicant" ? "border-b-2 border-blue-500 font-semibold" : "text-gray-500"}`}
            >
              Applicant
            </button>
          </div>
          
          {/* STATS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {[
              {
                label: "Total Volunteers",
                value: rosterVolunteers.length,
                progress: "100%",
                color: "bg-gray-500",
              },
              {
                label: "Active",
                value: rosterVolunteers.filter(v => v.status === "On Scene" || v.status === "En Route").length,
                progress: "50%",
                color: "bg-green-600",
              },
              {
                label: "Deployed",
                value: rosterVolunteers.filter(v => v.status === "On Scene").length,
                progress: "25%",
                color: "bg-orange-500",
              },
              {
                label: "Stand By",
                value: rosterVolunteers.filter(v => v.status === "Stand By" || v.status === "Available").length,
                progress: "25%",
                color: "bg-blue-500",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#F5F6F8] border border-gray-200 rounded-lg p-4"
              >
                <div className="flex items-center gap-3">
                  <h2 className="text-3xl font-semibold text-gray-700">
                    {item.value}
                  </h2>
                  <p className="text-sm text-gray-600">
                    {item.label}
                  </p>
                </div>
                <div className="mt-2 w-full h-1.5 bg-gray-300 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${item.color} rounded-full`}
                    style={{ width: item.progress }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Filters */}
          <div className="flex gap-4 mb-4">
            <select className="border rounded-md px-3 py-2 text-sm bg-white">
              <option>Status</option>
              <option>All Roles</option>
            </select>
            <select className="border rounded-md px-3 py-2 text-sm bg-white">
              <option>Role</option>
              <option>All Roles</option>
            </select>
          </div>
          
          {/* ROSTER TAB CONTENT */}
{/* ROSTER TAB */}
{activeTab === "roster" && (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {rosterVolunteers.map((volunteer) => {
      const { display, remaining } = getDisplaySpecialty(volunteer.specialty, 3);
      return (
        <div
          key={volunteer.id}
          className="bg-white rounded-xl shadow border border-gray-100 hover:shadow-md transition cursor-pointer overflow-hidden"
          onClick={() => handleRosterClick(volunteer)}
        >
          {/* Orange Top Bar */}
          <div className="h-2 bg-orange-500" />

          <div className="p-4"> {/* Reduced padding */}
            {/* Profile Picture + Name + Role + Status */}
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center text-3xl flex-shrink-0">
                👤
              </div>

              <div className="flex-1 pt-0.5">
                <h3 className="font-semibold text-[20px] text-[#262D31] leading-tight">
                  {volunteer.name}
                </h3>
                <p className="text-gray-600 text-[14px] mt-0.5">{volunteer.role}</p>

                {/* Status */}
                <div className="mt-2 inline-flex items-center gap-1.5 bg-orange-100 text-orange-700 px-3 py-0.5 rounded-full text-[12px] font-medium">
                  <span className="w-2 h-2 rounded-full bg-orange-500" />
                  {volunteer.status}
                </div>
              </div>
            </div>

            <div className="border-t my-4" /> {/* Reduced margin */}

            {/* Specialty */}
            <div>
              <p className="text-gray-500 text-[14px] font-medium mb-2">Specialty</p>
              <div className="flex flex-wrap items-center gap-2">
                {display.map((item, i) => (
                  <span
                    key={i}
                    className="text-[12px] font-medium bg-blue-100 text-blue-700 px-3 py-1 rounded-lg"
                  >
                    {item}
                  </span>
                ))}
                {remaining > 0 && (
                  <span className="text-[12px] font-medium text-gray-400">+{remaining}</span>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          {volunteer.assignment && (
            <div className="border-t bg-gray-50 px-5 py-3 flex items-center justify-between text-[14px]">
              <div>
                <span className="text-gray-500">Assignment: </span>
                <span className="font-semibold text-blue-600">{volunteer.assignment}</span>
              </div>
              <div className="font-semibold text-orange-600">
                ETA {volunteer.eta}
              </div>
            </div>
          )}
        </div>
      );
    })}
  </div>
)}
          
          {/* APPLICANT TAB CONTENT */}
          {activeTab === "applicant" && (
            <>
              {applicants.map((app) => (
                <div key={app.id} className="bg-white p-4 rounded-lg shadow mb-4">
                  <h3 className="font-semibold text-lg">{app.name}</h3>
                  <p className="text-sm text-gray-500">
                    {app.role} · {app.experience}
                  </p>
                  <p className="text-xs text-gray-400">{app.location}</p>
                  
                  <div className="mt-2 flex gap-2 flex-wrap">
                    {app.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex mt-4 border-t pt-3 text-sm">
                    <button
                      onClick={() => handleViewFullApplication(app)}
                      className="flex-1 text-gray-600 border-r hover:text-blue-600 flex items-center justify-center gap-1"
                    >
                      <Icon icon="material-symbols:search" className="w-4 h-4" />
                      View Full Application
                    </button>
                    
                    <button 
                      onClick={() => handleAccept(app)}
                      className="flex-1 text-green-600 hover:text-green-700 flex items-center justify-center gap-1"
                    >
                      <Icon icon="material-symbols:check" className="w-4 h-4" />
                      Accept
                    </button>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
        
        {/* RIGHT PANEL - Roster Details */}
        {activeTab === "roster" && (
          <div className="w-[450px] border-l bg-white flex flex-col">
            {selectedRoster ? (
              <div className="h-full flex flex-col">
                {/* HEADER */}
                <div className="p-4 border-b relative">
                  <button
                    onClick={handleCloseRosterPanel}
                    className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </button>

                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-3xl flex-shrink-0 border-2 border-blue-500 relative">
                      👤
                      <div className={`w-4 h-4 rounded-full absolute bottom-1 right-1 border-2 border-white ${getStatusDot(selectedRoster.status)}`} />
                    </div>

                    <div className="pt-1">
                      <h2 className="text-xl font-semibold text-[#262D31]">{selectedRoster.name}</h2>
                      <p className="text-gray-600">{selectedRoster.role}</p>
                      <div className="mt-3">
                        <span className={`inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-sm font-medium ${getStatusBadge(selectedRoster.status)}`}>
                          <span className="w-2 h-2 rounded-full bg-current" />
                          {selectedRoster.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="flex-1 overflow-y-auto p-4 space-y-6 text-sm">
                  <Section title="Profile">
                    <InfoRow label="Volunteer ID" value={selectedRoster.volunteerId} />
                    <InfoRow label="Contact" value={selectedRoster.contact} />
                    <InfoRow label="Years Active" value={selectedRoster.yearsActive} />
                    <InfoRow label="Current Assignment" value={selectedRoster.assignment || "None"} />
                  </Section>

                  <Section title="Specialty">
                    <div className="flex flex-wrap gap-2 pt-3">
                      {selectedRoster.specialty?.map((item, i) => (
                        <span key={i} className="px-4 py-2 bg-blue-100 text-blue-700 rounded-xl text-sm font-medium">
                          {item}
                        </span>
                      ))}
                    </div>
                  </Section>

                  {selectedRoster.recentIncidents?.length > 0 && (
                    <Section title="Recent Incidents">
                      <div className="pt-2 space-y-4">
                        {selectedRoster.recentIncidents.map((inc, i) => (
                          <div key={i} className="border-b pb-4 last:border-b-0">
                            <p className="font-medium">{inc.title}</p>
                            <p className="text-xs text-gray-500">{inc.id} • {inc.date}</p>
                          </div>
                        ))}
                      </div>
                    </Section>
                  )}

                  <Section title="Certification and Skills">
                    <div className="pt-3 space-y-6">
                      <div>
                        <p className="text-xs text-gray-500 mb-2">Certifications</p>
                        <div className="flex flex-wrap gap-2">
                          {selectedRoster.certifications?.map((c, i) => (
                            <span key={i} className="px-4 py-2 bg-blue-100 text-blue-700 rounded-xl text-sm">{c}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-2">Skills</p>
                        <div className="flex flex-wrap gap-2">
                          {selectedRoster.skills?.map((s, i) => (
                            <span key={i} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl text-sm">{s}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Section>
                </div>

                {/* ACTION BUTTONS */}
                <div className="p-4 border-t flex gap-3">
                  <button className="flex-1 py-3 bg-red-600 text-white rounded-lg font-medium">Dispatch</button>
                  <button className="flex-1 py-3 border border-gray-300 rounded-lg font-medium">Stand by</button>
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-gray-400">
                <div className="text-center">
                  <p className="font-semibold">No Selection</p>
                  <p className="text-sm">Click a volunteer card on the left</p>
                </div>
              </div>
            )}
          </div>
        )}      `


        {/* RIGHT PANEL - Applicant Details */}
        {activeTab === "applicant" && (
          <div className="w-[450px] border-l bg-white flex flex-col">
            {selected ? (
              <div className="h-full flex flex-col">
                {/* HEADER */}
                <div className="p-4 border-b relative">
                  <button
                    onClick={() => setSelected(null)}
                    className="absolute top-3 right-3 text-gray-400 text-xl"
                  >
                    ✕
                  </button>

                  <div className="flex items-start gap-3">
                    <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center text-2xl flex-shrink-0">
                      👤
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold text-[#262D31]">
                        {selected.name}
                      </h2>
                      <p className="text-sm text-gray-500">
                        {selected.role} · {selected.experience}
                      </p>
                      <p className="text-xs text-gray-400">
                        Applied {selected.appliedDate || "March 23, 2027"}
                      </p>
                      <span className="inline-block mt-1 text-xs px-2 py-1 rounded border border-yellow-400 bg-[#FFF6DE] text-[#FBBC05] font-medium">
                        {selected.status || "Pending Application"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="flex-1 overflow-y-auto text-sm text-left p-4">
                  <div className="border-t border-[#DFDFF0]">
                    <div className="bg-[#EBEDFA] px-3 py-2 font-medium text-[#656363] border-y border-[#DFDFF0]">
                      Personal Information
                    </div>
                    <div className="space-y-2 p-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500 w-32">Age</span>
                        <span className="font-medium">{selected.age}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500 w-32">Email</span>
                        <span className="font-medium">{selected.email}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500 w-32">Contact</span>
                        <span className="font-medium">{selected.contact}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500 w-32">Location</span>
                        <span className="font-medium">{selected.location}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500 w-32">Availability</span>
                        <span className="font-medium">{selected.availability}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500 w-32">Preferred Role</span>
                        <span className="font-medium">{selected.preferredRole}</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-[#DFDFF0]">
                    <div className="bg-[#EBEDFA] px-3 py-2 font-medium text-[#656363] border-y border-[#DFDFF0]">
                      Certifications
                    </div>
                    <div className="flex flex-wrap gap-2 p-3">
                      {selected.certifications?.map((cert, i) => (
                        <span key={i} className="text-xs px-2 py-1 rounded border border-[#4285F4] text-[#4285F4] bg-[#CBE8FF]">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-[#DFDFF0]">
                    <div className="bg-[#EBEDFA] px-3 py-2 font-medium text-[#656363] border-y border-[#DFDFF0]">
                      Skills
                    </div>
                    <div className="flex flex-wrap gap-2 p-3">
                      {selected.skills?.map((skill, i) => (
                        <span key={i} className="text-xs px-2 py-1 rounded bg-gray-200 text-gray-600">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-[#DFDFF0]">
                    <div className="bg-[#EBEDFA] px-3 py-2 font-medium text-[#656363] border-y border-[#DFDFF0]">
                      Uploaded Certifications
                    </div>
                    <div className="flex flex-wrap gap-2 p-3">
                      {selected.files?.map((file, i) => (
                        <span key={i} className="text-xs px-2 py-1 rounded border border-[#DC5656] text-[#DC5656] flex items-center gap-1">
                          📄 {file}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* ACTION BUTTONS */}
                <div className="flex justify-between items-center p-3 border-t border-[#DFDFF0] bg-white">
                  <button 
                    onClick={handleRejectPanel}
                    className="px-3 py-1.5 text-sm font-normal border border-red-400 text-red-500 rounded hover:bg-red-50 flex items-center gap-1"
                  >
                    <Icon icon="material-symbols:close" className="w-4 h-4" />
                    Reject
                  </button>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={() => setSelected(null)}
                      className="px-3 py-1.5 text-sm font-normal border border-[#DFDFF0] text-gray-600 rounded hover:bg-gray-100"
                    >
                      Close
                    </button>
                    
                    <button 
                      onClick={handleAcceptPanel}
                      className="px-3 py-1.5 text-sm font-normal bg-green-600 text-white rounded hover:bg-green-700 flex items-center gap-1"
                    >
                      <Icon icon="material-symbols:check" className="w-4 h-4" />
                      Accept
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-gray-400 text-center">
                <div>
                  <p className="font-semibold">No Selection</p>
                  <p className="text-sm">
                    Click "View Full Application" to see applicant details.
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
        
      </div>
    </DashboardLayout>
  );
  function Section({ title, children }) {
    return (
      <div className="border-t border-[#DFDFF0]">
        <div className="bg-[#EBEDFA] px-4 py-3 font-medium text-[#656363]">
          {title}
        </div>
        {children}
      </div>
    );
  }

  function InfoRow({ label, value }) {
    return (
      <div className="flex justify-between px-4 py-3 border-t border-[#DFDFF0]">
        <span className="text-gray-500 w-40">{label}</span>
        <span className="font-medium text-right">{value}</span>
      </div>
    );
  }
}