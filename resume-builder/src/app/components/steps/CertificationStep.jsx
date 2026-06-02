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
        <div>

            <h1 className="text-4xl font-bold mb-8">
                Certifications
            </h1>

            {
                resumeData.certifications.map((cert, i) => (
                    <div
                        key={i}
                        className="mb-5"
                    >

                        <input
                            type="text"
                            placeholder="Certification"
                            value={cert.title}
                            onChange={(e) =>
                                handleChange(
                                    i,
                                    "title",
                                    e.target.value
                                )
                            }
                            className="border p-3 w-full mb-3"
                        />

                        <input
                            type="text"
                            placeholder="Year"
                            value={cert.year}
                            onChange={(e) =>
                                handleChange(
                                    i,
                                    "year",
                                    e.target.value
                                )
                            }
                            className="border p-3 w-full"
                        />

                    </div>
                ))
            }

            <button
                onClick={addCertification}
                className="bg-gray-200 px-5 py-2 rounded"
            >
                Add More
            </button>

            <button
                onClick={handleNext}
                className="bg-yellow-400 px-8 py-3 rounded ml-4"
            >
                Next
            </button>

        </div>
    );
}