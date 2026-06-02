"use client";

export default function BlueSidebarTemplate({ data }) {
    if (!data) return null;

    return (
        <div className="w-full flex justify-center ">

            {/* RESUME CONTAINER */}
            <div className="w-full bg-white flex font-sans ">

                {/* LEFT SIDEBAR */}
                <div className="w-[32%] bg-[#2b8ac6] text-white flex flex-col gap-5 p-[4%]">

                    {/* PROFILE IMAGE */}
                    <div className="flex justify-center">
                        <img
                            src={data.image || "/profile.jpg"}
                            alt="profile"
                            className="w-[50%] aspect-square rounded-full object-cover border-2 border-white"
                        />
                    </div>

                    {/* NAME */}
                    <div className="flex flex-col gap-1">
                        <h1 className="text-[22px] font-bold leading-6">
                            {data?.name?.split(" ")[0]}
                            <br />
                            {data?.name?.split(" ")[1]}
                        </h1>

                        <p className="text-[11px] text-gray-100">
                            {data.profession}
                        </p>
                    </div>

                    {/* CONTACT */}
                    <div className="flex flex-col gap-2">
                        <h2 className="text-[13px] font-semibold border-b border-white pb-1">
                            Contact
                        </h2>

                        <div className="flex flex-col gap-1 text-[10px]">
                            <p>{data.location}</p>
                            <p>{data.phone}</p>
                            <p>{data.email}</p>
                        </div>
                    </div>

                    {/* SKILLS */}
                    {data.skills?.length > 0 && (
                        <div className="flex flex-col gap-2">
                            <h2 className="text-[13px] font-semibold border-b border-white pb-1">
                                Skills
                            </h2>

                            <div className="flex flex-wrap gap-2">
                                {data.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="text-[9px] bg-[#4fa7de] px-[6%] py-[2%] rounded-full"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* LANGUAGES */}
                    {data.languages?.length > 0 && (
                        <div className="flex flex-col gap-2">
                            <h2 className="text-[13px] font-semibold border-b border-white pb-1">
                                Languages
                            </h2>

                            <div className="flex flex-wrap gap-2">
                                {data.languages.map((lang, i) => (
                                    <span
                                        key={i}
                                        className="text-[9px] bg-[#4fa7de] px-[7%] py-[2%] rounded-full"
                                    >
                                        {lang}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* RIGHT SECTION */}
                <div className="w-[68%] flex flex-col p-[4%] gap-5">

                    {/* SUMMARY */}
                    <div className="flex flex-col gap-2">
                        <p className="text-[11px] text-gray-700 leading-5">
                            {data.summary}
                        </p>
                    </div>

                    {/* WORK HISTORY */}
                    {data.experience?.length > 0 && (
                        <div className="flex flex-col gap-2">
                            <h2 className="text-[15px] font-bold text-[#2b8ac6] border-b border-gray-300 pb-1">
                                Work History
                            </h2>

                            {data.experience.map((job, i) => (
                                <div
                                    key={i}
                                    className="flex gap-[3%]"
                                >

                                    {/* YEAR */}
                                    <div className="w-[22%] text-[10px] text-gray-600">
                                        <p>{job.startMonth} {job.startYear} -{" "} {job.present
                                            ? "Present"
                                            : job.endYear}
                                        </p>
                                    </div>

                                    {/* CONTENT */}
                                    <div className="w-[78%] flex flex-col gap-1">
                                        <h3 className="text-[12px] font-bold">
                                            {job.title}
                                        </h3>

                                        <p className="text-[10px] italic text-gray-600">
                                            {job.company},{" "}
                                            {job.location}
                                        </p>

                                        <div className="text-[10px] text-gray-700 leading-4 whitespace-pre-line">

                                            {job.description
                                                ?.split("\n")
                                                .filter((line) => line.trim() !== "")
                                                .map((line, index) => (
                                                    <p key={index}>
                                                        • {line.trim()}
                                                    </p>
                                                ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* CERTIFICATIONS */}
                    {data.certifications?.length > 0 && (
                        <div className="flex flex-col gap-3">
                            <h2 className="text-[15px] font-bold text-[#2b8ac6] border-b border-gray-300 pb-1">
                                Certifications
                            </h2>

                            <div className="flex flex-col gap-1">
                                {data.certifications.map((cert, i) => (
                                    <div
                                        key={i}
                                        className="text-[10px] text-gray-700"
                                    >
                                        • {cert.title} - {cert.year}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    {/* EDUCATION */}
                    {data.education?.length > 0 && (
                        <div className="flex flex-col gap-3">
                            <h2 className="text-[15px] font-bold text-[#2b8ac6] border-b border-gray-300 pb-1">
                                Education
                            </h2>

                            {data.education.map((edu, i) => (
                                <div
                                    key={i}
                                    className="flex gap-[4%]"
                                >
                                    {/* YEAR */}
                                    <div className="w-[22%] text-[10px] text-gray-600">
                                        • {edu.graduationMonth} {edu.graduationYear}

                                        {
                                            new Date(
                                                `${edu.graduationMonth} 1, ${edu.graduationYear}`
                                            ) > new Date()
                                                ? " (Expected)"
                                                : ""
                                        }
                                    </div>

                                    {/* CONTENT */}
                                    <div className="w-[78%] flex flex-col gap-1">
                                        <h3 className="text-[12px] font-bold">
                                            {edu.degree}
                                        </h3>

                                        <p className="text-[10px] italic text-gray-600">
                                            {edu.school}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {data?.links?.length > 0 && (
                        <div className="mt-7">

                            <SectionTitle title="Links" />

                            <div className="mt-3 space-y-1">

                                {data.links.map((link, i) => (

                                    link.url && (
                                        <p
                                            key={i}
                                            className="
                            text-[12px]
                            text-blue-600
                            break-all
                        "
                                        >
                                            {link.url}
                                        </p>
                                    )

                                ))}

                            </div>

                        </div>
                    )}
                    {/* perosnal details */}
                    {(
                        data?.personalDetails?.nationality ||
                        data?.personalDetails?.maritalStatus ||
                        data?.personalDetails?.dob ||
                        data?.personalDetails?.gender
                    ) && (

                            <div className="mt-7">

                                <SectionTitle title="Personal Details" />

                                <div className="mt-3 space-y-1  text-[10px] text-gray-600">

                                    {data?.personalDetails?.nationality && (
                                        <p>
                                            Nationality:
                                            {" "}
                                            {data.personalDetails.nationality}
                                        </p>
                                    )}

                                    {data?.personalDetails?.maritalStatus && (
                                        <p>
                                            Marital Status:
                                            {" "}
                                            {data.personalDetails.maritalStatus}
                                        </p>
                                    )}

                                    {data?.personalDetails?.dob && (
                                        <p>
                                            Date of Birth:
                                            {" "}
                                            {data.personalDetails.dob}
                                        </p>
                                    )}

                                    {data?.personalDetails?.gender && (
                                        <p>
                                            Gender:
                                            {" "}
                                            {data.personalDetails.gender}
                                        </p>
                                    )}

                                </div>

                            </div>

                        )}
                    {/* additional info */}
                    {data?.additionalInfo && (
                        <div className="mt-7">

                            <SectionTitle title="Additional Information" />

                            <p className="text-[12px] mt-2 leading-6">
                                {data.additionalInfo}
                            </p>

                        </div>
                    )}

                    {/* LANGUAGES */}
                    {data.languages?.length > 0 && (

                        <div className="mt-12">

                            <SectionTitle title="Languages" />

                            <div className="flex flex-wrap gap-3 mt-4">

                                {data.languages.map((lang, i) => (

                                    <span
                                        key={i}
                                        className="text-[12px] bg-[#ffe2d1] px-4 py-2 rounded-full"
                                    >
                                        {lang}
                                    </span>

                                ))}

                            </div>

                        </div>

                    )}



                </div>
            </div>
        </div>
    );
}

/* SECTION TITLE */
function SectionTitle({ title }) {
    return (
        <div className="flex w-full">


            <h2 className="text-[15px] font-bold text-[#2b8ac6] border-b border-gray-300 pb-1">
                {title}
            </h2>


        </div>
    );
}