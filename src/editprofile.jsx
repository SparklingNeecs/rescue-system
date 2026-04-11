import React from "react";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import CivilianDashboard from "./civiliandashboard";

export default function EditProfile() {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate(-1); // Go back to previous page
  };

  const handleSave = () => {
    // Add your save logic here
    // Then navigate back
    navigate(-1);
  };

  return (
    <CivilianDashboard>
      <div className="p-6">

        {/* HEADER */}
        <div className="mb-6">
          <div className="flex items-center gap-3">
            <Icon 
              icon="iconamoon:profile-fill" 
              width="36" 
              style={{ color: "#0E4B5E" }}
              className="text-color-[#0E4B5E]"/>
            <h1 className="text-3xl font-bold text-color-[#474C53]">
              User Account
            </h1>
          </div>
          <p className="text-sm text-gray-500 mt-1">
            Manage your account information and preferences
          </p>
        </div>
        
        {/* CARD */}
        <div className="bg-white rounded-lg shadow border">

          {/* TOP PROFILE */}
          <div className="flex items-center justify-between p-6 border-b">
            <div className="flex items-center gap-4">

              {/* PROFILE IMAGE */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-20 md:h-20 rounded-full border-2 border-blue-500 relative">
                <div className="w-full h-full bg-gray-300 rounded-full"></div>

                {/* SMALL DOT */}
                <div className="absolute bottom-1 right-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-white"></div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-700">
                  Juan Dela Cruz
                </h2>
                <p className="text-sm text-gray-500">Civilian</p>
              </div>
            </div>

            <button className="text-sm px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-100">
              Change photo
            </button>
          </div>

          {/* FORM */}
          <div className="p-6">

            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Personal Information
            </h3>

            {/* ROW 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

              {/* FIRST NAME */}
              <div>
                <fieldset className="border-2 border-gray-300 rounded-lg px-4 pt-2 pb-2 bg-[#F3F6FA] focus-within:border-blue-500">
                  <legend className="text-sm px-2 text-gray-600">First Name</legend>
                  <input
                    type="text"
                    defaultValue="Juan"
                    className="w-full bg-transparent outline-none text-sm"
                  />
                </fieldset>
              </div>

              {/* LAST NAME */}
              <div>
                <fieldset className="border-2 border-gray-300 rounded-lg px-4 pt-2 pb-2 bg-[#F3F6FA] focus-within:border-blue-500">
                  <legend className="text-sm px-2 text-gray-600">Last Name</legend>
                  <input
                    type="text"
                    defaultValue="Dela Cruz"
                    className="w-full bg-transparent outline-none text-sm"
                  />
                </fieldset>
              </div>

            </div>

            {/* ROW 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">

              {/* CONTACT */}
              <div>
                <fieldset className="border-2 border-gray-300 rounded-lg px-4 pt-2 pb-2 bg-[#F3F6FA] focus-within:border-blue-500">
                  <legend className="text-sm px-2 text-gray-600">Contact Number</legend>
                  <input
                    type="text"
                    defaultValue="09554278907"
                    className="w-full bg-transparent outline-none text-sm"
                  />
                </fieldset>
              </div>

              {/* EMAIL */}
              <div>
                <fieldset className="border-2 border-gray-300 rounded-lg px-4 pt-2 pb-2 bg-[#F3F6FA] focus-within:border-blue-500">
                  <legend className="text-sm px-2 text-gray-600">Email</legend>
                  <input
                    type="email"
                    defaultValue="JuanDC@gmail.com"
                    className="w-full bg-transparent outline-none text-sm"
                  />
                </fieldset>
              </div>

            </div>

            {/* BUTTONS */}
            <div className="flex justify-end gap-3 border-t pt-4">
              <button 
                onClick={handleCancel}
                className="px-4 py-2 text-sm border rounded-md text-gray-600 hover:bg-gray-100"
              >
                Cancel
              </button>

              <button 
                onClick={handleSave}
                className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Save Changes
              </button>
            </div>

          </div>
        </div>

      </div>
    </CivilianDashboard>
  );
}