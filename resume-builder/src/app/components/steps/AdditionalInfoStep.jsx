export default function AdditionalInfoStep({
    resumeData,
    setResumeData,
    handleNext
}) {

    return (
        <div>

            <h1 className="text-4xl font-bold mb-8">
                Additional Information
            </h1>

            <textarea
                value={resumeData.additionalInfo}
                onChange={(e) =>
                    setResumeData({
                        ...resumeData,
                        additionalInfo: e.target.value
                    })
                }
                className="w-full border p-5 h-60"
                placeholder="Write additional details..."
            />

            <button
                onClick={handleNext}
                className="bg-yellow-400 px-8 py-3 rounded mt-6"
            >
                Finish
            </button>

        </div>
    );
}