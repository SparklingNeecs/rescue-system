import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import CivilianDashboard from "./civiliandashboard";

export default function TrackReports() {
  const navigate = useNavigate();

  return (
    <CivilianDashboard>
      <div className="p-6">
        <h1 className="text-3xl font-bold text-[#474C53] mb-4">Track Reports</h1>
        <p className="text-[#5D7285] text-base mb-6">
          Check the real-time status of your filed reports
        </p>
        
        {/* Add your track reports content here */}
        <div className="bg-white rounded-lg p-6 shadow">
          <p className="text-gray-500">Your tracked reports will appear here.</p>
        </div>
      </div>
    </CivilianDashboard>
  );
}