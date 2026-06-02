"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function ModernFancyTemplate({ data }) {

    if (!data) return null;

    return (

        <div className="w-full flex justify-center bg-[#f3f3f3] ">

            {/* MAIN RESUME */}
            <div className="w-198.5 h-280 bg-white flex font-sans overflow-hidden">

                {/* LEFT SIDEBAR */}
                <div className="w-[30%] bg-[#4a4a4a] text-white flex flex-col gap-5 p-[3%]">

                    {/* IMAGE */}
                    <div className="w-full flex justify-center">

                        <img
                            src={data.image || "/profile.jpg"}
                            alt="profile"
                            className="w-[70%] aspect-square rounded-full object-cover border-4 border-white"
                        />

                    </div>

                    {/* CONTACT */}
                    <div className="flex flex-col gap-3">

                        {data.email && (
                            <div className="flex items-center gap-[4%]">

                                <Mail className="w-3.5 h-3.5 break-after-auto" />

                                <p className="text-[11px] ">
                                    {data.email}
                                </p>

                            </div>
                        )}

                        {data.phone && (
                            <div className="flex items-center gap-[4%]">

                                <Phone className="w-3.5 h-3.5" />

                                <p className="text-[11px]">
                                    {data.phone}
                                </p>

                            </div>
                        )}

                        {data.location && (
                            <div className="flex items-center gap-[4%]">

                                <MapPin className="w-3.5 h-3.5" />

                                <p className="text-[11px]">
                                    {data.location}
                                </p>

                            </div>
                        )}

                    </div>

                    {/* EDUCATION */}
                    {data.education?.length > 0 && (

                        <div className="flex flex-col gap-3">

                            <h2 className="text-[14px] font-bold border-b border-gray-400 pb-1.5 tracking-[1px]">
                                EDUCATION
                            </h2>

                            <div className="flex flex-col gap-4.5">

                                {data.education.map((edu, i) => (

                                    <div key={i} className="flex flex-col gap-1">

                                        <h3 className="text-[12px] font-semibold leading-4.5">
                                            {edu.degree}
                                        </h3>

                                        <p className="text-[11px] text-gray-200 leading-4.5">
                                            {edu.school}
                                        </p>

                                        <p className="text-[10px] text-gray-300">
                                            {edu.graduationMonth} {edu.graduationYear}
                                        </p>

                                    </div>

                                ))}

                            </div>

                        </div>

                    )}

                    {/* PERSONAL DETAILS */}
                    {(
                        data?.personalDetails?.nationality ||
                        data?.personalDetails?.gender ||
                        data?.personalDetails?.dob ||
                        data?.personalDetails?.maritalStatus
                    ) && (

                            <div className="flex flex-col gap-3">

                                <h2 className="text-[14px] font-bold border-b border-gray-400 pb-1.5 tracking-[1px]">
                                    PERSONAL DETAILS
                                </h2>

                                <div className="flex flex-col gap-2">

                                    {data?.personalDetails?.nationality && (
                                        <p className="text-[11px]">
                                            Nationality: {data.personalDetails.nationality}
                                        </p>
                                    )}

                                    {data?.personalDetails?.gender && (
                                        <p className="text-[11px]">
                                            Gender: {data.personalDetails.gender}
                                        </p>
                                    )}

                                    {data?.personalDetails?.dob && (
                                        <p className="text-[11px]">
                                            DOB: {data.personalDetails.dob}
                                        </p>
                                    )}

                                    {data?.personalDetails?.maritalStatus && (
                                        <p className="text-[11px]">
                                            Marital Status: {data.personalDetails.maritalStatus}
                                        </p>
                                    )}

                                </div>

                            </div>

                        )}

                </div>

                {/* RIGHT SIDE */}
                <div className="w-[70%] bg-[#efefef] flex flex-col">

                    {/* HEADER */}
                    <div className="w-full bg-[#d9e6e6] px-[5%] py-[4%]">

                        <h1 className="text-[30px] font-semibold tracking-[1px] text-[#333] uppercase">
                            {data.name}
                        </h1>

                        <p className="text-[14px] text-gray-700 mt-1.5">
                            {data.profession}
                        </p>

                    </div>

                    {/* CONTENT */}
                    <div className="flex flex-col gap-6 p-[5%]">

                        {/* SUMMARY */}
                        {data.summary && (

                            <Section title="PROFESSIONAL SUMMARY">

                                <p className="text-[12px] text-gray-700 leading-5.5">
                                    {data.summary}
                                </p>

                            </Section>

                        )}

                        {/* EXPERIENCE */}
                        {data.experience?.length > 0 && (

                            <Section title="WORK HISTORY">

                                <div className="flex flex-col gap-5.5">

                                    {data.experience.map((job, i) => (

                                        <div key={i} className="flex flex-col gap-2">

                                            <p className="text-[11px] text-gray-500">

                                                {job.startMonth} {job.startYear} -{" "}

                                                {job.present
                                                    ? "Present"
                                                    : `${job.endMonth} ${job.endYear}`}

                                            </p>

                                            <h3 className="text-[14px] font-semibold text-[#222]">
                                                {job.title}
                                            </h3>

                                            <p className="text-[12px] italic text-gray-600">
                                                {job.company}
                                                {job.location && `, ${job.location}`}
                                            </p>

                                            <div className="flex flex-col gap-1.25 text-[12px] text-gray-700 leading-5">

                                                {job.description
                                                    ?.split("\n")
                                                    .filter((line) => line.trim() !== "")
                                                    .map((line, index) => (

                                                        <p key={index}>
                                                            • {line}
                                                        </p>

                                                    ))}

                                            </div>

                                        </div>

                                    ))}

                                </div>

                            </Section>

                        )}

                        {/* SKILLS */}
                        {data.skills?.length > 0 && (

                            <Section title="SKILLS">

                                <div className="flex flex-wrap gap-2.5">

                                    {data.skills.map((skill, i) => (

                                        <div
                                            key={i}
                                            className="border border-gray-400 px-3.5 py-1.5 text-[11px] bg-white"
                                        >
                                            {skill}
                                        </div>

                                    ))}

                                </div>

                            </Section>

                        )}

                        {/* CERTIFICATIONS */}
                        {data.certifications?.length > 0 && (

                            <Section title="CERTIFICATIONS">

                                <div className="flex flex-col gap-2">

                                    {data.certifications.map((cert, i) => (

                                        <p key={i} className="text-[12px] text-gray-700">

                                            • {cert.title}
                                            {cert.year && ` - ${cert.year}`}

                                        </p>

                                    ))}

                                </div>

                            </Section>

                        )}
                        {/* LINKS */}
                        {data?.links?.length > 0 && (

                            <Section title="LINKS">

                                <div className="flex flex-col gap-2">

                                    {data.links.map((link, i) => (
                                        link.url && (
                                            <p key={i} className="text-[10px] text-[#1b4d7d] break-all flex items-center gap-1">

                                                {link.url}
                                            </p>
                                        )
                                    ))}

                                </div>

                            </Section>

                        )}

                        {/* LANGUAGES */}
                        {data.languages?.length > 0 && (

                            <Section title="LANGUAGES">

                                <div className="flex flex-wrap gap-2.5">

                                    {data.languages.map((lang, i) => (

                                        <div
                                            key={i}
                                            className="border border-gray-400 px-3.5 py-1.5 text-[11px] bg-white"
                                        >
                                            {lang}
                                        </div>

                                    ))}

                                </div>

                            </Section>

                        )}

                    </div>

                </div>

            </div>

        </div>

    );
}


/* SECTION */
function Section({ title, children }) {

    return (

        <div className="flex flex-col gap-3">

            <div className="w-full border-b border-gray-500 pb-1.5">

                <h2 className="text-[14px] font-bold tracking-[1px] text-[#222]">
                    {title}
                </h2>

            </div>

            {children}

        </div>

    );
}