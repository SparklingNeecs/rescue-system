import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  const handleSignup = () => {
    // Add your signup logic here
    // After successful signup, redirect to login
    navigate("/login");
  };

  const handleTermsClick = () => {
    navigate("/terms");
  };

  const handlePrivacyClick = () => {
    navigate("/privacy");
  };

  return (
    <div className="min-h-screen bg-[#f4f5f7] flex items-center justify-center px-4 sm:px-6 md:px-10 py-6 font-Roboto">

      
       
        {/* LEFT SIDE */}
        <div className="p-6 sm:p-8 md:p-10">

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
          {/* TITLE */}
          <h2 className="text-4xl font-bold text-[#1E252B] font-serif mb-2">
            Sign up
          </h2>

          <p className="text-gray-500 text-sm mb-6">
            Register your credentials to join the Santa Rosa Rescue Team operations network.
          </p>

          {/* FORM */}
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleSignup(); }}>

            {/* NAME */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {/* FIRST NAME */}
            <div className="w-full">
              <fieldset className="border-2 border-gray-400 rounded-lg px-4 pt-2 pb-2 bg-[#F3F6FA] focus-within:border-blue-500">
                <legend className="text-sm px-2 text-gray-700">
                  First Name
                </legend>
                <input
                  type="text"
                  placeholder="John"
                 className="w-full bg-transparent outline-none placeholder-gray-400 text-sm sm:text-base"
                />
              </fieldset>
            </div>

          {/* LAST NAME */}
          <div className="w-full">
            <fieldset className="border-2 border-gray-400 rounded-lg px-4 pt-2 pb-2 bg-[#F3F6FA] focus-within:border-blue-500">
              <legend className="text-sm px-2 text-gray-700">
                Last Name
              </legend>
              <input
                type="text"
                placeholder="Doe"
               className="w-full bg-transparent outline-none placeholder-gray-400 text-sm sm:text-base"
              />
            </fieldset>
           </div>

        </div>

            {/* EMAIL + PHONE */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              {/* EMAIL */}
              <div className="w-full">
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

              {/* PHONE */}
              <div className="w-full">
                <fieldset className="border-2 border-gray-400 rounded-lg px-4 pt-2 pb-2 bg-[#F3F6FA] focus-within:border-blue-500">
                  <legend className="text-sm px-2 text-gray-700">
                    Phone Number
                  </legend>
                  <input
                    type="tel"
                    placeholder="+63 9XX XXX XXXX"
                   className="w-full bg-transparent outline-none placeholder-gray-400 text-sm sm:text-base"
                  />
                </fieldset>
              </div>

            </div>

            {/* ROLE */}
            <div className="w-full">
              <fieldset className="border-2 border-gray-400 rounded-lg px-4 pt-2 pb-2 bg-[#F3F6FA] focus-within:border-blue-500">
                
                <legend className="text-sm px-2 text-gray-700">
                  Role / Position
                </legend>

                <select className="w-full bg-transparent outline-none text-gray-600">
                  <option>- Select Role / Position -</option>
                  <option>Civilian</option>
                  <option>Volunteer</option>
                  <option>Admin</option>
                </select>

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

            {/* CONFIRM PASSWORD */}
            <div className="w-full">
              <fieldset className="border-2 border-gray-400 rounded-lg px-4 pt-2 pb-2 bg-[#F3F6FA] focus-within:border-blue-500">
                
                <legend className="text-sm px-2 text-gray-700">
                  Confirm Password
                </legend>

                <div className="flex items-center">
                  <input
                    type={showConfirm ? "text" : "password"}
                    placeholder="••••••••"
                   className="w-full bg-transparent outline-none placeholder-gray-400 text-sm sm:text-base"
                  />

                  <span
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="cursor-pointer text-gray-500 ml-2"
                  >
                    {showConfirm ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>

              </fieldset>
            </div>

            {/* TERMS */}
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <input type="checkbox" />
              <span>
                I agree to all the{" "}
                <span 
                  onClick={handleTermsClick}
                  className="text-red-500 cursor-pointer hover:underline"
                >
                  Terms
                </span>{" "}
                and{" "}
                <span 
                  onClick={handlePrivacyClick}
                  className="text-red-500 cursor-pointer hover:underline"
                >
                  Privacy Policies
                </span>
              </span>
            </div>

            {/* BUTTON */}
            <button 
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
            >
              Create account
            </button>

            {/* LOGIN */}
            <p className="text-center text-sm text-gray-500">
              Already have an account?
              <Link to="/login" className="text-red-500 ml-1 cursor-pointer hover:underline">
                Login
              </Link>
            </p>

          </form>
        </div>

        {/* RIGHT IMAGE */}
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
  );
}