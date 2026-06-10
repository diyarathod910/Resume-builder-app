"use client";

export default function ExperienceStep({
    resumeData,
    setResumeData,
    setCurrentStep,
}) {

    // HANDLE INPUT CHANGES
    const handleExperienceChange = (
        index,
        field,
        value
    ) => {
        const updatedExperience = [...resumeData.experience];

        updatedExperience[index][field] = value;

        setResumeData({
            ...resumeData,
            experience: updatedExperience,
        });
    };

    // ADD EXPERIENCE
    const addExperience = () => {

        setResumeData({
            ...resumeData,

            experience: [
                ...resumeData.experience,

                {
                    title: "",
                    company: "",
                    location: "",
                    startDate: "",
                    endDate: "",
                    description: "",
                    present: false,
                },
            ],
        });
    };

    // REMOVE EXPERIENCE
    const removeExperience = (index) => {

        const filteredExperience =
            resumeData.experience.filter(
                (_, i) => i !== index
            );

        setResumeData({
            ...resumeData,
            experience: filteredExperience,
        });
    };

    return (

        <div className="w-full max-w-5xl mx-auto">

            {/* HEADING */}
            <h1 className="text-3xl sm:text-4xl lg:text-[52px] lg:leading-[60px] font-bold text-[#07203f] mb-4 sm:mb-5">
                Tell us about your work history
            </h1>

            <p className="text-gray-500 text-base sm:text-lg mb-8 sm:mb-12">
                Start with your most recent job.
            </p>

            {/* EXPERIENCE LIST */}
            <div className="space-y-6 sm:space-y-8 lg:space-y-10">

                {resumeData.experience.map((exp, index) => (

                    <div key={index} className="bg-white border border-gray-200 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-sm">

                        {/* TOP */}
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-6 sm:mb-8">

                            <h2 className="text-xl sm:text-2xl font-bold text-[#07203f]">
                                Experience {index + 1}
                            </h2>

                            {resumeData.experience.length > 1 && (
                                <button onClick={() => removeExperience(index)} className="text-red-500 font-semibold text-left sm:text-right">
                                    Remove
                                </button>
                            )}

                        </div>

                        {/* GRID */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">

                            {/* JOB TITLE */}
                            <div>

                                <label className="block mb-2 font-semibold text-gray-700 text-sm sm:text-base">
                                    Job Title
                                </label>

                                <input
                                    type="text"
                                    value={exp.title}
                                    onChange={(e) => handleExperienceChange(index, "title", e.target.value)}
                                    placeholder="Retail Sales Associate"
                                    className="w-full border border-gray-300 rounded-xl px-4 sm:px-5 py-3 sm:py-4 outline-none focus:border-blue-600"
                                />

                            </div>

                            {/* COMPANY */}
                            <div>

                                <label className="block mb-2 font-semibold text-gray-700 text-sm sm:text-base">
                                    Company
                                </label>

                                <input
                                    type="text"
                                    value={exp.company}
                                    onChange={(e) => handleExperienceChange(index, "company", e.target.value)}
                                    placeholder="Company Name"
                                    className="w-full border border-gray-300 rounded-xl px-4 sm:px-5 py-3 sm:py-4 outline-none focus:border-blue-600"
                                />

                            </div>

                            {/* LOCATION */}
                            <div>

                                <label className="block mb-2 font-semibold text-gray-700 text-sm sm:text-base">
                                    Location
                                </label>

                                <input
                                    type="text"
                                    value={exp.location}
                                    onChange={(e) => handleExperienceChange(index, "location", e.target.value)}
                                    placeholder="Rajkot"
                                    className="w-full border border-gray-300 rounded-xl px-4 sm:px-5 py-3 sm:py-4 outline-none focus:border-blue-600"
                                />

                            </div>

                            {/* START DATE */}
                            <div>

                                <label className="block mb-2 font-semibold text-gray-700 text-sm sm:text-base">
                                    Start Date
                                </label>

                                <div className="grid grid-cols-2 gap-3">

                                    <select
                                        value={exp.startMonth || ""}
                                        onChange={(e) => handleExperienceChange(index, "startMonth", e.target.value)}
                                        className="w-full border border-gray-300 rounded-xl px-3 sm:px-4 py-3 sm:py-4 outline-none focus:border-blue-600"
                                    >
                                        <option value="">Month</option>
                                        {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map((month) => (
                                            <option key={month} value={month}>{month}</option>
                                        ))}
                                    </select>

                                    <select
                                        value={exp.startYear || ""}
                                        onChange={(e) => handleExperienceChange(index, "startYear", e.target.value)}
                                        className="w-full border border-gray-300 rounded-xl px-3 sm:px-4 py-3 sm:py-4 outline-none focus:border-blue-600"
                                    >
                                        <option value="">Year</option>
                                        {Array.from({ length: 50 }, (_, i) => 2030 - i).map((year) => (
                                            <option key={year} value={year}>{year}</option>
                                        ))}
                                    </select>

                                </div>

                            </div>

                            {/* END DATE */}
                            <div>

                                <label className="block mb-2 font-semibold text-gray-700 text-sm sm:text-base">
                                    End Date
                                </label>

                                <div className="grid grid-cols-2 gap-3">

                                    <select
                                        value={exp.endMonth || ""}
                                        onChange={(e) => handleExperienceChange(index, "endMonth", e.target.value)}
                                        disabled={exp.present}
                                        className="w-full border border-gray-300 rounded-xl px-3 sm:px-4 py-3 sm:py-4 outline-none focus:border-blue-600 disabled:bg-gray-100"
                                    >
                                        <option value="">Month</option>
                                        {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map((month) => (
                                            <option key={month} value={month}>{month}</option>
                                        ))}
                                    </select>

                                    <select
                                        value={exp.endYear || ""}
                                        onChange={(e) => handleExperienceChange(index, "endYear", e.target.value)}
                                        disabled={exp.present}
                                        className="w-full border border-gray-300 rounded-xl px-3 sm:px-4 py-3 sm:py-4 outline-none focus:border-blue-600 disabled:bg-gray-100"
                                    >
                                        <option value="">Year</option>
                                        {Array.from({ length: 51 }, (_, i) => 2030 - i).map((year) => (
                                            <option key={year} value={year}>{year}</option>
                                        ))}
                                    </select>

                                </div>

                                <div className="flex items-center gap-3 mt-4">

                                    <input
                                        type="checkbox"
                                        checked={exp.present || false}
                                        onChange={(e) => {

                                            const updatedExperience = [...resumeData.experience];

                                            updatedExperience[index].present = e.target.checked;

                                            if (e.target.checked) {
                                                updatedExperience[index].endMonth = "";
                                                updatedExperience[index].endYear = "";
                                            }

                                            setResumeData({
                                                ...resumeData,
                                                experience: updatedExperience,
                                            });

                                        }}
                                        className="w-4 h-4"
                                    />

                                    <label className="text-sm sm:text-[15px] font-medium text-gray-700">
                                        Present
                                    </label>

                                </div>

                            </div>

                        </div>

                        {/* DESCRIPTION */}
                        <div className="mt-6 sm:mt-8">

                            <label className="block mb-2 font-semibold text-gray-700 text-sm sm:text-base">
                                Description
                            </label>

                            <textarea
                                rows="6"
                                value={exp.description}
                                onChange={(e) => handleExperienceChange(index, "description", e.target.value)}
                                placeholder="Describe your responsibilities and achievements..."
                                className="w-full border border-gray-300 rounded-xl px-4 sm:px-5 py-3 sm:py-4 outline-none resize-none focus:border-blue-600"
                            />

                        </div>

                    </div>

                ))}

            </div>

            {/* ADD EXPERIENCE */}
            <button onClick={addExperience} className="mt-6 sm:mt-8 border-2 border-[#1b2cbf] text-[#1b2cbf] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-blue-50 transition w-full sm:w-auto">
                + Add Another Experience
            </button>

            {/* BOTTOM BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 sm:justify-between mt-10 sm:mt-16">

                <button onClick={() => setCurrentStep(1)} className="w-full sm:w-auto border border-gray-300 px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold hover:bg-gray-100 transition">
                    Back
                </button>

                <button onClick={() => setCurrentStep(3)} className="w-full sm:w-auto bg-[#f5c04f] hover:bg-[#efb63d] transition px-8 sm:px-10 py-3 sm:py-4 rounded-full text-black font-semibold">
                    Next: Education
                </button>

            </div>

        </div>
    );
}