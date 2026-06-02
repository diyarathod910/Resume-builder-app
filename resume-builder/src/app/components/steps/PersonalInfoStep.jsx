export default function PersonalInfoStep({
    resumeData,
    setResumeData,
    setCurrentStep,
}) {

    const handleChange = (e) => {

        setResumeData({
            ...resumeData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="max-w-4xl">

            <h1 className="text-5xl font-bold text-[#07203f] mb-5">
                What’s the best way for employers to contact you?
            </h1>

            <p className="text-gray-600 mb-12 text-lg">
                We suggest including an email and phone number.
            </p>

            <div className="grid grid-cols-2 gap-6">

                <div>
                    <label className="block mb-2 font-semibold">
                        Full Name
                    </label>

                    <input
                        type="text"
                        name="name"
                        value={resumeData.name}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-blue-600"
                    />
                </div>
                <div>
                    <label className="block mb-2 font-semibold">
                        Profession
                    </label>

                    <input
                        type="text"
                        name="profession"
                        value={resumeData.profession}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-blue-600"
                    />
                </div>

                <div>
                    <label className="block mb-2 font-semibold">
                        Email
                    </label>

                    <input
                        type="email"
                        name="email"
                        value={resumeData.email}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-blue-600"
                    />
                </div>

                <div>
                    <label className="block mb-2 font-semibold">
                        Phone
                    </label>
                    <input
                        type="text"
                        name="phone"
                        value={resumeData.phone}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-blue-600"
                    />
                </div>

            </div>

            <div className="mt-6">
                <label className="block mb-2 font-semibold">
                    Location
                </label>

                <input
                    type="text"
                    name="location"
                    value={resumeData.location}
                    onChange={handleChange}

                    className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-blue-600"
                />
            </div>
            <div className="mt-6">

                <label className="block text-[16px] font-semibold mb-2">
                    Profile Photo
                </label>

                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {

                        const file = e.target.files[0];

                        if (file) {

                            const reader = new FileReader();

                            reader.onloadend = () => {

                                setResumeData({
                                    ...resumeData,
                                    image: reader.result,
                                });

                            };

                            reader.readAsDataURL(file);

                        }

                    }}
                    className="w-full border border-gray-300 rounded-xl p-3"
                />

            </div>

            {/* <div className="mt-6">
                <label className="block mb-2 font-semibold">
                    Professional Summary
                </label>

                <textarea
                    rows="6"
                    name="summary"
                    value={resumeData.summary}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-blue-600 resize-none"
                />
            </div> */}

            <div className="flex justify-end mt-10"></div>
            <button
                onClick={() => setCurrentStep(2)}
                className="bg-[#f5c04f] hover:bg-[#efb63d] transition text-black px-10 py-4 rounded-full text-lg font-semibold"
            >
                Next: Work History
            </button>

        </div>


    );
}