export default function AdditionalInfoStep({
    resumeData,
    setResumeData,
    handleNext
}) {

    return (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8">

            {/* TITLE */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#07203f] mb-6 sm:mb-8">
                Additional Information
            </h1>

            {/* TEXTAREA */}
            <textarea
                value={resumeData.additionalInfo}
                onChange={(e) =>
                    setResumeData({
                        ...resumeData,
                        additionalInfo: e.target.value
                    })
                }
                placeholder="Write additional details..."
                className="w-full border border-gray-300 rounded-2xl p-4 sm:p-5 h-40 sm:h-52 lg:h-60 outline-none focus:border-blue-600 resize-none text-sm sm:text-base"
            />

            {/* BUTTON */}
            <div className="mt-6">

                <button
                    onClick={handleNext}
                    className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 transition px-6 sm:px-8 py-3 rounded-xl sm:rounded-2xl text-base sm:text-lg font-semibold"
                >
                    Finish
                </button>

            </div>

        </div>
    );
}