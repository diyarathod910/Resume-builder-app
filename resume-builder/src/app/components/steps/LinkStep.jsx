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
        <div>

            <h1 className="text-4xl font-bold mb-8">
                Links / Portfolio
            </h1>

            <div className="space-y-4">

                {(resumeData.links || []).map((link, i) => (

                    <input
                        key={i}
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
                        className="w-full border p-3 rounded"
                    />

                ))}

            </div>

            <button
                onClick={addLink}
                className="bg-gray-200 px-5 py-2 rounded mt-5"
            >
                Add Link
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
                className="bg-yellow-400 px-8 py-3 rounded ml-4"
            >
                Next
            </button>

        </div>
    );
}