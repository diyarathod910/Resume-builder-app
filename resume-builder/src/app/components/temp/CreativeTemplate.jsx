"use client";

import { Mail, Phone, MapPin, Calendar, GraduationCap, Briefcase, Globe, User } from "lucide-react";

export default function CreativeTemplate({ data }) {
    if (!data) return null;

    return (
        <div className="w-full flex justify-center ">

            <div className="w-full bg-white  overflow-hidden " style={{ fontFamily: "Montserrat, sans-serif"}}>

                {/* HEADER */}
                <div className="w-full bg-[#0d3558] flex flex-col items-center justify-center px-[6%] py-[4%] gap-2">

                    <h1 className="text-[28px] font-bold text-white text-center leading-none">
                        {data?.name}
                    </h1>

                    {data?.profession && (
                        <p className="text-[12px] text-[#dbe7f1] text-center">
                            {data.profession}
                        </p>
                    )}

                    <div className="flex flex-wrap justify-center gap-4.5">

                        {data?.email && (
                            <div className="flex items-center gap-1.25">
                                <Mail size={11} className="text-white" />
                                <p className="text-[10px] text-white">{data.email}</p>
                            </div>
                        )}

                        {data?.phone && (
                            <div className="flex items-center gap-1.25">
                                <Phone size={11} className="text-white" />
                                <p className="text-[10px] text-white">{data.phone}</p>
                            </div>
                        )}

                        {data?.location && (
                            <div className="flex items-center gap-1.25">
                                <MapPin size={11} className="text-white" />
                                <p className="text-[10px] text-white">{data.location}</p>
                            </div>
                        )}

                    </div>
                </div>

                {/* BODY */}
                <div className="w-full flex flex-col px-[5%] py-[4%] gap-4.5">

                    {/* SUMMARY */}
                    {data?.summary && (
                        <Section title="SUMMARY">
                            <p className="text-[11px] text-[#444] leading-4">
                                {data.summary}
                            </p>
                        </Section>
                    )}

                    {/* SKILLS */}
                    {data?.skills?.length > 0 && (
                        <Section title="SKILLS">

                            <div className="flex flex-wrap gap-2">

                                {data.skills.map((skill, i) => (
                                    <div key={i} className="border border-[#8ca1b3] rounded-[5px] px-2.5 py-1.25 text-[10px] text-[#2b2b2b]">
                                        {skill}
                                    </div>
                                ))}

                            </div>

                        </Section>
                    )}

                    {/* EXPERIENCE */}
                    {data?.experience?.length > 0 && (
                        <Section title="WORK EXPERIENCE">

                            <div className="flex flex-col gap-4.5">

                                {data.experience.map((job, i) => (

                                    <div key={i} className="flex gap-[4%] border-b border-[#e5e5e5] pb-3.5">

                                        {/* LEFT */}
                                        <div className="w-[23%] flex flex-col gap-1.5">

                                            <div className="flex items-center gap-1">
                                                <Calendar size={10} />
                                                <p className="text-[10px] text-[#555]">
                                                    {job.startMonth} {job.startYear} - {job.present ? "Present" : `${job.endMonth || ""} ${job.endYear || ""}`}
                                                </p>
                                            </div>

                                            <div className="flex items-center gap-1">
                                                <MapPin size={10} />
                                                <p className="text-[10px] text-[#555]">
                                                    {job.location}
                                                </p>
                                            </div>

                                        </div>

                                        {/* RIGHT */}
                                        <div className="w-[77%] flex flex-col gap-1">

                                            <h3 className="text-[12px] font-bold text-[#222]">
                                                {job.title}
                                            </h3>

                                            <p className="text-[10px] font-medium text-[#555]">
                                                {job.company}
                                            </p>

                                            <div className="flex flex-col gap-1 text-[10px] text-[#444] leading-3.75">
                                                {job.description?.split("\n").filter(Boolean).map((line, idx) => (
                                                    <p key={idx}>• {line}</p>
                                                ))}
                                            </div>

                                        </div>

                                    </div>

                                ))}

                            </div>

                        </Section>
                    )}

                    {/* EDUCATION */}
                    {data?.education?.length > 0 && (
                        <Section title="EDUCATION">

                            <div className="flex flex-col gap-3.5">

                                {data.education.map((edu, i) => (

                                    <div key={i} className="flex justify-between gap-[5%]">

                                        <div className="w-[80%] flex flex-col gap-0.5">

                                            <h3 className="text-[12px] font-bold text-[#222]">
                                                {edu.degree}
                                            </h3>

                                            <p className="text-[10px] text-[#555]">
                                                {edu.school}
                                            </p>



                                        </div>

                                        <div className="w-[20%] flex justify-end">
                                            <p className="text-[10px] text-[#555] flex items-center gap-1">
                                                <GraduationCap size={12} />
                                                {edu.graduationYear}
                                            </p>
                                        </div>

                                    </div>

                                ))}

                            </div>

                        </Section>
                    )}

                    {/* CERTIFICATIONS */}
                    {data?.certifications?.length > 0 && (
                        <Section title="CERTIFICATIONS ">

                            <div className="flex flex-col gap-1.25">

                                {data.certifications.map((cert, i) => (
                                    <p key={i} className="text-[12px] text-[#444]">
                                        • {cert.title} {cert.year ? `(${cert.year})` : ""}
                                    </p>
                                ))}

                            </div>

                        </Section>
                    )}
                   

                    {/* LANGUAGES */}
                    {data?.languages?.length > 0 && (
                        <Section title="LANGUAGES">

                            <div className="flex flex-wrap gap-2">

                                {data.languages.map((lang, i) => (
                                    <div key={i} className="border border-[#8ca1b3] rounded-[5px] px-2.5 py-1.25 text-[10px] text-[#2b2b2b]">
                                        {lang}
                                    </div>
                                ))}

                            </div>

                        </Section>
                    )}

                    {/* PERSONAL DETAILS */}
                    {(data?.personalDetails?.nationality || data?.personalDetails?.maritalStatus || data?.personalDetails?.dob || data?.personalDetails?.gender) && (
                        <Section title="PERSONAL DETAILS">

                            <div className="flex flex-col gap-1.25 text-[10px] text-[#444]">

                                {data?.personalDetails?.nationality && <p><span className="font-semibold">Nationality:</span> {data.personalDetails.nationality}</p>}
                                {data?.personalDetails?.maritalStatus && <p><span className="font-semibold">Marital Status:</span> {data.personalDetails.maritalStatus}</p>}
                                {data?.personalDetails?.dob && <p><span className="font-semibold">DOB:</span> {data.personalDetails.dob}</p>}
                                {data?.personalDetails?.gender && <p><span className="font-semibold">Gender:</span> {data.personalDetails.gender}</p>}

                            </div>

                        </Section>
                    )}

                    {/* LINKS */}
                    {data?.links?.length > 0 && (
                        <Section title="LINKS">

                            <div className="flex flex-col gap-1">

                                {data.links.map((link, i) => (
                                    link.url && (
                                        <p key={i} className="text-[10px] text-[#1b4d7d] break-all flex items-center gap-1">
                                            <Globe size={10} />
                                            {link.url}
                                        </p>
                                    )
                                ))}

                            </div>

                        </Section>
                    )}

                    {/* ADDITIONAL INFO */}
                    {data?.additionalInfo && (
                        <Section title="ADDITIONAL INFORMATION">
                            <p className="text-[10px] text-[#444] leading-3.75">
                                {data.additionalInfo}
                            </p>
                        </Section>
                    )}

                </div>
            </div>
        </div>
    );
}

function Section({ title, children }) {
    return (
        <div className="flex flex-col gap-2.5">
            <div className="border-b border-[#9fb0be] pb-1.5">
                <h2 className="text-[15px] font-extrabold uppercase text-[#153a5c]">
                    {title}
                </h2>
            </div>
            {children}
        </div>
    );
}