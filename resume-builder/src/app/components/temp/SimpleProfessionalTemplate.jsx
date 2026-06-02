"use client";

export default function SimpleProfessionalTemplate({ data }) {
    if (!data) return null;

    return (
        <div className="w-full flex justify-center ">

            {/* RESUME */}
            <div className="w-full bg-white shadow-sm border border-[#ececec] flex">

                {/* LEFT SECTION */}
                <div className="w-[65%] border-r border-[#ececec] flex flex-col">

                    {/* HEADER */}
                    <div className="px-[8%] pt-[10%] pb-[7%] border-b border-[#ececec] flex flex-col gap-2 h-45">

                        <h1 className="text-[34px] font-light uppercase tracking-[1px] leading-10 text-[#222]">
                            {data?.name?.split(" ")[0]}
                            <br />
                            {data?.name?.split(" ").slice(1).join(" ")}
                        </h1>

                        <p className="text-[12px] uppercase tracking-[2px] text-[#767676] font-medium">
                            {data.profession}
                        </p>

                    </div>

                    {/* PROFILE */}
                    {data.summary && (
                        <div className="px-[8%] py-[6%] flex flex-col gap-4">

                            <SectionTitle title="Profile" />

                            <p className="text-[11px] text-[#555] leading-5">
                                {data.summary}
                            </p>

                        </div>
                    )}

                    {/* EXPERIENCE */}
                    {data.experience?.length > 0 && (
                        <div className="px-[8%] py-[6%] border-t border-[#f1f1f1] flex flex-col gap-6">

                            <SectionTitle title="Work Experience" />

                            {data.experience.map((job, i) => (
                                <div
                                    key={i}
                                    className="flex gap-[5%]"
                                >

                                    {/* DATE */}
                                    <div className="w-[28%]">

                                        <p className="text-[10px] uppercase font-medium text-[#888] leading-4">
                                            {job.startMonth} {job.startYear}
                                            {" - "}
                                            {job.present
                                                ? "Present"
                                                : `${job.endMonth} ${job.endYear}`}
                                        </p>

                                    </div>

                                    {/* DETAILS */}
                                    <div className="w-[72%] flex flex-col gap-2">

                                        <div className="flex flex-col gap-0.5">

                                            <h3 className="text-[13px] font-semibold text-[#222]">
                                                {job.title}
                                            </h3>

                                            <p className="text-[10px] italic text-[#7a7a7a]">
                                                {job.company}
                                                {job.location &&
                                                    `, ${job.location}`}
                                            </p>

                                        </div>

                                        <div className="flex flex-col gap-0.5">

                                            {job.description
                                                ?.split("\n")
                                                .filter(line => line.trim() !== "")
                                                .map((line, index) => (
                                                    <p
                                                        key={index}
                                                        className="text-[10px] text-[#555] leading-4.25"
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

                </div>

                {/* RIGHT SECTION */}
                <div className="w-[35%] bg-[#fafafa] flex flex-col">

                    {/* CONTACT */}
                    <div className="px-[8%] pt-[14%] pb-[8%] border-b border-[#ececec] flex flex-col gap-3 h-45">

                        <SectionTitle title="Contact" />

                        {data.phone && (
                            <p className="text-[10px] text-[#666] break-all">
                                {data.phone}
                            </p>
                        )}

                        {data.email && (
                            <p className="text-[10px] text-[#666] break-all">
                                {data.email}
                            </p>
                        )}

                        {data.location && (
                            <p className="text-[10px] text-[#666]">
                                {data.location}
                            </p>
                        )}

                    </div>

                    {/* EDUCATION */}
                    {data.education?.length > 0 && (
                        <div className="px-[8%] py-[6%] border-b border-[#ececec] flex flex-col gap-4">

                            <SectionTitle title="Education" />

                            {data.education.map((edu, i) => (
                                <div
                                    key={i}
                                    className="flex flex-col gap-0.5"
                                >

                                    <p className="text-[10px] text-[#888] font-medium">
                                        {edu.graduationYear}
                                    </p>

                                    <h3 className="text-[11px] font-semibold text-[#222]">
                                        {edu.school}
                                    </h3>

                                    <p className="text-[10px] text-[#555]">
                                        {edu.degree}
                                    </p>

                                </div>
                            ))}

                        </div>
                    )}

                    {/* SKILLS */}
                    {data.skills?.length > 0 && (
                        <div className="px-[8%] py-[6%] border-b border-[#ececec] flex flex-col gap-3">

                            <SectionTitle title="Skills" />

                            <div className="flex flex-wrap gap-[2%]">

                                {data.skills.map((skill, i) => (
                                    <div
                                        key={i}
                                        className="w-[48%]"
                                    >
                                        <p className="text-[10px] text-[#555] leading-4">
                                            • {skill}
                                        </p>
                                    </div>
                                ))}

                            </div>

                        </div>
                    )}

                    {/* CERTIFICATIONS */}
                    {data.certifications?.length > 0 && (
                        <div className="px-[8%] py-[6%] border-b border-[#ececec] flex flex-col gap-3">

                            <SectionTitle title="Certifications" />

                            <div className="flex flex-col gap-1">

                                {data.certifications.map((cert, i) => (
                                    <p
                                        key={i}
                                        className="text-[10px] text-[#555]"
                                    >
                                        • {cert.title}
                                    </p>
                                ))}

                            </div>

                        </div>
                    )}

                    {/* LANGUAGES */}
                    {data.languages?.length > 0 && (
                        <div className="px-[8%] py-[6%] border-b border-[#ececec] flex flex-col gap-3">

                            <SectionTitle title="Languages" />

                            <div className="flex flex-wrap gap-[2%]">

                                {data.languages.map((lang, i) => (
                                    <div
                                        key={i}
                                        className="
                                        px-[4%]
                                        py-[2%]
                                        border
                                        border-[#dddddd]
                                        rounded-full
                                        "
                                    >
                                        <p className="text-[10px] text-[#555]">
                                            {lang}
                                        </p>
                                    </div>
                                ))}

                            </div>

                        </div>
                    )}

                    {/* PERSONAL DETAILS */}
                    {(data?.personalDetails?.nationality ||
                        data?.personalDetails?.maritalStatus ||
                        data?.personalDetails?.dob ||
                        data?.personalDetails?.gender) && (

                            <div className="px-[8%] py-[6%] border-b border-[#ececec] flex flex-col gap-3">

                                <SectionTitle title="Personal Details" />

                                <div className="flex flex-col gap-2">

                                    {data.personalDetails.nationality && (
                                        <p className="text-[10px] text-[#555]">
                                            <span className="font-medium text-[#222]">
                                                Nationality:
                                            </span>{" "}
                                            {data.personalDetails.nationality}
                                        </p>
                                    )}

                                    {data.personalDetails.maritalStatus && (
                                        <p className="text-[10px] text-[#555]">
                                            <span className="font-medium text-[#222]">
                                                Marital:
                                            </span>{" "}
                                            {data.personalDetails.maritalStatus}
                                        </p>
                                    )}

                                    {data.personalDetails.dob && (
                                        <p className="text-[10px] text-[#555]">
                                            <span className="font-medium text-[#222]">
                                                DOB:
                                            </span>{" "}
                                            {data.personalDetails.dob}
                                        </p>
                                    )}

                                    {data.personalDetails.gender && (
                                        <p className="text-[10px] text-[#555]">
                                            <span className="font-medium text-[#222]">
                                                Gender:
                                            </span>{" "}
                                            {data.personalDetails.gender}
                                        </p>
                                    )}

                                </div>

                            </div>
                        )}

                    {/* ADDITIONAL INFO */}
                    {data?.additionalInfo && (
                        <div className="px-[8%] py-[6%] border-b border-[#ececec] flex flex-col gap-3">

                            <SectionTitle title="Additional Info" />

                            <p className="text-[10px] text-[#555] leading-4.5">
                                {data.additionalInfo}
                            </p>

                        </div>
                    )}

                    {/* LINKS */}
                    {data?.links?.length > 0 && (
                        <div className="px-[8%] py-[6%] flex flex-col gap-3">

                            <SectionTitle title="Links" />

                            <div className="flex flex-col gap-1">

                                {data.links.map((link, i) => (
                                    link.url && (
                                        <p
                                            key={i}
                                            className="text-[10px] text-[#555] break-all"
                                        >
                                            • {link.url}
                                        </p>
                                    )
                                ))}

                            </div>

                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}

function SectionTitle({ title }) {
    return (
        <div className="flex flex-col gap-2">

            <h2 className="text-[12px] uppercase tracking-[2px] font-semibold text-[#222]">
                {title}
            </h2>

            <div className="w-full h-px bg-[#ececec]" />

        </div>
    );
}