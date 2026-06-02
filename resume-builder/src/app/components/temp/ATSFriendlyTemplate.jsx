"use client";

export default function ATSFriendlyTemplate({ data }) {
    if (!data) return null;

    return (
        <div className="w-full flex justify-center min-h-screen ">

            {/* RESUME */}
            <div className="w-full bg-white px-[6%] py-[5%] flex flex-col gap-6 shadow-sm">

                {/* HEADER */}
                <div className="w-full flex justify-between items-start gap-[4%]">

                    {/* LEFT */}
                    <div className="w-[78%] flex flex-col gap-2">

                        <h1 className="text-[34px] font-bold uppercase text-[#2b67c9] leading-9.5">
                            {data.name}
                        </h1>

                        <h2 className="text-[20px] font-semibold uppercase text-[#333]">
                            {data.profession}
                        </h2>

                        <div className="flex flex-wrap gap-[3%]">

                            {data.location && (
                                <p className="text-[11px] text-[#555]">
                                    {data.location}
                                </p>
                            )}

                            {data.phone && (
                                <p className="text-[11px] text-[#555]">
                                    | {data.phone}
                                </p>
                            )}

                            {data.email && (
                                <p className="text-[11px] text-[#555] wrap-break-word">
                                    | {data.email}
                                </p>
                            )}

                        </div>

                    </div>

                    {/* IMAGE */}
                    {data.image && (
                        <div className="w-[18%] flex justify-end">

                            <img
                                src={data.image}
                                alt="profile"
                                className="w-full object-cover"
                            />

                        </div>
                    )}

                </div>

                {/* SUMMARY */}
                {data.summary && (
                    <Section title="Summary">

                        <p className="text-[11px] text-[#444] leading-4.5">
                            {data.summary}
                        </p>

                    </Section>
                )}

                {/* EXPERIENCE */}
                {data.experience?.length > 0 && (
                    <Section title="Professional Experience">

                        <div className="flex flex-col gap-5">

                            {data.experience.map((job, i) => (
                                <div
                                    key={i}
                                    className="flex flex-col gap-2"
                                >

                                    {/* TOP */}
                                    <div className="flex justify-between gap-[4%]">

                                        <div className="w-[70%] flex flex-col gap-1">

                                            <h3 className="text-[13px] font-bold text-[#222]">
                                                {job.title}
                                                {job.company &&
                                                    `, ${job.company}`}
                                            </h3>

                                            {job.location && (
                                                <p className="text-[10px] text-[#666]">
                                                    {job.location}
                                                </p>
                                            )}

                                        </div>

                                        <div className="w-[30%] flex justify-end">

                                            <p className="text-[11px] font-semibold text-[#444] text-right">
                                                {job.startMonth}{" "}
                                                {job.startYear}
                                                {" — "}
                                                {job.present
                                                    ? "Present"
                                                    : `${job.endMonth} ${job.endYear}`}
                                            </p>

                                        </div>

                                    </div>

                                    {/* DESCRIPTION */}
                                    <div className="flex flex-col gap-1">

                                        {job.description
                                            ?.split("\n")
                                            .filter(
                                                line =>
                                                    line.trim() !== ""
                                            )
                                            .map((line, index) => (
                                                <p
                                                    key={index}
                                                    className="text-[11px] text-[#444] leading-4.5"
                                                >
                                                    • {line}
                                                </p>
                                            ))}

                                    </div>

                                </div>
                            ))}

                        </div>

                    </Section>
                )}

                {/* EDUCATION */}
                {data.education?.length > 0 && (
                    <Section title="Education">

                        <div className="flex flex-col gap-4">

                            {data.education.map((edu, i) => (
                                <div
                                    key={i}
                                    className="flex justify-between gap-[4%]"
                                >

                                    <div className="w-[70%] flex flex-col gap-1">

                                        <h3 className="text-[13px] font-bold text-[#222]">
                                            {edu.degree}
                                        </h3>

                                        <p className="text-[11px] text-[#666]">
                                            {edu.school}
                                        </p>

                                    </div>

                                    <div className="w-[30%] flex justify-end">

                                        <p className="text-[11px] font-semibold text-[#444] text-right">
                                            
                                            {edu.endYear ||
                                                edu.graduationYear}
                                        </p>

                                    </div>

                                </div>
                            ))}

                        </div>

                    </Section>
                )}

                {/* TECHNICAL SKILLS */}
                {data.skills?.length > 0 && (
                    <Section title="Technical Skills">

                        <div className="flex flex-wrap gap-y-2">

                            {data.skills.map((skill, i) => (
                                <div
                                    key={i}
                                    className="w-[25%]"
                                >
                                    <p className="text-[11px] text-[#444]">
                                        {skill}
                                    </p>
                                </div>
                            ))}

                        </div>

                    </Section>
                )}

                {/* ADDITIONAL INFORMATION */}
                <Section title="Additional Information">

                    <div className="flex flex-col gap-2">

                        {/* LANGUAGES */}
                        {data.languages?.length > 0 && (
                            <p className="text-[11px] text-[#444] leading-4.5">
                                <span className="font-bold">
                                    • Languages:
                                </span>{" "}
                                {data.languages.join(", ")}
                            </p>
                        )}

                        {/* CERTIFICATIONS */}
                        {data.certifications?.length > 0 && (
                            <p className="text-[11px] text-[#444] leading-4.5">
                                <span className="font-bold">
                                    • Certificates:
                                </span>{" "}
                                {data.certifications
                                    .map(c => c.title)
                                    .join(", ")}
                            </p>
                        )}

                        {/* PERSONAL DETAILS */}
                        {(data?.personalDetails?.nationality ||
                            data?.personalDetails?.maritalStatus ||
                            data?.personalDetails?.dob ||
                            data?.personalDetails?.gender) && (
                                <p className="text-[11px] text-[#444] leading-4.5">
                                    <span className="font-bold">
                                        • Personal Details:
                                    </span>{" "}

                                    {[
                                        data.personalDetails.gender,
                                        data.personalDetails.dob,
                                        data.personalDetails.maritalStatus,
                                        data.personalDetails.nationality,
                                    ]
                                        .filter(Boolean)
                                        .join(", ")}
                                </p>
                            )}

                        {/* LINKS */}
                        {data?.links?.length > 0 && (
                            <p className="text-[11px] text-[#444] wrap-break-word leading-4.5">
                                <span className="font-bold">
                                    • Links:
                                </span>{" "}
                                {data.links
                                    .map(link => link.url)
                                    .filter(Boolean)
                                    .join(", ")}
                            </p>
                        )}

                        {/* EXTRA INFO */}
                        {data.additionalInfo && (
                            <p className="text-[11px] text-[#444] leading-4.5">
                                <span className="font-bold">
                                    • Additional:
                                </span>{" "}
                                {data.additionalInfo}
                            </p>
                        )}

                    </div>

                </Section>

            </div>
        </div>
    );
}

function Section({ title, children }) {
    return (
        <div className="flex flex-col gap-3">

            {/* TITLE */}
            <div className="flex flex-col gap-1">

                <h2 className="text-[18px] font-bold uppercase text-[#2b67c9]">
                    {title}
                </h2>

                <div className="w-full h-0.5 bg-[#8db2ea]" />

            </div>

            {children}

        </div>
    );
}