import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CivilianDashboard from "./civiliandashboard";
import { Icon } from "@iconify/react";

export default function SubmitSuccess() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get data from location state or use default values
  const reportData = location.state || {
    reportId: "INC-011",
    incidentType: "Medical Emergency",
    location: "12 Rizal, Santa Rosa, Nueva Ecija",
    victims: 1,
    submittedDate: "April 03, 2029"
  };

  const handleTrackReport = () => {
    navigate("/track-reports");
  };

  const handleBackToHome = () => {
    navigate("/civilian-dashboard");
  };

  return (
    <CivilianDashboard>
      <div className="min-h-screen bg-gray-100">
        <div className="w-full px-4 pt-4 pb-4">
          
          <div className="flex justify-center">
            
            {/* Success Card */}
            <div className="max-w-4xl w-full bg-[#EFF8FF] rounded-xl shadow p-6 text-center">
              
              {/* Success Icon */}
              <div className="flex justify-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center">
                  <Icon icon="gg:check-o" width="60" style={{ color: "#0C7FDA" }} />
                </div>
              </div>

              {/* Report ID - 4285F4 40px semibold */}
              <p className="text-[#4285F4] font-semibold text-[40px]">
                {reportData.reportId}
              </p>

              {/* Report Submitted - 262D31 32px semibold */}
              <h2 className="text-[#262D31] font-semibold text-[32px] mb-2">
                Report Submitted
              </h2>

              {/* Your incident... - 5D7285 light lg */}
              <p className="text-[#5D7285] font-light text-lg mb-1">
                Your incident report has been received by the Operations Command Center.<br />
                Responders have been notified and are being dispatched.
              </p>

              {/* Details Table */}
              <div className="bg-[#F5F6F8] rounded-lg p-4 mb-2 text-left">
                <div className="space-y-3">
                  {/* Incident */}
                  <div className="flex border-b-2 border-[#DFDFF0]">
                    <span className="text-[#656363] font-light text-sm w-24">Incident</span>
                    <span className="text-[#262D31] font-normal text-base flex-1">
                      {reportData.incidentType}
                    </span>
                  </div>
                  {/* Location */}
                  <div className="flex border-b-2 border-[#DFDFF0]">
                    <span className="text-[#656363] font-light text-sm w-24">Location</span>
                    <span className="text-[#262D31] font-normal text-base flex-1 break-words">
                      {reportData.location}
                    </span>
                  </div>
                  {/* Victims */}
                  <div className="flex border-b-2 border-[#DFDFF0]">
                    <span className="text-[#656363] font-light text-sm w-24">Victims</span>
                    <span className="text-[#262D31] font-normal text-base flex-1">
                      {reportData.victims}
                    </span>
                  </div>
                  {/* Submitted */}
                  <div className="flex border-b-2 border-[#DFDFF0]">
                    <span className="text-[#656363] font-light text-sm w-24">Submitted</span>
                    <span className="text-[#262D31] font-normal text-base flex-1">
                      {reportData.submittedDate}
                    </span>
                  </div>
                </div>
              </div>

              {/* Track Message */}
              <p className="text-[#5D7285] font-light text-base mb-6">
                Use your reference number <span className="font-semibold text-[#4285F4]">{reportData.reportId}</span> to track the status of your report at any time.
              </p>

              {/* Buttons */}
              <div className="flex justify-center gap-3">
                <button 
                  onClick={handleTrackReport}
                  className="bg-[#0C7FDA] text-white font-normal text-base px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Track Report
                </button>
                <button 
                  onClick={handleBackToHome}
                  className="border border-[#D3D2DE] text-[#656363] font-normal text-base px-6 py-2 rounded-lg hover:bg-gray-50 transition"
                >
                  Back to Home
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </CivilianDashboard>
  );
}