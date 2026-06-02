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

        <div className="max-w-5xl">

            <h1 className="text-[52px] font-bold text-[#07203f] mb-5">
                Tell us about your education
            </h1>

            <div className="space-y-8 mt-10">

                {resumeData.education.map((edu, index) => (

                    <div
                        key={index}
                        className="bg-white p-8 rounded-3xl border"
                    >

                        <div className="grid grid-cols-2 gap-6">

                            {/* DEGREE */}
                            <div>
                                <label className="block mb-2 font-semibold">
                                    Degree
                                </label>

                                <input
                                    type="text"
                                    value={edu.degree}
                                    onChange={(e) =>
                                        handleEducationChange(
                                            index,
                                            "degree",
                                            e.target.value
                                        )
                                    }
                                    className="w-full border rounded-xl px-5 py-4"
                                />
                            </div>

                            {/* SCHOOL */}
                            <div>
                                <label className="block mb-2 font-semibold">
                                    School
                                </label>

                                <input
                                    type="text"
                                    value={edu.school}
                                    onChange={(e) =>
                                        handleEducationChange(
                                            index,
                                            "school",
                                            e.target.value
                                        )
                                    }
                                    className="w-full border rounded-xl px-5 py-4"
                                />
                            </div>

                            {/* YEAR */}
                            <div className="mt-6">
                                <label className="w-full font-semibold mb-2">
                                    Graduation Date or Expected Graduation Date
                                </label>

                                <div className="flex gap-4 mt-2">

                                    <select
                                        value={edu.graduationMonth}
                                        onChange={(e) =>
                                            handleEducationChange(
                                                index,
                                                "graduationMonth",
                                                e.target.value
                                            )
                                        }
                                        className="border rounded-xl px-4 py-3 w-full"
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
                                        onChange={(e) =>
                                            handleEducationChange(
                                                index,
                                                "graduationYear",
                                                e.target.value
                                            )
                                        }
                                        className="border rounded-xl px-4 py-3 w-full"
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

            {/* ADD */}
            <button
                onClick={addEducation}
                className="mt-8 border-2 border-blue-700 text-blue-700 px-8 py-4 rounded-full"
            >
                + Add Education
            </button>

            {/* BUTTONS */}
            <div className="flex justify-between mt-14">

                <button
                    onClick={() => setCurrentStep(2)}
                    className="border px-10 py-4 rounded-full"
                >
                    Back
                </button>

                <button
                    onClick={() => setCurrentStep(4)}
                    className="bg-[#f5c04f] px-10 py-4 rounded-full font-semibold"
                >
                    Next: Skills
                </button>

            </div>

        </div>
    );
}