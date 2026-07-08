import { Icon } from "@iconify/react";
import AdminLayout from "./alayout";
import { Outlet } from "react-router-dom";
import { useState } from "react";

export default function SystemSettings() {  // Changed from SystemMaintenance to SystemSettings
  const [selectedSystemSettings, setSelectedSystemSettings] = useState(null);

  return (
    <AdminLayout>
      <div className="flex-1 overflow-y-auto p-6 bg-[#F5F4FF]">
        <h1 className="text-2xl font-semibold text-[#262D31] mb-4">
          System Settings  {/* Changed from System Maintenance to System Settings */}
        </h1>
        <div className="bg-white rounded-lg shadow p-6">
          <Outlet />
        </div>
      </div>  
    </AdminLayout>
  );
}