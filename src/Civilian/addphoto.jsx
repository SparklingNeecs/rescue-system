import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CivilianDashboard from "./civiliandashboard";
import { Icon } from "@iconify/react";

export default function AddPhoto() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const steps = [
    { number: 1, label: "Set Location", active: false },
    { number: 2, label: "Add Photo", active: true },
    { number: 3, label: "Incident Details", active: false },
    { number: 4, label: "Review & Submit", active: false }
  ];

  const handleNextStep = () => {
    navigate("/details");
  };

  const handleBackToHome = () => {
    navigate("/civilian-dashboard");
  };

  const handleCancel = () => {
    navigate("/civilian-dashboard");
  };

  const handleBack = () => {
    navigate("/report");
  };

  const handleAddPhoto = () => {
    document.getElementById("photoInput").click();
  };

  const handleUseCamera = () => {
    document.getElementById("cameraInput").click();
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <CivilianDashboard>
      <div className="min-h-screen bg-gray-100">
        <div className="w-full px-4 pt-4 pb-4">  {/* Changed: pt-4 instead of pt-0 with negative margin */}
          
          <div className="flex gap-4 items-start">
            
            {/* LEFT COLUMN */}
            <div className="w-80 flex-shrink-0 sticky top-4 self-start">
              
              {/* File Report Header */}
              <div className="mb-4">  {/* Removed -mt-[30px] */}
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
                          ? 'bg-[#0C7FDA] text-white'   // Active step (current) - Blue
                          : step.number < 2 
                            ? 'bg-[#15803D] text-white'  // Completed steps (1) - Green
                            : step.number === 3
                              ? 'bg-[#656363] text-white'  // Future step (3) - Gray
                              : 'bg-[#656363] text-white'   // Step 4 also gray for now
                      }`}>
                        {step.number}
                      </div>
                      <p className={`text-base ${
                        step.active 
                          ? 'text-[#0C7FDA] font-semibold'  // Active step text - Blue
                          : step.number === 1
                            ? 'text-[#262D31] text-2xl font-regular'  // Completed step text - Dark
                            : 'text-[#5D7285] font-light'  // Future step text - Light gray
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
                    Add Photo
                  </p>
                  <p className="text-[#5D7285] font-light text-base">
                    Step 2 of 4
                  </p>
                </div>
              </div>

              {/* Capture the incident Header */}
              <div className="flex items-center gap-2 mb-1">
                <Icon icon="tdesign:camera-filled" width="28" style={{ color: "#0C7FDA" }} />
                <h2 className="text-[#262D31] font-semibold text-[32px]">
                  Capture the incident
                </h2>
              </div>

              <p className="text-[#262D31] font-light text-base mb-4">
                Attach a photo or video to help responders assess the situation before arrival.
              </p>

              {/* White Card */}
              <div className="rounded-xl shadow p-5">
                
                {/* Photo Preview Area */}
                {selectedImage ? (
                  <div className="mb-4">
                    <img 
                      src={selectedImage} 
                      alt="Incident preview" 
                      className="w-full h-64 object-cover rounded-lg opacity-0.20"
                    />
                    <button 
                      onClick={() => setSelectedImage(null)}
                      className="mt-2 text-red-500 text-sm hover:text-red-700"
                    >
                      Remove photo
                    </button>
                  </div>
                ) : (
                  <div className="h-64 bg-gray-100 rounded-lg flex flex-col items-center justify-center mb-4 border-2 border-dashed border-gray-300">
                    <Icon icon="tdesign:camera-filled" width="48" style={{ color: "#0C7FDA" }} />
                    <p className="text-[#5D7285] text-base mt-2">No photo selected</p>
                  </div>
                )}

                {/* Hidden file inputs */}
                <input
                  type="file"
                  id="photoInput"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileSelect}
                />
                <input
                  type="file"
                  id="cameraInput"
                  accept="image/*"
                  capture="environment"
                  className="hidden"
                  onChange={handleFileSelect}
                />

                {/* Buttons */}
                <div className="flex gap-3 mb-4">
                  <button 
                    onClick={handleUseCamera}
                    className="flex-1 bg-[#F4F6FB] border border-[#D4D8E3] text-[#656363] font-normal text-base py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-400 transition w-lg"
                  >
                    Use Camera
                  </button>
                </div>

                {/* Info Text */}
                <div className="flex items-center gap-2 p-3 bg-[#EFF8FF] rounded-lg">
                  <Icon icon="material-symbols:info" width="20" style={{ color: "#0C7FDA" }} />
                  <p className="text-[#8A8888] font-normal text-base">
                    Clear photos help dispatch the correct response team.
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