"use client";

export default function CorporateTemplate({ data }) {
    if (!data) return null;

    return (
        <div className="w-full flex justify-center">

            {/* RESUME */}
            <div className="w-full flex flex-col font-sans ">

                {/* HEADER */}
                <div className="w-full bg-[#b67c00] flex items-center gap-[4%] px-[4%] py-[3%]">

                    {/* IMAGE */}
                    <div className="w-[12%] flex justify-center">
                        <img
                            src={data.image || "/profile.png"}
                            alt="profile"
                            className="w-full aspect-square rounded-full object-cover border border-white"
                        />
                    </div>

                    {/* NAME */}
                    <div className="w-[88%] flex flex-col gap-1">
                        <h1 className="text-[24px] font-bold text-white leading-6">
                            {data.name}
                        </h1>

                        <p className="text-[11px] text-white">
                            {data.profession}
                        </p>
                    </div>
                </div>

                {/* CONTACT BAR */}
                <div className="w-full bg-[#f5f5f5] flex justify-between gap-[2%] px-[4%] py-[2%] border-b">

                    <div className="w-[24%] flex flex-col gap-1">
                        <h3 className="text-[10px] font-bold text-[#b67c00]">
                            Contact
                        </h3>
                    </div>

                    <div className="w-[25%] flex flex-col gap-1">
                        <p className="text-[9px] font-semibold">
                            Address
                        </p>

                        <p className="text-[9px] text-gray-600">
                            {data.location}
                        </p>
                    </div>

                    <div className="w-[25%] flex flex-col gap-1">
                        <p className="text-[9px] font-semibold">
                            Phone
                        </p>

                        <p className="text-[9px] text-gray-600">
                            {data.phone}
                        </p>
                    </div>

                    <div className="w-[26%] flex flex-col gap-1">
                        <p className="text-[9px] font-semibold">
                            E-mail
                        </p>

                        <p className="text-[9px] text-gray-600 break-all">
                            {data.email}
                        </p>
                    </div>
                </div>

                {/* BODY */}
                <div className="w-full flex flex-col gap-5 px-[4%] py-[3%]">

                    {/* SUMMARY */}
                    {data.summary && (
                        <p className="text-[10px] text-gray-700 leading-4">
                            {data.summary}
                        </p>
                    )}

                    {/* WORK HISTORY */}
                    {data.experience?.length > 0 && (
                        <div className="flex flex-col gap-3">

                            <h2 className="text-[14px] font-bold text-[#b67c00] border-b pb-1">
                                Work History
                            </h2>

                            {data.experience.map((job, i) => (
                                <div
                                    key={i}
                                    className="flex gap-[4%]"
                                >
                                    {/* YEAR */}
                                    <div className="w-[18%]">
                                        <p className="text-[9px] font-bold text-gray-700">
                                            {job.startYear} -{" "}
                                            {job.present
                                                ? "Present"
                                                : job.endYear}
                                        </p>
                                    </div>

                                    {/* CONTENT */}
                                    <div className="w-[82%] flex flex-col gap-1">

                                        <h3 className="text-[11px] font-bold">
                                            {job.title}
                                        </h3>

                                        <p className="text-[9px] italic text-gray-500">
                                            {job.company}, {job.location}
                                        </p>

                                        <div className="flex flex-col gap-1">
                                            {job.description
                                                ?.split("\n")
                                                .filter(line => line.trim() !== "")
                                                .map((line, index) => (
                                                    <p
                                                        key={index}
                                                        className="text-[9px] text-gray-700"
                                                    >
                                                        • {line}
                                                    </p>
                                                ))}
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* SKILLS */}
                    {data.skills?.length > 0 && (
                        <div className="flex flex-col gap-3">

                            <h2 className="text-[14px] font-bold text-[#b67c00] border-b pb-1">
                                Skills
                            </h2>

                            <div className="flex flex-wrap gap-[3%]">

                                {data.skills.map((skill, i) => (
                                    <div
                                        key={i}
                                        className="w-[30%] flex flex-col gap-2"
                                    >
                                        <p className="text-[9px] mt-2 text-gray-700">
                                            {skill}
                                        </p>

                                        <div className="w-full h-1 bg-gray-200">
                                            <div className="w-[85%] h-full bg-[#b67c00]" />
                                        </div>
                                    </div>
                                ))}

                            </div>

                        </div>
                    )}
                    {/* EDUCATION */}
                    {data.education?.length > 0 && (
                        <div className="flex flex-col gap-3">

                            <h2 className="text-[14px] font-bold text-[#b67c00] border-b pb-1">
                                Education
                            </h2>

                            {data.education.map((edu, i) => (
                                <div
                                    key={i}
                                    className="flex gap-[4%]"
                                >
                                    {/* YEAR */}
                                    <div className="w-[18%]">
                                        <p className="text-[9px] font-bold text-gray-700">
                                            • {edu.graduationMonth} {edu.graduationYear}

                                            {
                                                new Date(
                                                    `${edu.graduationMonth} 1, ${edu.graduationYear}`
                                                ) > new Date()
                                                    ? " (Expected)"
                                                    : ""
                                            }
                                        </p>
                                    </div>

                                    {/* CONTENT */}
                                    <div className="w-[82%] flex flex-col gap-1">

                                        <h3 className="text-[11px] font-bold">
                                            {edu.degree}
                                        </h3>

                                        <p className="text-[9px] italic text-gray-500">
                                            {edu.school}
                                        </p>

                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* PERSONAL DETAILS */}
                    {(
                        data?.personalDetails?.nationality ||
                        data?.personalDetails?.maritalStatus ||
                        data?.personalDetails?.dob ||
                        data?.personalDetails?.gender
                    ) && (

                            <div className="flex flex-col gap-3">

                                <h2 className="text-[14px] font-bold text-[#b67c00] border-b pb-1">
                                    Personal Details
                                </h2>

                                <div className="flex flex-wrap gap-[4%]">

                                    {data?.personalDetails?.nationality && (
                                        <div className="w-[48%] flex gap-1">
                                            <span className="text-[9px] font-semibold">
                                                Nationality:
                                            </span>

                                            <span className="text-[9px] text-gray-700">
                                                {data.personalDetails.nationality}
                                            </span>
                                        </div>
                                    )}

                                    {data?.personalDetails?.maritalStatus && (
                                        <div className="w-[48%] flex gap-1">
                                            <span className="text-[9px] font-semibold">
                                                Marital:
                                            </span>

                                            <span className="text-[9px] text-gray-700">
                                                {data.personalDetails.maritalStatus}
                                            </span>
                                        </div>
                                    )}

                                    {data?.personalDetails?.dob && (
                                        <div className="w-[48%] flex gap-1">
                                            <span className="text-[9px] font-semibold">
                                                DOB:
                                            </span>

                                            <span className="text-[9px] text-gray-700">
                                                {data.personalDetails.dob}
                                            </span>
                                        </div>
                                    )}

                                    {data?.personalDetails?.gender && (
                                        <div className="w-[48%] flex gap-1">
                                            <span className="text-[9px] font-semibold">
                                                Gender:
                                            </span>

                                            <span className="text-[9px] text-gray-700">
                                                {data.personalDetails.gender}
                                            </span>
                                        </div>
                                    )}

                                </div>

                            </div>
                        )}

                    {/* LINKS */}
                    {data?.links?.length > 0 && (
                        <div className="flex flex-col gap-3">

                            <h2 className="text-[14px] font-bold text-[#b67c00] border-b pb-1">
                                Links
                            </h2>

                            <div className="flex flex-col gap-1">

                                {data.links.map((link, i) => (
                                    link.url && (
                                        <p
                                            key={i}
                                            className="
                            text-[9px]
                            text-blue-700
                            break-all
                        "
                                        >
                                            • {link.url}
                                        </p>
                                    )
                                ))}

                            </div>

                        </div>
                    )}

                    {/* LANGUAGES */}
                    {data?.languages?.length > 0 && (

                        <div className="flex flex-col gap-3">

                            <h2 className="text-[14px] font-bold text-[#b67c00] border-b pb-1">
                                Languages
                            </h2>

                            <div className="flex flex-wrap gap-[2%]">

                                {data.languages.map((lang, i) => (

                                    <div
                                        key={i}
                                        className="
                        w-[23%]
                        bg-[#f5f5f5]
                        border
                        border-[#b67c00]
                        flex
                        justify-center
                        items-center
                        py-[1%]
                    "
                                    >
                                        <span className="text-[9px] text-gray-700">
                                            {lang}
                                        </span>
                                    </div>

                                ))}

                            </div>

                        </div>

                    )}

                    {/* ADDITIONAL INFO */}
                    {data?.additionalInfo && (
                        <div className="flex flex-col gap-3">

                            <h2 className="text-[14px] font-bold text-[#b67c00] border-b pb-1">
                                Additional Information
                            </h2>

                            <p className="text-[9px] text-gray-700 leading-4">
                                {data.additionalInfo}
                            </p>

                        </div>
                    )}

                    {/* CERTIFICATIONS */}
                    {data.certifications?.length > 0 && (
                        <div className="flex flex-col gap-3">

                            <h2 className="text-[14px] font-bold text-[#b67c00] border-b pb-1">
                                Certifications
                            </h2>

                            <div className="flex flex-col gap-1">

                                {data.certifications.map((cert, i) => (
                                    <p
                                        key={i}
                                        className="text-[9px] text-gray-700"
                                    >
                                        • {cert.title}
                                    </p>
                                ))}

                            </div>

                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}