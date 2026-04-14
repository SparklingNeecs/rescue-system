import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CivilianDashboard from "./civiliandashboard";
import { Icon } from "@iconify/react";

export default function IncidentDetails() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    incidentType: "",
    victimsAffected: 0,
    description: "",
    name: "",
    contact: ""
  });

  const steps = [
    { number: 1, label: "Set Location", active: false },
    { number: 2, label: "Add Photo", active: false },
    { number: 3, label: "Incident Details", active: true },
    { number: 4, label: "Review & Submit", active: false }
  ];

  const incidentTypes = [
    "Select incident type",
    "Medical Emergency",
    "Fire Incident",
    "Vehicle Accident",
    "Road Obstruction",
    "Flooding",
    "Crime Incident",
    "Other"
  ];

  const handleNextStep = () => {
    navigate("/review");
  };

  const handleBack = () => {
    navigate("/addphoto");
  };

  const handleCancel = () => {
    navigate("/civilian-dashboard");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const incrementVictims = () => {
    setFormData(prev => ({
      ...prev,
      victimsAffected: prev.victimsAffected + 1
    }));
  };

  const decrementVictims = () => {
    setFormData(prev => ({
      ...prev,
      victimsAffected: Math.max(0, prev.victimsAffected - 1)
    }));
  };

  return (
    <CivilianDashboard>
      <div className="min-h-screen bg-gray-100">
        <div className="w-full px-4 pt-4 pb-4">
          
          <div className="flex gap-4 items-start">
            
            {/* LEFT COLUMN */}
            <div className="w-80 flex-shrink-0 sticky top-4 self-start">
              
              {/* File Report Header */}
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

              {/* Steps Card */}
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
                        step.active 
                          ? 'bg-[#0C7FDA] text-white'
                          : step.number < 3
                            ? 'bg-[#15803D] text-white'
                            : 'bg-[#656363] text-white'
                      }`}>
                        {step.number}
                      </div>
                      <p className={`text-base ${
                        step.active 
                          ? 'text-[#0C7FDA] font-semibold'
                          : step.number < 3
                            ? 'text-[#262D31] text-2xl font-regular'
                            : 'text-[#5D7285] font-light'
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
              
              {/* Top Bar */}
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
                    Incident Details
                  </p>
                  <p className="text-[#5D7285] font-light text-base">
                    Step 3 of 4
                  </p>
                </div>
              </div>

              {/* Incident Details Header */}
              <div className="flex items-center gap-2 mb-1">
                <Icon icon="mdi:clipboard-list" width="28" style={{ color: "#0C7FDA" }} />
                <h2 className="text-[#262D31] font-semibold text-[32px]">
                  Incident Details
                </h2>
              </div>

              <p className="text-[#5D7285] font-light text-base mb-4">
                Provide accurate information so the right resources can be deployed.
              </p>

              {/* White Card */}
              <div className="bg-white rounded-xl shadow p-5">
                
                {/* Row: Incident Type + Victims Affected - side by side */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  
                  {/* Incident Type with dropdown icon */}
                  <div>
                    <label className="text-[#656363] font-regular text-xl block mb-2">
                      Incident type
                    </label>
                    <div className="relative">
                      <select
                        name="incidentType"
                        value={formData.incidentType}
                        onChange={handleChange}
                        className="w-full p-3 rounded-lg border border-[#D3D2DE] text-[#5D7285] text-base focus:outline-none focus:border-[#0C7FDA] bg-white appearance-none"
                      >
                        {incidentTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <Icon icon="ri:arrow-down-s-line" width="20" style={{ color: "#656363" }} />
                      </div>
                    </div>
                  </div>

                  {/* Victims Affected */}
                  <div>
                    <label className="text-[#656363] font-regular text-xl block mb-2">
                      Victims affected
                    </label>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={decrementVictims}
                        className="w-10 h-10 rounded-lg border border-[#D3D2DE] flex items-center justify-center text-[#656363] text-xl hover:bg-gray-50"
                      >
                        -
                      </button>
                      <span className="w-16 text-center text-[#262D31] font-semibold text-xl">
                        {formData.victimsAffected}
                      </span>
                      <button
                        type="button"
                        onClick={incrementVictims}
                        className="w-10 h-10 rounded-lg border border-[#D3D2DE] flex items-center justify-center text-[#656363] text-xl hover:bg-gray-50"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-4">
                  <label className="text-[#656363] font-regular text-xl block mb-2">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="2"
                    placeholder="Describe what is happening."
                    className="w-full p-3 rounded-lg border border-[#D3D2DE] text-[#5D7285] font-light text-sm focus:outline-none focus:border-[#0C7FDA] resize-none"
                  />
                </div>

                {/* Your Name and Contact Number - Side by side */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="text-[#656363] font-regular text-lg block mb-2">
                      Your Name <span className="text-[#5D7285] font-light">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Juan"
                      className="w-full p-3 rounded-lg border border-[#D3D2DE] text-[#5D7285] font-light text-lg focus:outline-none focus:border-[#0C7FDA]"
                    />
                  </div>

                  <div>
                    <label className="text-[#656363] font-regular text-lg block mb-2">
                      Your Contact Number <span className="text-[#5D7285] font-light">(Optional)</span>
                    </label>
                    <input
                      type="tel"
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                      placeholder="+63 9XX XXX XXXX"
                      className="w-full p-3 rounded-lg border border-[#D3D2DE] text-[#5D7285] font-light text-lg focus:outline-none focus:border-[#0C7FDA]"
                    />
                  </div>
                </div>

                {/* Info Text */}
                <div className="flex items-center gap-2 p-3 bg-[#EFF8FF] rounded-lg mb-6">
                  <Icon icon="material-symbols:info" width="20" style={{ color: "#0C7FDA" }} />
                  <p className="text-[#8A8888] font-normal text-base">
                    Your contact information can help the team follow up if needed.
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
                    onClick={handleNextStep}
                    className="bg-[#C6E6FF] text-[#656363] font-normal text-2xl px-6 py-2 rounded-lg hover:bg-blue-200 transition"
                  >
                    Next Step →
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