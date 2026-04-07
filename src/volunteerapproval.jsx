import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ApplicantDetails from "./applicantdetails";
import DashboardLayout from "./dashboardlayout";

const applicants = [
  {
    id: 1,
    name: "Mark Chavez",
    role: "First Aid Volunteer",
    experience: "1 Year Experience",
    location: "Brgy. Isla, Nueva Ecija",
    skills: ["Basic Life Support", "Emergency Driving"],
  },
  {
    id: 2,
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
  },
];

export default function VolunteerApproval() {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const handleViewFullApplication = (applicant) => {
    navigate(`/applicant-details/${applicant.id}`);
  };

  const handleAccept = (applicant) => {
    // Add your accept logic here
    console.log("Accepted:", applicant);
    // Optionally navigate or refresh
  };

  const handleReject = (applicant) => {
    // Add your reject logic here
    console.log("Rejected:", applicant);
    // Optionally navigate or refresh
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

  return (
    <DashboardLayout>

      <div className="flex h-full overflow-hidden">

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

            <input
              placeholder="Search ID, type, location..."
              className="border px-3 py-2 rounded-md text-sm w-[250px]"
            />
          </div>

          {/* TABS */}
          <div className="flex gap-6 border-b mb-4">
            <button className="text-gray-500">Roster</button>
            <button className="border-b-2 border-blue-500 pb-1 font-semibold">
              Applicant
            </button>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {[
              {
                label: "Total Applicants",
                value: 3,
                progress: "100%",
                color: "bg-gray-500",
              },
              {
                label: "Pending Review",
                value: 2,
                progress: "60%",
                color: "bg-orange-500",
              },
              {
                label: "Accepted",
                value: 1,
                progress: "30%",
                color: "bg-green-600",
              },
              {
                label: "Rejected",
                value: 0,
                progress: "0%",
                color: "bg-gray-400",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#F5F6F8] border border-gray-200 rounded-lg p-4"
              >
                {/* TOP */}
                <div className="flex items-center gap-3">
                  <h2 className="text-3xl font-semibold text-gray-700">
                    {item.value}
                  </h2>
                  <p className="text-sm text-gray-600">
                    {item.label}
                  </p>
                </div>

                {/* PROGRESS */}
                <div className="mt-2 w-full h-1.5 bg-gray-300 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${item.color} rounded-full`}
                    style={{ width: item.progress }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* LIST */}
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
                  className="flex-1 text-gray-600 border-r hover:text-blue-600"
                >
                  🔍 View Full Application
                </button>

                <button 
                  onClick={() => handleAccept(app)}
                  className="flex-1 text-green-600 hover:text-green-700"
                >
                  ✔ Accept
                </button>

                <button 
                  onClick={() => handleReject(app)}
                  className="flex-1 text-red-500 hover:text-red-600"
                >
                  ✖ Reject
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT PANEL */}
        <div className="w-[400px] border-l bg-white flex flex-col">

          {selected ? (
            <>
              <div className="flex-1 overflow-y-auto">
                <ApplicantDetails
                  data={selected}
                  onClose={() => setSelected(null)}
                />
              </div>

              <div className="flex justify-between items-center p-3 border-t border-[#DFDFF0] bg-white">

                {/* LEFT */}
                <button 
                  onClick={handleRejectPanel}
                  className="px-3 py-1.5 text-sm font-normal border border-red-400 text-red-500 rounded hover:bg-red-50"
                >
                  ✖ Reject
                </button>

                {/* RIGHT */}
                <div className="flex gap-2">
                  <button
                    onClick={() => setSelected(null)}
                    className="px-3 py-1.5 text-sm font-normal border border-[#DFDFF0] text-gray-600 rounded hover:bg-gray-100"
                  >
                    Close
                  </button>

                  <button 
                    onClick={handleAcceptPanel}
                    className="px-3 py-1.5 text-sm font-normal bg-green-600 text-white rounded hover:bg-green-700"
                  >
                    ✔ Accept
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400 text-center">
              <div>
                <p className="font-semibold">No Selection</p>
                <p className="text-sm">
                  Click a volunteer card to view details.
                </p>
              </div>
            </div>
          )}

        </div>

      </div>

    </DashboardLayout>
  );
}