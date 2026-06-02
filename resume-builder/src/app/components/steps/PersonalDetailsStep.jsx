"use client";

export default function PersonalDetailsStep({
    resumeData,
    setResumeData,
    handleNext,
}) {

    const details =
        resumeData.personalDetails || {};

    const handleChange = (field, value) => {

        setResumeData({
            ...resumeData,

            personalDetails: {
                ...details,
                [field]: value,
            },
        });
    };

    return (
        <div className="max-w-5xl mx-auto px-10 py-12">

            {/* TITLE */}
            <h1 className="text-[52px] leading-15 font-bold text-[#0b1f44] max-w-4xl">
                Do you want to add personal details?
            </h1>

            {/* SUBTITLE */}
            <p className="text-[#6b7280] text-[18px] mt-5 max-w-3xl leading-8">
                Adding personal details can help the employer
                get to know you better.
            </p>

            {/* FORM */}
            <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-8">

                {/* NATIONALITY */}
                <div>

                    <label className="block text-[16px] font-medium text-[#111827] mb-3">
                        Nationality
                    </label>

                    <input
                        type="text"
                        value={details.nationality || ""}
                        onChange={(e) =>
                            handleChange(
                                "nationality",
                                e.target.value
                            )
                        }
                        placeholder="e.g. Indian"
                        className="
                            w-full
                            h-14.5
                            border
                            border-[#d1d5db]
                            rounded-xl
                            px-5
                            text-[16px]
                            outline-none
                            focus:border-[#2563eb]
                        "
                    />

                </div>

                {/* MARITAL STATUS */}
                <div>

                    <label className="block text-[16px] font-medium text-[#111827] mb-3">
                        Marital Status
                    </label>

                    <select
                        value={details.maritalStatus || ""}
                        onChange={(e) =>
                            handleChange(
                                "maritalStatus",
                                e.target.value
                            )
                        }
                        className="
                            w-full
                           h-14.5
                            border
                            border-[#d1d5db]
                            rounded-xl
                            px-5
                            text-[16px]
                            outline-none
                            focus:border-[#2563eb]
                            bg-white
                        "
                    >

                        <option value="">
                            Select status
                        </option>

                        <option value="Single">
                            Single
                        </option>

                        <option value="Married">
                            Married
                        </option>

                    </select>

                </div>

                {/* DATE OF BIRTH */}
                <div>

                    <label className="block text-[16px] font-medium text-[#111827] mb-3">
                        Date of Birth
                    </label>

                    <input
                        type="date"
                        value={details.dob || ""}
                        onChange={(e) =>
                            handleChange(
                                "dob",
                                e.target.value
                            )
                        }
                        className="
                            w-full
                           h-14.5
                            border
                            border-[#d1d5db]
                            rounded-xl
                            px-5
                            text-[16px]
                            outline-none
                            focus:border-[#2563eb]
                        "
                    />

                </div>

                {/* GENDER */}
                <div>

                    <label className="block text-[16px] font-medium text-[#111827] mb-3">
                        Gender
                    </label>

                    <select
                        value={details.gender || ""}
                        onChange={(e) =>
                            handleChange(
                                "gender",
                                e.target.value
                            )
                        }
                        className="
                            w-full
                           h-14.5
                            border
                            border-[#d1d5db]
                            rounded-xl
                            px-5
                            text-[16px]
                            outline-none
                            focus:border-[#2563eb]
                            bg-white
                        "
                    >

                        <option value="">
                            Select gender
                        </option>

                        <option value="Male">
                            Male
                        </option>

                        <option value="Female">
                            Female
                        </option>

                    </select>

                </div>

            </div>

            {/* BUTTON */}
            <button
                onClick={handleNext}
                className="
                    mt-14
                    bg-[#facc15]
                    hover:bg-[#eab308]
                    transition
                    px-10
                    h-14.5
                    rounded-full
                    text-[17px]
                    font-semibold
                    text-black
                "
            >
                Next
            </button>

        </div>
    );
}