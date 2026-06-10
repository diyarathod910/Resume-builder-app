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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 md:py-10">

            {/* BACK BUTTON */}
            <button
                onClick={() => setCurrentStep(6)}
                className="text-blue-700 font-medium mb-4 sm:mb-6 text-sm sm:text-base"
            >
                ← Go Back
            </button>

            {/* HEADING */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] leading-tight">
                Add your language skills
            </h1>

            <p className="mt-3 sm:mt-4 text-base sm:text-lg lg:text-[22px] text-gray-700">
                Include your native language and additional languages you speak.
            </p>

            {/* LANGUAGE BUTTONS */}
            <div className="flex flex-wrap gap-3 sm:gap-4 mt-8 sm:mt-10">

                {languages.map((lang, i) => (

                    <button
                        key={i}
                        onClick={() => addLanguage(lang)}
                        className="border-2 border-[#1E3A8A] text-[#1E3A8A] px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-[#EEF2FF] text-sm sm:text-base"
                    >
                        {lang} +
                    </button>

                ))}

            </div>

            {/* CUSTOM LANGUAGE */}
            <div className="mt-6 sm:mt-8">

                <button
                    onClick={() => {
                        const custom = prompt("Enter language");
                        if (!custom) return;
                        addLanguage(custom);
                    }}
                    className="text-blue-700 font-semibold text-sm sm:text-base"
                >
                    + Add another language
                </button>

            </div>

            {/* SELECTED LANGUAGES */}
            <div className="mt-8 sm:mt-10">

                <h3 className="font-semibold text-lg sm:text-xl mb-4">
                    Selected Languages
                </h3>

                <div className="flex flex-wrap gap-3">

                    {resumeData.languages?.map((lang, i) => (

                        <div
                            key={i}
                            className="bg-blue-100 text-blue-800 px-3 sm:px-4 py-2 rounded-full flex items-center gap-2 sm:gap-3 text-sm sm:text-base"
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
                                className="font-bold hover:text-red-600"
                            >
                                ✕
                            </button>

                        </div>

                    ))}

                </div>

            </div>

            {/* BUTTON */}
            <div className="flex justify-center sm:justify-end mt-10 sm:mt-16">

                <button
                    onClick={() => {

                        setSelectedSections(
                            selectedSections.filter(
                                (item) => item !== "languages"
                            )
                        );

                        handleNext();

                    }}
                    className="w-full sm:w-auto bg-[#F7C04A] hover:bg-yellow-400 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg lg:text-xl font-semibold transition-all"
                >
                    Save & Next
                </button>

            </div>

        </div>
    );
}