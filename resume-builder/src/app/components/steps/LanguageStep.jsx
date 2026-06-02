"use client";

export default function LanguageStep({
    resumeData,
    setResumeData,
    handleNext,
    selectedSections,
    setSelectedSections,
}) {

    const languages = [
        "English",
        "Hindi",
        "Tamil",
        "Telugu",
        "Marathi",
        "Gujarati"
    ];

    const addLanguage = (lang) => {

        const alreadyExist =
            resumeData.languages?.includes(lang);

        if (alreadyExist) return;

        setResumeData({
            ...resumeData,
            languages: [
                ...(resumeData.languages || []),
                lang,
            ],
        });
    };

    return (
        <div className="px-14 py-10">

            <button
                onClick={() => setCurrentStep(6)}
                className="text-blue-700 font-medium mb-6"
            >
                ← Go Back
            </button>

            <h1 className="text-5xl font-bold text-[#0F172A] leading-tight">
                Add your language skills
            </h1>

            <p className="mt-4 text-[22px] text-gray-700">
                Include your native language and additional
                languages you speak.
            </p>

            {/* LANGUAGE BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-10">

                {languages.map((lang, i) => (

                    <button
                        key={i}
                        onClick={() => addLanguage(lang)}
                        className="border-2 border-[#1E3A8A]
                        text-[#1E3A8A] px-8 py-3 rounded-full
                        font-semibold hover:bg-[#EEF2FF]"
                    >
                        {lang} +
                    </button>

                ))}

            </div>

            {/* CUSTOM LANGUAGE */}
            <div className="mt-8">

                <button
                    onClick={() => {
                        const custom =
                            prompt("Enter language");

                        if (!custom) return;

                        addLanguage(custom);
                    }}
                    className="text-blue-700 font-semibold"
                >
                    + Add another language
                </button>

            </div>

            {/* SELECTED */}
            <div className="mt-10">
                <h3 className="font-semibold text-lg mb-4">
                    Selected Languages
                </h3>

                <div className="flex flex-wrap gap-3">

                    {resumeData.languages?.map((lang, i) => (

                        <div
                            key={i}
                            className="bg-blue-100 text-blue-800
                            px-4 py-2 rounded-full flex items-center gap-3"
                        >
                            {lang}

                            <button
                                onClick={() => {

                                    const updated =
                                        resumeData.languages.filter(
                                            (_, index) => index !== i
                                        );

                                    setResumeData({
                                        ...resumeData,
                                        languages: updated,
                                    });
                                }}
                            >
                                ✕
                            </button>

                        </div>

                    ))}

                </div>
            </div>

            {/* BUTTON */}
            <div className="flex justify-end mt-16">

                <button
                    onClick={() => {

                        setSelectedSections(
                            selectedSections.filter(
                                (item) => item !== "links"
                            )
                        );

                        handleNext();

                    }}
                    className="bg-[#F7C04A]
                    hover:bg-yellow-400
                    px-10 py-4 rounded-full
                    text-xl font-semibold"
                >
                    Save & Next
                </button>

            </div>

        </div>
    );
}