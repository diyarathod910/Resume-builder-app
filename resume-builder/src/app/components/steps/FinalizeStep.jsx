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
        <div className="p-10">

            <h1 className="text-4xl leading-15.5 font-extrabold text-[#0F2147] mb-12 ">
                Do you have anything else to add?
            </h1>

            <div className="space-y-5">

                {sections.map((section) => (

                    <label
                        key={section.id}
                        className="flex items-center gap-4 text-[22px] font-medium text-[#1B1B1B]"
                    >

                        <input
                            type="checkbox"
                            checked={selectedSections.includes(
                                section.id
                            )}
                            onChange={() =>
                                toggleSection(section.id)
                            }
                            className="w-7 h-7 rounded border border-gray-400"
                        />

                        {section.label}

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

                        router.push(
                            `/smart-apply?id=${resumeId || ""}`
                        );
                    }

                }}
                className=" mt-14 bg-[#F7C548] hover:bg-[#efbb33] transition-all px-12 py-4 rounded-2xl text-[28px] font-bold text-black">
                Next
            </button>

        </div>
    );
}