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

    const uploadImage = async (file) => {

        const formData = new FormData();

        formData.append("file", file);
        formData.append("upload_preset", "resume_builder");

        const response = await fetch(
            `https://api.cloudinary.com/v1_1/dxynhn4h7/image/upload`,
            {
                method: "POST",
                body: formData,
            }
        );

        const data = await response.json();

        return data.secure_url;
    };

    return (
        <div className="w-full max-w-4xl mx-auto">

            {/* HEADING */}
            <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-[#07203f] mb-4">
                What's the best way for employers to contact you?
            </h1>

            <p className="text-gray-600 mb-8 text-base md:text-lg">
                We suggest including an email and phone number.
            </p>

            {/* FORM */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

                <div>
                    <label className="block mb-2 font-semibold">
                        Full Name
                    </label>

                    <input
                        type="text"
                        name="name"
                        value={resumeData.name}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-600"
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
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-600"
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
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-600"
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
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-600"
                    />
                </div>

            </div>

            {/* LOCATION */}
            <div className="mt-5">

                <label className="block mb-2 font-semibold">
                    Location
                </label>

                <input
                    type="text"
                    name="location"
                    value={resumeData.location}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-600"
                />

            </div>

            {/* PROFILE PHOTO */}
            <div className="mt-5">

                <label className="block mb-2 font-semibold">
                    Profile Photo
                </label>

                <input
                    type="file"
                    accept="image/*"
                    onChange={async(e) => {

                        const file = e.target.files[0];

                        if (file) {

                            const reader = new FileReader();

                            const imageUrl = await uploadImage(file);

                            setResumeData({
                                ...resumeData,
                                image: imageUrl,
                            });

                            reader.readAsDataURL(file);

                        }

                    }}
                    className="w-full border border-gray-300 rounded-xl p-3"
                />

            </div>

            {/* BUTTON */}
            <div className="flex justify-end mt-8">

                <button
                    onClick={() => setCurrentStep(2)}
                    className="w-full sm:w-auto bg-[#f5c04f] hover:bg-[#efb63d] transition text-black px-8 py-3 rounded-full text-lg font-semibold"
                >
                    Next: Work History
                </button>

            </div>

        </div>


    );
}