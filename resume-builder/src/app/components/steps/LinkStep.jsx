export default function LinksStep({
    resumeData,
    setResumeData,
    handleNext,
    selectedSections,
    setSelectedSections,
}) {

    const handleLinkChange = (index, field, value) => {

        const updatedLinks = [...(resumeData.links || [])];

        updatedLinks[index][field] = value;

        setResumeData({
            ...resumeData,
            links: updatedLinks,
        });
    };

    const addLink = () => {

        setResumeData({
            ...resumeData,
            links: [
                ...(resumeData.links || []),
                {
                    url: "",
                    label: "",
                    addToHeader: false,
                },
            ],
        });
    };

    return (
        <div className="w-full max-w-5xl px-4 sm:px-6 lg:px-0">

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#07203f] mb-8 sm:mb-10">
                Links / Portfolio
            </h1>

            <div className="space-y-4 sm:space-y-5">

                {(resumeData.links || []).map((link, i) => (

                    <div
                        key={i}
                        className="bg-white border rounded-2xl p-4 sm:p-5"
                    >

                        <label className="block mb-2 font-semibold text-sm sm:text-base">
                            Portfolio / Website Link
                        </label>

                        <input
                            type="text"
                            placeholder="https://github.com/yourname"
                            value={link.url}
                            onChange={(e) =>
                                handleLinkChange(
                                    i,
                                    "url",
                                    e.target.value
                                )
                            }
                            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-600 text-sm sm:text-base"
                        />

                    </div>

                ))}

            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 sm:mt-10">

                <button
                    onClick={addLink}
                    className="w-full sm:w-auto border-2 border-blue-700 text-blue-700 px-6 py-3 rounded-full font-medium hover:bg-blue-50 transition-all"
                >
                    + Add Link
                </button>

                <button
                    onClick={() => {

                        setSelectedSections(
                            selectedSections.filter(
                                (item) => item !== "links"
                            )
                        );

                        handleNext();

                    }}
                    className="w-full sm:w-auto bg-[#f5c04f] hover:bg-[#efb63d] transition px-8 py-3 rounded-full font-semibold"
                >
                    Next
                </button>

            </div>

        </div>
    );
}