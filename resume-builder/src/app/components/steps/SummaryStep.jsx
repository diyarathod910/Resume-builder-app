"use client";

export default function SummaryStep({
    resumeData,
    setResumeData,
    setCurrentStep,
}) {

    return (

        <div className="w-full max-w-5xl px-4 sm:px-6 lg:px-0">

            {/* HEADING */}
            <h1 className="text-3xl sm:text-4xl lg:text-[52px] font-bold text-[#07203f] mb-4 sm:mb-5">
                Write a professional summary
            </h1>

            <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8">
                Briefly describe your experience, skills, and career achievements.
            </p>

            {/* TEXTAREA */}
            <textarea
                rows="10"
                value={resumeData.summary}
                onChange={(e) =>
                    setResumeData({
                        ...resumeData,
                        summary: e.target.value,
                    })
                }
                placeholder="Experienced software developer with 3+ years of experience building scalable web applications..."
                className="w-full border border-gray-300 rounded-2xl px-4 sm:px-6 py-4 sm:py-5 text-sm sm:text-base outline-none focus:border-blue-600 resize-none mt-4 sm:mt-6"
            />

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between mt-10 sm:mt-14">

                <button
                    onClick={() => setCurrentStep(4)}
                    className="w-full sm:w-auto border px-6 sm:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-base"
                >
                    Back
                </button>

                <button
                    onClick={() => setCurrentStep(6)}
                    className="w-full sm:w-auto bg-[#f5c04f] px-6 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base"
                >
                    Finalize
                </button>

            </div>

        </div>
    );
}