import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import CivilianDashboard from "./civiliandashboard";

export default function Overview() {
  const navigate = useNavigate();

  const recentReports = [
    {
      id: "INC-002",
      title: "Vehicle Accident",
      location: "Rizal (Poblacion)",
      date: "March 02, 2026 - 16:39",
      status: "On Scene"
    }
  ];

  return (
    <CivilianDashboard>
      <div className="p-6">

        {/* HEADER BACKGROUND */}
        <div className="bg-[#DFF1FF] w-full px-6 py-2 -mt-[34px] mb-4">

          {/* Good Morning */}
          <h1 className="text-[#474C53] text-4xl font-semibold mb-1">
            Good Morning Juan Dela Cruz
          </h1>

          {/* Subtitle */}
          <p className="text-[#5D7285] text-base font-normal">
            File incident reports, track status updates, and connect directly with the Rescue Team.
          </p>
        </div>

        {/* Report Incident */}
        <div
          onClick={() => navigate("/report")}
          className="bg-gradient-to-r from-red-700 to-red-500 rounded-xl p-6 py-2 mb-4 flex items-center justify-between cursor-pointer hover:shadow-lg transition"
        >
          <div className="flex items-center gap-4">

            <div className="w-16 h-16 flex items-center justify-center">
              <Icon icon="solar:siren-bold" width="64" className="text-white" />
            </div>

            <div>
              <h2 className="text-[#FAFAFF] text-4xl font-semibold">
                Report an Incident
              </h2>
              <p className="text-[#FAFAFF] text-base font-light">
                File a new emergency report with your location, photo evidence, and incident details. Responders are notified immediately.
              </p>
            </div>
          </div>

          <Icon icon="mdi:chevron-right" width="32" className="text-white" />
        </div>

        {/* Quick Actions */}
        <h2 className="text-[#474C53] text-2xl font-semibold mb-2">
          Quick Actions
        </h2>

        {/* Track Reports */}
        <div
          onClick={() => navigate("/track-reports")}
          className="bg-white rounded-xl p-6 py-2 shadow-sm hover:shadow-md transition cursor-pointer border border-gray-100 mb-2"
        >
          <div className="flex items-center gap-4">

            <div className="w-12 h-12  flex items-center justify-center">
              <Icon icon="mdi:magnify" width="64" className="text-[#DC2626]" />
            </div>

            <div>
              <h3 className="text-[#262D31] text-[26px] font-semibold">
                Track Reports
              </h3>
              <p className="text-[#5D7285] text-base font-normal">
                Check the real-time status of your filed reports
              </p>
            </div>
          </div>
        </div>

        {/* RECENT REPORTS */}
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-[#474C53] text-2xl font-semibold">
            Recent Reports
          </h2>

          <button
            onClick={() => navigate("/track-reports")}
            className="text-[#474C53] text-[22px] font-semibold hover:text-blue-600 flex items-center gap-1"
          >
            View All
            <Icon icon="mdi:chevron-right" width="16" />
          </button>
        </div>

      <div className="space-y-4">
        {recentReports.map((report) => (
          <div
            key={report.id}
            onClick={() => navigate(`/incidents/${report.id}`)}
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
              <div className="flex flex-col items-end gap-2 ">
                <span className="text-[#8B8A8A] text-[16px] font-normal">
                  {report.id}
                </span>

                <span className="text-[#DCA226] text-[14px] font-medium bg-[#FFFBDE] px-3 py-[2px] l border rounded-lg border-[#DCA226]">
                  {report.status}
                </span>
              </div>

            </div>
          </div>
        ))}
      </div>

      </div>
    </CivilianDashboard>
  );
}