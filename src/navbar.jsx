import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/dashboard");
  };

  const handleNotificationClick = () => {
    navigate("/notifications");
  };

  return (
    <div className="bg-[#1f6b75] h-16 px-6 flex items-center justify-between shadow">

      {/* LEFT */}
      <div 
        onClick={handleLogoClick}
        className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
      >
        <img
          src="src/assets/logo.png"
          alt="logo"
          className="w-10 h-10"
        />

        <div className="leading-tight">
          <h1 className="text-white font-semibold text-lg">
            Rescue Team
          </h1>
          <p className="text-white/70 text-xs">
            Municipality of Santa Rosa
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <button 
        onClick={handleNotificationClick}
        className="text-white text-xl hover:opacity-80"
      >
        🔔
      </button>
    </div>
  );
}