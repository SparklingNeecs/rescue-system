import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CivilianDashboard from "./civiliandashboard";
import { Icon } from "@iconify/react";

export default function Step1(){
  const navigate = useNavigate();
  const [hasPermission, setHasPermission] = useState(false);
  const [specificDetails, setSpecificDetails] = useState("");

  const steps = [
    { number: 1, label: "Set Location", active: true },
    { number: 2, label: "Add Photo", active: false },
    { number: 3, label: "Incident Details", active: false },
    { number: 4, label: "Review & Submit", active: false }
  ];

  const handleAllowLocation = () => {
    setHasPermission(true);
  };

  const handleNextStep = () => {
    navigate("/addphoto");
  };

  const handleBackToHome = () => {
    navigate("/civilian-dashboard");
  };

  const handleCancel = () => {
    navigate("/civilian-dashboard");
  };

  return (
    <CivilianDashboard>
      <div className="min-h-screen bg-gray-100">
        <div className="w-full px-4 pt-4 pb-4">  {/* Changed: pt-4 instead of pt-0 with negative margin */}
          
          <div className="flex gap-4 items-start">
            
            {/* LEFT COLUMN */}
            <div className="w-80 flex-shrink-0 sticky top-4 self-start">
              
              {/* File Report Header */}
              <div className="mb-4">  {/* Removed -mt-[28px] */}
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
                        step.active ? 'bg-[#0C7FDA] text-white' : 'bg-[#656363] text-[#FAFAFF]'
                      }`}>
                        {step.number}
                      </div>
                      <p className={`text-base ${
                        step.active ? 'text-[#0C7FDA] font-semibold' : 'text-[#656363] font-normal'
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
                  onClick={handleBackToHome}
                  className="flex items-center gap-1 text-[#474C53] text-2xl font-normal hover:text-blue-600 transition"
                >
                  <Icon icon="mdi:arrow-left" width="24" />
                  Back to home
                </button>

                <div className="flex items-center gap-4">
                  <p className="text-[#262D31] font-semibold text-[32px]">
                    Set Location
                  </p>
                  <p className="text-[#5D7285] font-light text-base">
                    Step 1 of 4
                  </p>
                </div>
              </div>

              {/* Set Incident Location Header */}
              <div className="flex items-center gap-2 mb-1">
                <Icon icon="mage:location-fill" width="28" style={{ color: "#0C7FDA" }} />
                <h2 className="text-[#262D31] font-semibold text-[32px]">
                  Set Incident Location
                </h2>
              </div>

              <p className="text-[#5D7285] font-light text-base mb-3">
                We'll use your device location to pinpoint the incident. You can also drag the map pin to adjust the exact position.
              </p>

              {/* White Card */}
              <div className="bg-white rounded-xl shadow p-5">
                
                {/* MAP */}
                <div className="relative">
                  <div className="h-80 bg-gray-200 rounded-lg overflow-hidden">
                    <iframe
                      title="map"
                      src="https://maps.google.com/maps?q=Santa%20Rosa,%20Nueva%20Ecija,%20Philippines&z=14&output=embed"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="absolute top-2 right-2 bg-white rounded shadow text-xs">
                    <button className="px-3 py-1 border-r">Map</button>
                    <button className="px-3 py-1">Satellite</button>
                  </div>
                </div>
                <p className="text-[10px] text-gray-400 mt-1 text-right">
                  Sta. Rosa Nueva Ecija Map
                </p>

                {/* Location Details */}
                {hasPermission && (
                  <>
                    <div className="mt-4 mb-4">
                      <div className="flex items-center gap-2 mb-1">
                        <Icon icon="mage:location-fill" width="16" style={{ color: "#0C7FDA" }} />
                        <p className="text-[#5D7285] font-normal text-base">Detected location</p>
                      </div>
                      <p className="text-[#262D31] font-semibold text-2xl">
                        12 Rizal, Santa Rosa, Nueva Ecija
                      </p>
                      <p className="text-[#5D7285] font-normal text-base">
                        15°25'35.6"N 120°56'19.9"E
                      </p>
                    </div>

                    <div className="mt-4 ">
                      <p className="text-[#5D7285] font-normal text-lg mb-2">
                        Confirm or Add Specific Details
                      </p>
                      <input
                        type="text"
                        placeholder="e.g. near Market Entrance."
                        value={specificDetails}
                        onChange={(e) => setSpecificDetails(e.target.value)}
                        className="w-full p-3 rounded-lg border border-gray-200 text-[#5D7285] font-light text-sm focus:outline-none focus:border-[#0C7FDA]"
                      />
                    </div>
                  </>
                )}

                {/* GPS Info */}
                <div className="flex items-center gap-2 p-3 bg-[#EFF8FF] rounded-lg">
                  <Icon icon="material-symbols:info" width="20" style={{ color: "#0C7FDA" }} />
                  <p className="text-[#8A8888] font-normal text-base">
                    GPS coordinates are shared with emergency responders for faster dispatch. Drag the map pin to adjust.
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

        {/* MODAL */}
        {!hasPermission && (
          <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
            <div className="w-[602px] bg-white rounded-xl shadow-lg p-6 flex flex-col">
              
              <div className="flex justify-center mb-4">
                <Icon icon="mage:location-fill" width="56" style={{ color: "#0C7FDA" }} />
              </div>

              <h2 className="text-[32px] text-[#262D31] font-semibold text-center mb-3">
                Allow Location Access
              </h2>

              <p className="text-[#5D7285] font-normal text-lg text-center mb-3">
                We need your location to pinpoint the incident on our emergency map so the rescue team can reach you faster.
              </p>

              <p className="text-[#5D7285] font-normal text-base text-center mb-4">
                Your location is only shared with emergency responders and is never stored after your report is closed.
              </p>

              <div className="flex items-center justify-center gap-2 mb-6">
                <Icon icon="material-symbols:info" width="40" style={{ color: "#0C7FDA" }} />
                <p className="text-[#8A8888] font-normal text-base">
                  GPS coordinates are shared with emergency responders for faster dispatch.
                </p>
              </div>

              <button
                onClick={handleAllowLocation}
                className="w-full bg-[#0C7FDA] text-[#F4F4FF] py-3 rounded-lg font-semibold text-base mb-3 hover:bg-blue-700 transition"
              >
                Allow location access
              </button>

              <button
                onClick={handleAllowLocation}
                className="w-full bg-[#D4D8E3] text-[#8F8FB6] text-2xl font-normal py-3 rounded-lg hover:bg-gray-400 transition"
              >
                Enter location manually
              </button>

              <p className="text-[#5D7285] font-normal text-sm text-center mt-4">
                You can also drag the map pin to adjust the map.
              </p>

            </div>
          </div>
        )}
        
      </div>
    </CivilianDashboard>
  );
}