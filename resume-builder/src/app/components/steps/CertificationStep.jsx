export default function CertificationStep({
    resumeData,
    setResumeData,
    handleNext
}) {

    const handleChange = (index, field, value) => {

        const updated =
            [...resumeData.certifications];

        updated[index][field] = value;

        setResumeData({
            ...resumeData,
            certifications: updated
        });

    };

    const addCertification = () => {

        setResumeData({
            ...resumeData,
            certifications: [
                ...resumeData.certifications,
                {
                    title: "",
                    year: ""
                }
            ]
        });

    };

    return (
        <div className="w-full max-w-5xl px-4 sm:px-6 lg:px-0">

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#07203f] mb-8 sm:mb-10">
                Certifications
            </h1>

            <div className="space-y-5 sm:space-y-6">

                {resumeData.certifications.map((cert, i) => (

                    <div
                        key={i}
                        className="bg-white border rounded-2xl p-4 sm:p-6"
                    >

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                            <div>

                                <label className="block mb-2 font-semibold text-sm sm:text-base">
                                    Certification
                                </label>

                                <input
                                    type="text"
                                    placeholder="AWS Certified Developer"
                                    value={cert.title}
                                    onChange={(e) =>
                                        handleChange(
                                            i,
                                            "title",
                                            e.target.value
                                        )
                                    }
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-600"
                                />

                            </div>

                            <div>

                                <label className="block mb-2 font-semibold text-sm sm:text-base">
                                    Year
                                </label>

                                <input
                                    type="text"
                                    placeholder="2025"
                                    value={cert.year}
                                    onChange={(e) =>
                                        handleChange(
                                            i,
                                            "year",
                                            e.target.value
                                        )
                                    }
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-600"
                                />

                            </div>

                        </div>

                    </div>

                ))}

            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 sm:mt-10">

                <button
                    onClick={addCertification}
                    className="w-full sm:w-auto border-2 border-blue-700 text-blue-700 px-6 py-3 rounded-full font-medium hover:bg-blue-50 transition-all"
                >
                    + Add Certification
                </button>

                <button
                    onClick={handleNext}
                    className="w-full sm:w-auto bg-[#f5c04f] hover:bg-[#efb63d] transition px-8 py-3 rounded-full font-semibold"
                >
                    Next
                </button>

            </div>

        </div>
    );
}