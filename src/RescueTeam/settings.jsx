import { Icon } from "@iconify/react";
import DashboardLayout from "./mrtlayout";
import { Outlet } from "react-router-dom";
import { useState } from "react";

export default function Settings() {
  const [selectedSettings, setSelectedSettings] = useState(null);

    return (
        <DashboardLayout>

            <div className="flex-1 overflow-y-auto p-6 bg-[#F5F4FF]">
                <h1 className="text-2xl font-semibold text-[#262D31] mb-4">
                    Settings
                </h1>
                <div className="bg-white rounded-lg shadow p-6">
                    <Outlet />
                </div>
            </div>  

        </DashboardLayout>
    );
}
