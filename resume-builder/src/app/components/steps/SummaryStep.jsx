"use client";

export default function SummaryStep({
    resumeData,
    setResumeData,
    setCurrentStep,
}) {

    return (

        <div className="max-w-5xl">

            <h1 className="text-[52px] font-bold text-[#07203f] mb-5">
                Write a professional summary
            </h1>

            <textarea
                rows="10"
                value={resumeData.summary}
                onChange={(e) =>
                    setResumeData({
                        ...resumeData,
                        summary: e.target.value,
                    })
                }
                className="
          w-full
          border
          rounded-2xl
          px-6 py-5
          mt-10
          outline-none
        "
            />

            <div className="flex justify-between mt-14">

                <button
                    onClick={() => setCurrentStep(4)}
                    className="border px-10 py-4 rounded-full"
                >
                    Back
                </button>

                <button
                    onClick={() => setCurrentStep(6)}
                    className="bg-[#f5c04f] px-10 py-4 rounded-full font-semibold"
                >
                    Finalize
                </button>

            </div>

        </div>
    );
}