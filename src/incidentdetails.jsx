import { Icon } from "@iconify/react";

export default function IncidentDetails({ data, onClose }) {

  return (
    <div className="h-full flex flex-col bg-white">
      
      {/* 🔷 HEADER - STICKY */}
      <div className="sticky top-0 bg-white z-10 p-4 border-b relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 text-xl hover:text-gray-600"
        >
          ✕
        </button>
        <h2 className="font-semibold text-[#262D31]">
          Incident Details
        </h2>
      </div>

      {/* 🔷 CONTENT - SCROLLABLE */}
      <div className="flex-1 overflow-y-auto">
        
        {/* TITLE SECTION */}
        <div className="px-4 py-3 border-b bg-[#F5F4FF]">
          <div className="flex items-center flex-wrap gap-2">
            <h1 className="text-xl font-bold text-[#262D31]">
              {data.title}
            </h1>
            <span className={`text-xs px-2 py-1 rounded ${
              data.status === "Critical" ? "bg-red-100 text-red-600" :
              data.status === "Solved" ? "bg-green-100 text-green-600" :
              data.status === "On Scene" ? "bg-yellow-100 text-yellow-600" :
              "bg-orange-100 text-orange-600"
            }`}>
              {data.status}
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-1">ID: {data.id || "N/A"}</p>
        </div>

        {/* LOCATION SECTION */}
        <Section title="Location">
          <div className="px-3 py-2 space-y-2">
            <div className="flex items-center gap-2 text-gray-700 text-sm">
              <Icon icon="ic:outline-location-on" width="16" className="text-red-500" />
              <span>{data.address}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-xs">
              <Icon icon="material-symbols:my-location-outline" width="14" />
              <span>{data.coordinates}</span>
            </div>
          </div>
        </Section>

        {/* REPORTER SECTION */}
        <Section title="Reporter">
          <InfoRow label="Name" value={data.reporter} />
          <InfoRow label="Contact" value={data.contact} />
        </Section>

        {/* DESCRIPTION SECTION */}
        <Section title="Description">
          <p className="p-3 text-gray-600 text-sm leading-relaxed">
            {data.description}
          </p>
          
          {/* INCIDENT IMAGE */}
          <div className="px-3 pb-3">
            <img
              src={data.image || "https://www.kraftlaw.com/wp-content/uploads/2021/10/common-injuries-car-accidents.jpg"}
              alt="incident"
              className="rounded w-full h-40 object-cover border border-[#DFDFF0]"
            />
            <p className="text-xs text-gray-400 mt-1 text-center">Incident photo</p>
          </div>
        </Section>

        {/* TIMELINE SECTION */}
        <Section title="Activity Timeline">
          <div className="p-3">
            {data.timeline && data.timeline.length > 0 ? (
              <div className="flex gap-2 flex-wrap">
                {data.timeline.map((item, i) => (
                  <span key={i} className="text-xs bg-[#F5F4FF] px-2 py-1 rounded border border-[#DFDFF0]">
                    {item}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-sm">No updates yet.</p>
            )}
          </div>
        </Section>

      </div>

      {/* 🔷 ACTIONS - STICKY BOTTOM */}
      <div className="sticky bottom-0 bg-white z-10 p-3 border-t space-y-2">
        <div className="flex gap-2">
          <button className="flex-1 bg-red-500 text-white py-2 rounded text-sm hover:bg-red-600 transition">
            🚨 Dispatch
          </button>
          <button className="flex-1 bg-green-500 text-white py-2 rounded text-sm hover:bg-green-600 transition">
            ✓ Resolve
          </button>
          <button className="flex-1 border border-gray-300 py-2 rounded text-sm hover:bg-gray-50 transition">
            📄 View Report
          </button>
        </div>
        <div className="flex gap-2">
          <button className="flex-1 border border-gray-300 py-2 rounded text-sm flex items-center justify-center gap-1 hover:bg-gray-50 transition">
            <Icon icon="material-symbols:shield" width="16" />
            Refer to Police
          </button>
          <button className="flex-1 border border-gray-300 py-2 rounded text-sm flex items-center justify-center gap-1 hover:bg-gray-50 transition">
            <Icon icon="material-symbols:local-fire-department" width="16" />
            Refer to Fire Dept
          </button>
        </div>
      </div>

    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="border-t border-[#DFDFF0]">
      <div className="bg-[#EBEDFA] px-3 py-2 font-medium text-[#656363] text-sm sticky top-[57px]">
        {title}
      </div>
      {children}
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex justify-between px-3 py-2 border-t border-[#DFDFF0] text-sm">
      <span className="text-gray-500">{label}</span>
      <span className="font-semibold text-[#262D31]">
        {value || "-"}
      </span>
    </div>
  );
}