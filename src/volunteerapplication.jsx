    import { useState } from "react";

    function Certifications({ selected, setSelected, others, setOthers }) {
    const [othersChecked, setOthersChecked] = useState(false);

    const handleCheck = (value) => {
        setSelected((prev) =>
        prev.includes(value)
            ? prev.filter((item) => item !== value)
            : [...prev, value]
        );
    };

    return (


        <div className="grid grid-cols-2 gap-2 text-sm">

            {["CPR(Cardiopulmonary Resuscitation)", "ACLS (Advanced Cardiac Life Support)", "BLS (Basic Life Support)", "First Aid Support"].map((cert) => (
            <label key={cert} className="flex items-center gap-2">
                <input
                type="checkbox"
                checked={selected.includes(cert)}
                onChange={() => handleCheck(cert)}
                />
                {cert}
            </label>
            ))}

            {/* OTHERS */}
            <label className="col-span-2 flex items-center gap-2">
            <input
                type="checkbox"
                checked={othersChecked}
                onChange={(e) => {
                setOthersChecked(e.target.checked);
                if (!e.target.checked) setOthers("");
                }}
            />
            Others
            </label>

            {othersChecked && (
            <input
                type="text"
                placeholder="Enter certification"
                value={others}
                onChange={(e) => setOthers(e.target.value)}
                className="col-span-2 border p-2 rounded-md mt-2"
            />
            )}

        </div>
    );
    }

    export default function VolunteerApplication() {
    const [selectedCerts, setSelectedCerts] = useState([]);
    const [othersCert, setOthersCert] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const finalCertifications = [
        ...selectedCerts,
        ...(othersCert ? [othersCert] : []),
        ];

        console.log("Submitted Certifications:", finalCertifications);
    };

    return (
    <div className="min-h-screen bg-[#eef2f6] px-4 sm:px-6 md:px-10 py-6">

    <div className="max-w-6xl mx-auto">

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

        {/* MAIN */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

            {/* LEFT FORM */}
           <div className="w-full max-w-xl mx-auto md:mx-0">

            <h2 className="text-2xl md:text-3xl font-bold text-[#1E252B] mb-2"></h2><h2 className="text-2xl md:text-3xl font-bold text-[#1E252B] mb-2 -mt-[34px]">
                Volunteer Application
            </h2>

            <p className="text-gray-500 text-sm md:text-base mb-6">
                Fill out your information to apply as a volunteer.
            </p>

            <form className="space-y-2" onSubmit={handleSubmit}>

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

                {/* Email */}
                <div className="w-full">
                <fieldset className="border-2 border-gray-400 rounded-lg px-4 pt-2 pb-2 bg-[#F3F6FA] focus-within:border-blue-500">
                    <legend className="text-sm px-2 text-gray-700">
                    Email
                    </legend>
                    <input
                    type="text"
                    placeholder="john.doe@email.com"
                    className="w-full bg-transparent outline-none placeholder-gray-400 text-sm sm:text-base"
                    />
                </fieldset>
                </div>

                {/* Phone */}
                <div className="w-full">
                <fieldset className="border-2 border-gray-400 rounded-lg px-4 pt-2 pb-2 bg-[#F3F6FA] focus-within:border-blue-500">
                    <legend className="text-sm px-2 text-gray-700">
                    Phone Number
                    </legend>
                    <input
                    type="text"
                    placeholder="+63 912 345 6789"
                    className="w-full bg-transparent outline-none placeholder-gray-400 text-sm sm:text-base"
                    />
                </fieldset>
                </div>

                {/* Experience */}
                <div className="w-full">
                <fieldset className="border-2 border-gray-400 rounded-lg px-4 pt-2 pb-2 bg-[#F3F6FA] focus-within:border-blue-500">
                    <legend className="text-sm px-2 text-gray-700">
                    Years of Experience
                    </legend>
                    <input
                    type="text"
                    placeholder="e.g. 2 years"
                    className="w-full bg-transparent outline-none placeholder-gray-400 text-sm sm:text-base"
                    />
                </fieldset>
                </div>

                {/* AGE */}
                <div className="w-full">
                <fieldset className="border-2 border-gray-400 rounded-lg px-4 pt-2 pb-2 bg-[#F3F6FA] focus-within:border-blue-500">
                    <legend className="text-sm px-2 text-gray-700">
                    Age
                    </legend>
                    <input
                    type="text"
                    placeholder="e.g. 21"
                    className="w-full bg-transparent outline-none placeholder-gray-400 text-sm sm:text-base"
                    />
                </fieldset>
                </div>

                {/* Address 1 */}
                <div className="w-full">
                <fieldset className="border-2 border-gray-400 rounded-lg px-4 pt-2 pb-2 bg-[#F3F6FA] focus-within:border-blue-500">
                    <legend className="text-sm px-2 text-gray-700">
                    Address 1
                    </legend>
                    <input
                    type="text"
                    placeholder="Street, Barangay"
                    className="w-full bg-transparent outline-none placeholder-gray-400 text-sm sm:text-base"
                    />
                </fieldset>
                </div>
                
                {/* Address 2 */}
                <div className="w-full">
                <fieldset className="border-2 border-gray-400 rounded-lg px-4 pt-2 pb-2 bg-[#F3F6FA] focus-within:border-blue-500">
                    <legend className="text-sm px-2 text-gray-700">
                    Address 2   
                    </legend>
                    <input
                    type="text"
                    placeholder="Street, Barangay"
                    className="w-full bg-transparent outline-none placeholder-gray-400 text-sm sm:text-base"
                    />
                </fieldset>
                </div>

            </div>
                
                <div className="w-full">
                <fieldset className="border-2 border-gray-400 rounded-lg px-4 pt-3 pb-4 bg-[#F3F6FA] focus-within:border-blue-500">

                    <legend className="text-sm px-2 text-gray-700">
                    Certifications (Select all that apply)
                    </legend>

                    <Certifications
                    selected={selectedCerts}
                    setSelected={setSelectedCerts}
                    others={othersCert}
                    setOthers={setOthersCert}
                    />

                </fieldset>
                </div>

                {/* UPLOAD */}
                <div className="border-dashed border-2 rounded-md p-6 text-center text-sm border-gray-400">
                Click to upload or drag and drop files here.
                </div>

                {/* BUTTON */}
                <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition">
                Apply as a Volunteer
                </button>

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
    </div>
</div>
 );
}
