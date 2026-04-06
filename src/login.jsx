import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="min-h-screen bg-[#f4f5f7] flex items-center justify-center px-4 sm:px-6 md:px-10 py-6">
      
      <div className="w-full max-w-6xl py-10">

        {/* LOGO */}
        <div className="flex items-center gap-3 mb-8">
        <img
            src="src/assets/logo.png"
            alt="logo"
            className="h-10 w-10 object-cover"
        />
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1E252B]">
            Rescue Team
        </h1>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT SIDE */}
          <div>

            <h2 className="text-4xl font-semibold text-gray-800 mb-3">
              Login to your account
            </h2>

            <p className="text-gray-500 text-sm mb-8">
              Access the Central Luzon Emergency Response operations command platform.
            </p>


            {/* EMAIL */}
            <div className="w-full mb-5">
              <fieldset className="border-2 border-gray-400 rounded-lg px-4 pt-2 pb-2 bg-[#F3F6FA] focus-within:border-blue-500">
                
                <legend className="text-sm px-2 text-gray-700">
                  Email
                </legend>

                <input
                  type="email"
                  placeholder="john.doe@gmail.com"
                  className="w-full bg-transparent outline-none placeholder-gray-400 text-sm sm:text-base"
                />

              </fieldset>
            </div>

            {/* PASSWORD */}
            <div className="w-full">
              <fieldset className="border-2 border-gray-400 rounded-lg px-4 pt-2 pb-2 bg-[#F3F6FA] focus-within:border-blue-500">
                
                <legend className="text-sm px-2 text-gray-700">
                  Password
                </legend>

                <div className="flex items-center">
                  <input
                    type={showPass ? "text" : "password"}
                    placeholder="••••••••"
                   className="w-full bg-transparent outline-none placeholder-gray-400 text-sm sm:text-base"
                  />

                  <span
                    onClick={() => setShowPass(!showPass)}
                    className="cursor-pointer text-gray-500 ml-2"
                  >
                    {showPass ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>

              </fieldset>
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between mt-2 mb-6">
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" className="w-4 h-4" />
                Remember me
              </label>

              <button className="text-sm text-red-400 hover:underline">
                Forgot Password
              </button>
            </div>

            {/* Login Button */}
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium transition">
              Login
            </button>

            {/* Signup */}
            <p className="text-center text-sm text-gray-600 mt-5">
              Don’t have an account?{" "}
              <span className="text-red-400 font-medium hover:underline cursor-pointer">
                Sign up
              </span>
            </p>

          </div>

          {/* RIGHT SIDE IMAGE */}
            <div className="hidden md:block">
                <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                    src="src/assets/aso.jpg"
                    alt="building"
                    className="w-full h-full object-cover"
                />
                </div>
          </div>
        </div>
      </div>
    </div>
  );
}