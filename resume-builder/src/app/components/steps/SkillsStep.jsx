"use client";

export default function SkillsStep({
    resumeData,
    setResumeData,
    setCurrentStep,
}) {

    const handleSkillChange = (
        index,
        value
    ) => {

        const updatedSkills = [
            ...resumeData.skills,
        ];

        updatedSkills[index] = value;

        setResumeData({
            ...resumeData,
            skills: updatedSkills,
        });
    };

    const addSkill = () => {

        setResumeData({
            ...resumeData,

            skills: [
                ...resumeData.skills,
                "",
            ],
        });
    };
    const deleteSkill = (index) => {

        const updatedSkills =
            resumeData.skills.filter(
                (_, i) => i !== index
            );

        setResumeData({
            ...resumeData,
            skills: updatedSkills,
        });
    };

    return (

        <div className="w-full max-w-5xl px-4 sm:px-6 lg:px-0">

            <h1 className="text-3xl sm:text-4xl lg:text-[52px] font-bold text-[#07203f] mb-5">
                Add your skills
            </h1>

            <div className="space-y-4 sm:space-y-5 mt-8 sm:mt-10">

                {resumeData.skills.map((skill, index) => (

                    <div
                        key={index}
                        className="flex items-center gap-3"
                    >

                        <input
                            type="text"
                            value={skill}
                            onChange={(e) =>
                                handleSkillChange(index, e.target.value)
                            }
                            placeholder="React.js"
                            className="flex-1 border rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base"
                        />

                        <button
                            onClick={() => deleteSkill(index)}
                            className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-red-100 text-red-600 text-xl font-bold hover:bg-red-200 transition-all shrink-0"
                        >
                            ×
                        </button>

                    </div>

                ))}

            </div>

            <button
                onClick={addSkill}
                className="mt-6 sm:mt-8 border-2 border-blue-700 text-blue-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base w-full sm:w-auto"
            >
                + Add Skill
            </button>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between mt-10 sm:mt-14">

                <button
                    onClick={() => setCurrentStep(3)}
                    className="border px-6 sm:px-10 py-3 sm:py-4 rounded-full w-full sm:w-auto"
                >
                    Back
                </button>

                <button
                    onClick={() => setCurrentStep(5)}
                    className="bg-[#f5c04f] px-6 sm:px-10 py-3 sm:py-4 rounded-full font-semibold w-full sm:w-auto"
                >
                    Next: Summary
                </button>

            </div>

        </div>
    );
}