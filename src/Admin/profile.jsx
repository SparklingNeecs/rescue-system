import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import AdminLayout from "./alayout";
import { useState } from "react";

export default function EditProfile() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleCancel = () => {
    navigate(-1);
  };

  const handleSave = () => {
    navigate(-1);
  };

  const handleChangePassword = () => {
    // Add change password logic here
    alert("Password changed successfully!");
  };

  return (
    <AdminLayout>
      <div className="flex-1 overflow-y-auto p-6 bg-[#FAFAFF]">

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

            {/* CHANGE PASSWORD SECTION */}
            {/* CHANGE PASSWORD SECTION */}
            <div className="mt-8 pt-6 border-t">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Change Password
              </h3>

              <div className="grid grid-cols-1 gap-4 max-w-full">
                {/* Current Password - Full Width */}
                <div>
                  <fieldset className="border-2 border-gray-300 rounded-lg px-4 pt-2 pb-2 bg-[#F3F6FA] focus-within:border-blue-500 relative">
                    <legend className="text-sm px-2 text-gray-600">Current Password</legend>
                    <input
                      type={showPassword ? "text" : "password"}
                      defaultValue="12345678"
                      className="w-full bg-transparent outline-none text-sm pr-8"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <Icon 
                        icon={showPassword ? "mdi:eye-off" : "mdi:eye"} 
                        className="w-5 h-5"
                      />
                    </button>
                  </fieldset>
                </div>

                {/* New Password & Confirm Password - Same Line */}
                <div className="grid grid-cols-2 gap-4">
                  {/* New Password */}
                  <div>
                    <fieldset className="border-2 border-gray-300 rounded-lg px-4 pt-2 pb-2 bg-[#F3F6FA] focus-within:border-blue-500 relative">
                      <legend className="text-sm px-2 text-gray-600">New Password</legend>
                      <input
                        type={showNewPassword ? "text" : "password"}
                        placeholder="Enter new password"
                        className="w-full bg-transparent outline-none text-sm pr-8"
                      />
                      <button
                        type="button"
                        onClick={() => setShowNewPassword(!showNewPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        <Icon 
                          icon={showNewPassword ? "mdi:eye-off" : "mdi:eye"} 
                          className="w-5 h-5"
                        />
                      </button>
                    </fieldset>
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <fieldset className="border-2 border-gray-300 rounded-lg px-4 pt-2 pb-2 bg-[#F3F6FA] focus-within:border-blue-500 relative">
                      <legend className="text-sm px-2 text-gray-600">Confirm Password</legend>
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm new password"
                        className="w-full bg-transparent outline-none text-sm pr-8"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        <Icon 
                          icon={showConfirmPassword ? "mdi:eye-off" : "mdi:eye"} 
                          className="w-5 h-5"
                        />
                      </button>
                    </fieldset>
                  </div>
                </div>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex justify-end gap-3 border-t pt-4 mt-6">
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
    </AdminLayout>
  );
} 