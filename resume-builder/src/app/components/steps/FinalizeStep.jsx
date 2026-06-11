"use client";

import { useRouter } from "next/navigation";

export default function FinalizeStep({
    resumeData,
    selectedSections,
    setSelectedSections,
    handleNext,
    resumeId
}) {

    const sections = [
        {
            id: "certifications",
            label: "Certifications",
        },
        {
            id: "links",
            label: "Websites, Portfolios, Profiles",
        },
        {
            id: "personalDetails",
            label: "Personal Details",
        },
        {
            id: "additionalInfo",
            label: "Additional Information",
        },
        {
            id: "languages",
            label: "Languages"
        }
    ];
    const router = useRouter();
    const toggleSection = (id) => {

        if (selectedSections.includes(id)) {

            setSelectedSections(
                selectedSections.filter(
                    (item) => item !== id
                )
            );

        } else {

            setSelectedSections([
                ...selectedSections,
                id,
            ]);

        }
    };

    return (
        <div className="w-full max-w-5xl px-4 sm:px-6 lg:p-10">

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F2147] mb-8 sm:mb-12 leading-tight">
                Do you have anything else to add?
            </h1>

            <div className="space-y-4 sm:space-y-5">

                {sections.map((section) => (

                    <label
                        key={section.id}
                        className="flex items-start sm:items-center gap-3 sm:gap-4 text-base sm:text-lg lg:text-[22px] font-medium text-[#1B1B1B] cursor-pointer"
                    >

                        <input
                            type="checkbox"
                            checked={selectedSections.includes(section.id)}
                            onChange={() => toggleSection(section.id)}
                            className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 mt-1 sm:mt-0 rounded border border-gray-400 shrink-0"
                        />

                        <span>
                            {section.label}
                        </span>

                    </label>

                ))}

            </div>

            <button
                onClick={() => {

                    if (selectedSections.length > 0) {

                        const currentSection = selectedSections[0];

                        handleNext();

                        setSelectedSections(
                            selectedSections.filter(
                                (item) => item !== currentSection
                            )
                        );

                    } else {

                        localStorage.setItem(
                            "resumeData",
                            JSON.stringify(resumeData)
                        );

                        router.push(`/smart-apply/${resumeId}`);
                    }

                }}
                className="w-full sm:w-auto mt-10 sm:mt-14 bg-[#F7C548] hover:bg-[#efbb33] transition-all px-8 sm:px-12 py-3 sm:py-4 rounded-2xl text-lg sm:text-xl lg:text-[28px] font-bold text-black"
            >
                Next
            </button>

        </div>
    );
}