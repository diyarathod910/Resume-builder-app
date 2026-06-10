"use client";

export default function EducationStep({
    resumeData,
    setResumeData,
    setCurrentStep,
}) {

    const handleEducationChange = (
        index,
        field,
        value
    ) => {

        const updatedEducation = [
            ...resumeData.education,
        ];

        updatedEducation[index][field] = value;

        setResumeData({
            ...resumeData,
            education: updatedEducation,
        });
    };

    const addEducation = () => {

        setResumeData({
            ...resumeData,

            education: [
                ...resumeData.education,

                {
                    degree: "",
                    school: "",
                    year: "",
                },
            ],
        });
    };

    return (
        <div className="w-full max-w-5xl px-4 sm:px-6 lg:px-0">

            <h1 className="text-3xl sm:text-4xl lg:text-[52px] font-bold text-[#07203f] mb-5">
                Tell us about your education
            </h1>

            <div className="space-y-6 sm:space-y-8 mt-8 sm:mt-10">

                {resumeData.education.map((edu, index) => (

                    <div key={index} className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">

                            {/* DEGREE */}
                            <div>

                                <label className="block mb-2 font-semibold text-sm sm:text-base">
                                    Degree
                                </label>

                                <input
                                    type="text"
                                    value={edu.degree}
                                    onChange={(e) => handleEducationChange(index, "degree", e.target.value)}
                                    className="w-full border rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base"
                                />

                            </div>

                            {/* SCHOOL */}
                            <div>

                                <label className="block mb-2 font-semibold text-sm sm:text-base">
                                    School
                                </label>

                                <input
                                    type="text"
                                    value={edu.school}
                                    onChange={(e) => handleEducationChange(index, "school", e.target.value)}
                                    className="w-full border rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base"
                                />

                            </div>

                            {/* GRADUATION DATE */}
                            <div className="md:col-span-2">

                                <label className="block font-semibold mb-2 text-sm sm:text-base">
                                    Graduation Date or Expected Graduation Date
                                </label>

                                <div className="flex flex-col sm:flex-row gap-4 mt-2">

                                    <select
                                        value={edu.graduationMonth}
                                        onChange={(e) => handleEducationChange(index, "graduationMonth", e.target.value)}
                                        className="border rounded-xl px-4 py-3 w-full text-sm sm:text-base"
                                    >

                                        <option value="">Month</option>

                                        {[
                                            "January",
                                            "February",
                                            "March",
                                            "April",
                                            "May",
                                            "June",
                                            "July",
                                            "August",
                                            "September",
                                            "October",
                                            "November",
                                            "December",
                                        ].map((month) => (
                                            <option key={month} value={month}>
                                                {month}
                                            </option>
                                        ))}

                                    </select>

                                    <select
                                        value={edu.graduationYear}
                                        onChange={(e) => handleEducationChange(index, "graduationYear", e.target.value)}
                                        className="border rounded-xl px-4 py-3 w-full text-sm sm:text-base"
                                    >

                                        <option value="">Year</option>

                                        {Array.from(
                                            { length: 15 },
                                            (_, index) => new Date().getFullYear() - 5 + index
                                        ).map((year) => (
                                            <option key={year} value={year}>
                                                {year}
                                            </option>
                                        ))}

                                    </select>

                                </div>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

            {/* ADD EDUCATION */}
            <button
                onClick={addEducation}
                className="mt-6 sm:mt-8 border-2 border-blue-700 text-blue-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base w-full sm:w-auto"
            >
                + Add Education
            </button>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between mt-10 sm:mt-14">

                <button
                    onClick={() => setCurrentStep(2)}
                    className="border px-6 sm:px-10 py-3 sm:py-4 rounded-full w-full sm:w-auto"
                >
                    Back
                </button>

                <button
                    onClick={() => setCurrentStep(4)}
                    className="bg-[#f5c04f] px-6 sm:px-10 py-3 sm:py-4 rounded-full font-semibold w-full sm:w-auto"
                >
                    Next: Skills
                </button>

            </div>

        </div>
    );
}