import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CivilianDashboard from "./civiliandashboard";
import { Icon } from "@iconify/react";

export default function review() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const reportData = location.state || {
    location: {
      address: "12 Rizal, Santa Rosa, Nueva Ecija",
      coordinates: "15°25'35.6\"N 120°56'19.9\"E"
    },
    incidentDetails: {
      type: "Medical Emergency",
      victims: 1,
      reporter: "Anonymous"
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat vulputate nisl non suscipit. Aenean aliquam, nulla id efficitur laoreet, dui sapien volutpat libero, non dapibus elit felis id lorem."
  };

  const steps = [
    { number: 1, label: "Set Location", active: false },
    { number: 2, label: "Add Photo", active: false },
    { number: 3, label: "Incident Details", active: false },
    { number: 4, label: "Review & Submit", active: true }
  ];

  const handleSubmit = () => {
    console.log("Report submitted:", reportData);
    navigate("/submit");
  };

  const handleBack = () => {
    navigate("/details");
  };

  const handleCancel = () => {
    navigate("/civilian-dashboard");
  };

  return (
    <CivilianDashboard>
      <div className="min-h-screen bg-gray-100">
        <div className="w-full px-4 pt-4 pb-4">
          
          <div className="flex gap-4 items-start">
            
            {/* LEFT COLUMN */}
            <div className="w-80 flex-shrink-0 sticky top-4 self-start">
              <div className="mb-4">
                <div className="flex items-center gap-2">
                  <Icon icon="tabler:report" width="40" style={{ color: "#0E4B5E" }} />
                  <h1 className="text-[#474C53] font-semibold text-[40px]">
                    File Report
                  </h1>
                </div>
                <p className="text-[#5D7285] font-light text-base">
                  Complete all steps to submit your incident report to the Operations Command Center.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow">
                <div className="space-y-4">
                  {steps.map((step, index) => (
                    <div 
                      key={index} 
                      className={`flex items-center gap-3 p-3 rounded-lg ${
                        step.active ? 'bg-[#DFF1FF]' : ''
                      }`}
                    >
                      <div className={`w-7 h-7 flex items-center justify-center rounded-full text-sm font-medium ${
                        step.active ? 'bg-[#0C7FDA] text-white' : 'bg-[#15803D] text-white'
                      }`}>
                        {step.number}
                      </div>
                      <p className={`text-base ${
                        step.active ? 'text-[#0C7FDA] font-semibold' : 'text-[#262D31] text-2xl font-regular'
                      }`}>
                        {step.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="flex-1 min-w-0">
              
              <div className="flex justify-between items-center mb-3">
                <button 
                  onClick={handleBack}
                  className="flex items-center gap-1 text-[#474C53] text-2xl font-normal hover:text-blue-600 transition"
                >
                  <Icon icon="mdi:arrow-left" width="24" />
                  Back
                </button>
                <div className="flex items-center gap-4">
                  <p className="text-[#262D31] font-semibold text-[32px]">
                    Review & Submit
                  </p>
                  <p className="text-[#5D7285] font-light text-base">
                    Step 4 of 4
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-1">
                <Icon icon="mdi:clipboard-check" width="28" style={{ color: "#0C7FDA" }} />
                <h2 className="text-[#262D31] font-semibold text-[32px]">
                  Review & Submit
                </h2>
              </div>

              <p className="text-[#5D7285] font-light text-base mb-4">
                Review your report details before submitting.
              </p>

              <div className="bg-white rounded-xl shadow p-5">
                
                {/* Location Section */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon icon="mage:location-fill" width="20" style={{ color: "#0C7FDA" }} />
                    <h3 className="text-[#262D31] font-semibold text-xl">
                      Location
                    </h3>
                  </div>
                  <div className="space-y-2 pl-7">
                    <div className="flex gap-2 items-start">
                      <span className="text-[#656363] font-regular text-base w-28 flex-shrink-0">Address:</span>
                      <span className="text-[#262D31] font-medium text-base flex-1 break-words">
                        {reportData.location.address}
                      </span>
                    </div>
                    <div className="flex gap-2 items-start">
                      <span className="text-[#656363] font-regular text-base w-28 flex-shrink-0">Coordinates:</span>
                      <span className="text-[#262D31] font-medium text-base flex-1 break-words">
                        {reportData.location.coordinates}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Incident Details Section */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon icon="mdi:clipboard-list" width="20" style={{ color: "#0C7FDA" }} />
                    <h3 className="text-[#262D31] font-semibold text-xl">
                      Incident Details
                    </h3>
                  </div>
                  <div className="space-y-2 pl-7">
                    <div className="flex gap-2 items-start">
                      <span className="text-[#656363] font-regular text-base w-28 flex-shrink-0">Type:</span>
                      <span className="text-[#262D31] font-medium text-base flex-1 break-words">
                        {reportData.incidentDetails.type}
                      </span>
                    </div>
                    <div className="flex gap-2 items-start"> 
                      <span className="text-[#656363] font-regular text-base w-28 flex-shrink-0">Victim:</span>
                      <span className="text-[#262D31] font-medium text-base flex-1 break-words">
                        {reportData.incidentDetails.victims}
                      </span>
                    </div>
                    <div className="flex gap-2 items-start">
                      <span className="text-[#656363] font-regular text-base w-28 flex-shrink-0">Reporter:</span>
                      <span className="text-[#262D31] font-medium text-base flex-1 break-words">
                        {reportData.incidentDetails.reporter}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description Section */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon icon="mdi:text" width="20" style={{ color: "#0C7FDA" }} />
                    <h3 className="text-[#262D31] font-semibold text-xl">
                      Description
                    </h3>
                  </div>
                  <p className="text-[#5D7285] font-normal text-base pl-7 leading-relaxed break-words">
                    {reportData.description}
                  </p>
                </div>

                {/* Disclaimer */}
                <div className="flex items-start gap-2 p-3 bg-[#EFF8FF] rounded-lg mb-6">
                  <Icon icon="material-symbols:info" width="20" style={{ color: "#0C7FDA" }} className="flex-shrink-0 mt-0.5" />
                  <p className="text-[#8A8888] font-normal text-sm leading-relaxed">
                    By submitting, you confirm this report is accurate to the best of your knowledge. False reports delay real emergency responses.
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex justify-end gap-3 mt-6">
                  <button 
                    onClick={handleCancel}
                    className="text-[#656363] font-normal text-2xl hover:text-gray-800 transition"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={handleSubmit}
                    className="bg-[#0C7FDA] text-white font-normal text-2xl px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    Submit Report →
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </CivilianDashboard>
  );
}