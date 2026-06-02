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

        <div className="max-w-5xl">

            <h1 className="text-[52px] font-bold text-[#07203f] mb-5">
                Add your skills
            </h1>

            <div className="space-y-5 mt-10">

                {resumeData.skills.map((skill, index) => (

                    <div
                        key={index}
                        className="flex items-center gap-4"
                    >

                        <input
                            type="text"
                            value={skill}
                            onChange={(e) =>
                                handleSkillChange(
                                    index,
                                    e.target.value
                                )
                            }
                            placeholder="React.js"
                            className="w-full border rounded-xl px-5 py-4"
                        />

                        <button
                            onClick={() =>
                                deleteSkill(index)
                            }
                            className="w-12 h-12 rounded-xl bg-red-100 text-red-600 text-2xl font-bold hover:bg-red-200"
                        >
                            ×
                        </button>

                    </div>

                ))}

            </div>

            <button
                onClick={addSkill}
                className="mt-8 border-2 border-blue-700 text-blue-700 px-8 py-4 rounded-full"
            >
                + Add Skill
            </button>

            <div className="flex justify-between mt-14">

                <button
                    onClick={() => setCurrentStep(3)}
                    className="border px-10 py-4 rounded-full"
                >
                    Back
                </button>

                <button
                    onClick={() => setCurrentStep(5)}
                    className="bg-[#f5c04f] px-10 py-4 rounded-full font-semibold"
                >
                    Next: Summary
                </button>

            </div>

        </div>
    );
}