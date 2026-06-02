"use client";

export default function ClassicResumeTemplate({ data }) {
    if (!data) return null;
    return (
        <div className="flex justify-center bg-white">

            {/* RESUME */}
            <div className="  w-199 min-h-280 bg-white px-11.25 py-8.75 text-[#333]">

                {/* TOP LINE */}
                <div className="border-t border-gray-400 mb-6"></div>

                {/* HEADER */}
                <div className="flex items-center gap-6">

                    {/* PROFILE IMAGE */}
                    <img
                        src={data.image || "/profile.jpg"}
                        alt="profile"
                        className="w-16 h-16 rounded-full object-cover"
                    />

                    {/* NAME */}
                    <div className="flex-1 text-center">
                        <h1 className="text-[28px] tracking-wide font-semibold uppercase text-gray-700">
                            {data.name}
                        </h1>
                        <p className="text-[15px] text-gray-500 ">{data.profession}</p>
                        <p className="text-[11px] text-gray-500 mt-2">
                            {data.location} • {data.phone} • {data.email}
                        </p>
                    </div>
                </div>

                {/* THICK LINE */}
                <div className="h-1 bg-gray-500 mt-4 mb-5"></div>

                {/* SUMMARY */}
                <SectionTitle title="Professional Summary" />

                <p className="text-[12px] leading-5 mt-3 text-gray-700">
                    {data.summary}
                </p>

                {/* WORK HISTORY */}
                <div className="mt-6">
                    <SectionTitle title="Work History" />

                    <div className="space-y-5 mt-4">

                        {data.experience.map((job, i) => (
                            <JobItem
                                key={i}
                                title={job.title}
                                location={job.location}
                                date={job.date}
                                company={job.company}
                                // points={job.points}
                                description={job.description}
                            />
                        ))}

                    </div>
                </div>

                {/* SKILLS */}
                <div className="mt-7">
                    <SectionTitle title="Skills" />

                    <div className="grid grid-cols-3 gap-6 mt-4">

                        {(data?.skills || []).map((skill, i) => (

                            <SkillBar
                                key={i}
                                title={skill}
                            />

                        ))}

                    </div>
                </div>



                {/* EDUCATION */}
                <div className="mt-7">
                    <SectionTitle title="Education" />

                    <div className="mt-4 text-[12px] text-gray-700 space-y-4">

                        {(data?.education || []).map((edu, i) => (
                            <div key={i}>
                                <p className="font-semibold">
                                    {edu.degree} •.{edu.year}
                                </p>

                                <p>
                                    {edu.school}
                                </p>
                            </div>
                        ))}

                    </div>
                </div>
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
                {/* certification */}
                {data?.certifications?.length > 0 && (
                    <div className="mt-7">

                        <SectionTitle title="Certifications" />

                        <div className="mt-3 space-y-2">

                            {data.certifications.map((cert, i) => (

                                cert.title && (
                                    <div key={i}>

                                        <p className="font-semibold text-[13px]">
                                            {cert.title}
                                        </p>

                                        <p className="text-[12px] text-gray-600">
                                            {cert.year}
                                        </p>

                                    </div>
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

                            <div className="mt-3 space-y-1 text-[12px]">

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

                {data.languages?.length > 0 && (
                    <div className="mt-6">

                        <SectionTitle title="Languages" />

                        <div className="flex flex-wrap gap-2 mt-3">

                            {data.languages.map((lang, i) => (
                                <span
                                    key={i}
                                    className="text-[12px]"
                                >
                                    • {lang}
                                </span>
                            ))}

                        </div>

                    </div>
                )}


            </div>
        </div>
    );
}

/* SECTION TITLE */
function SectionTitle({ title }) {
    return (
        <div className="flex items-center gap-3">
            <div className="flex-1 border-t border-gray-400"></div>

            <h2 className="uppercase tracking-[3px] text-[12px] text-gray-500">
                {title}
            </h2>

            <div className="flex-1 border-t border-gray-400"></div>
        </div>
    );
}

/* JOB ITEM */
function JobItem({
    title,
    date,
    location,
    company,
    description,
}) {
    return (
        <div>
            <div className="flex justify-between text-[12px]">
                <h3 className="font-bold">
                    {title}
                </h3>

                <p className="text-gray-500">
                    {date}
                </p>
            </div>

            <p className="italic text-[12px] text-gray-600 mt-1">
                {company} • {location}
            </p>

            {/* <ul className="list-disc ml-5 mt-2 text-[12px] space-y-1">
                {points &&
                    points.map((point, i) => (
                        <li key={i} className="leading-5">
                            {point}
                        </li>
                    ))
                }
            </ul> */}
            <p className="text-[12px] leading-5 mt-2 whitespace-pre-line">
                {description}
            </p>
        </div>
    );
}

/* SKILL BAR */
function SkillBar({ title }) {
    return (
        <div>
            <p className="text-[11px] mb-2 text-gray-700">
                {title}
            </p>

            <div className="flex gap-1">
                <div className="w-8 h-1.5 bg-gray-500"></div>
                <div className="w-8 h-1.5 bg-gray-500"></div>
                <div className="w-8 h-1.5 bg-gray-500"></div>
                <div className="w-8 h-1.5 bg-gray-300"></div>
            </div>
        </div>
    );
}

/* LANGUAGE ITEM */
function LanguageItem({
    language,
    level,
}) {
    return (
        <div>
            <p className="text-[11px] text-gray-700">
                {language}
            </p>

            <div className="flex gap-1 mt-2">
                <div className="w-8 h-1.5 bg-gray-500"></div>
                <div className="w-8 h-1.5 bg-gray-500"></div>
                <div className="w-8 h-1.5 bg-gray-400"></div>
                <div className="w-8 h-1.5 bg-gray-200"></div>
            </div>

            <p className="text-[10px] text-gray-500 mt-1">
                {level}
            </p>
        </div>
    );
}