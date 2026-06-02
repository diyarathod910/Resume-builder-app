"use client";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";

export default function ProfessionalTemplate({ data }) {
    if (!data) return null;

    return (
        <div className="w-full flex justify-center">

            {/* RESUME */}
            <div className="w-full bg-white flex flex-col font-sans shadow-md">

                {/* HEADER */}
                <div className="w-full bg-[#d7bcc1] flex items-center gap-[4%] px-[4%] py-[4%]">

                    {/* IMAGE */}
                    <div className="w-[14%] flex justify-center">
                        <img
                            src={data.image || "/profile.png"}
                            alt="profile"
                            className="w-full aspect-square rounded-full object-cover border border-gray-400"
                        />
                    </div>

                    {/* NAME + CONTACT */}
                    <div className="w-[86%] flex flex-col gap-2">

                        <h1 className="text-[22px] tracking-[2px] font-bold text-[#1f1f1f] uppercase">
                            {data.name}
                        </h1>




                        <div className="flex gap-5">
                            <div className="flex items-center gap-1">
                                <div className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center text-[10px]">
                                    <MdEmail></MdEmail>
                                </div>
                                <p className="text-[10px]">{data.email}</p>
                            </div>

                            <div className="flex items-center gap-1">
                                <div className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center text-[10px]">
                                    <BsFillTelephoneFill></BsFillTelephoneFill>
                                </div>
                                <p className="text-[10px]">{data.phone}</p>
                            </div>

                            <div className="flex items-center gap-1">
                                <div className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center text-[10px]">
                                    <IoLocationSharp></IoLocationSharp>
                                </div>
                                <p className="text-[10px]">{data.location}</p>
                            </div>
                        </div>


                    </div>

                </div>

                {/* BODY */}
                <div className="w-full flex flex-col gap-4 px-[4%] py-[3%]">

                    {/* SUMMARY */}
                    {data.summary && (
                        <div className="flex flex-col gap-2">

                            <SectionTitle title="Professional Summary" />

                            <p className="text-[10px] leading-4 text-gray-700">
                                {data.summary}
                            </p>

                        </div>
                    )}

                    {/* WORK HISTORY */}
                    {data.experience?.length > 0 && (
                        <div className="flex flex-col gap-3">

                            <SectionTitle title="Work History" />

                            {data.experience.map((job, i) => (
                                <div
                                    key={i}
                                    className="flex gap-[4%]"
                                >
                                    {/* DATE */}
                                    <div className="w-[22%]">
                                        <p className="text-[10px] text-gray-700">
                                            {job.startMonth} {job.startYear}
                                            {" - "}
                                            {job.present
                                                ? "Present"
                                                : `${job.endMonth} ${job.endYear}`}
                                        </p>
                                    </div>

                                    {/* CONTENT */}
                                    <div className="w-[78%] flex flex-col gap-1">

                                        <h3 className="text-[12px] font-bold text-[#1f1f1f]">
                                            {job.title}
                                        </h3>

                                        <p className="text-[10px] italic text-gray-500">
                                            {job.company}, {job.location}
                                        </p>

                                        <div className="flex flex-col gap-0.5">

                                            {job.description
                                                ?.split("\n")
                                                .filter(line => line.trim() !== "")
                                                .map((line, index) => (
                                                    <p
                                                        key={index}
                                                        className="text-[10px] text-gray-700"
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

                    {/* EDUCATION */}
                    {data.education?.length > 0 && (
                        <div className="flex flex-col gap-3">

                            <SectionTitle title="Education" />

                            {data.education.map((edu, i) => (
                                <div
                                    key={i}
                                    className="flex gap-[4%]"
                                >
                                    <div className="w-[22%]">
                                        <p className="text-[10px] mt-1">
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

                                    <div className="w-[78%] flex flex-col gap-1">

                                        <h3 className="text-[12px] font-bold">
                                            {edu.degree}
                                        </h3>

                                        <p className="text-[10px] italic text-gray-500">
                                            {edu.school}
                                        </p>

                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* ACCOMPLISHMENTS / CERTIFICATIONS */}
                    {data.certifications?.length > 0 && (
                        <div className="flex flex-col gap-3">

                            <SectionTitle title="Certifications" />

                            <div className="flex flex-col gap-1">

                                {data.certifications.map((cert, i) => (
                                    <p
                                        key={i}
                                        className="text-[10px] text-gray-700"
                                    >
                                        • {cert.title} -{cert.year}
                                    </p>
                                ))}

                            </div>

                        </div>
                    )}

                    {/* SKILLS */}
                    {data.skills?.length > 0 && (
                        <div className="flex flex-col gap-3">

                            <SectionTitle title="Skills" />

                            <div className="flex flex-wrap  gap-[3%]">

                                {data.skills.map((skill, i) => (
                                    <div
                                        key={i}
                                        className="w-[25%]"
                                    >
                                        <p className="text-[10px] text-gray-700">
                                            • {skill}
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

                            <div className="flex flex-col gap-3">

                                <SectionTitle title="Personal Details" />

                                <div className="flex flex-wrap gap-[3%]">

                                    {data.personalDetails.nationality && (
                                        <p className="text-[10px] w-[48%]">
                                            <span className="font-semibold">
                                                Nationality:
                                            </span>{" "}
                                            {data.personalDetails.nationality}
                                        </p>
                                    )}

                                    {data.personalDetails.maritalStatus && (
                                        <p className="text-[10px] w-[48%]">
                                            <span className="font-semibold">
                                                Marital:
                                            </span>{" "}
                                            {data.personalDetails.maritalStatus}
                                        </p>
                                    )}

                                    {data.personalDetails.dob && (
                                        <p className="text-[10px] w-[48%]">
                                            <span className="font-semibold">
                                                DOB:
                                            </span>{" "}
                                            {data.personalDetails.dob}
                                        </p>
                                    )}

                                    {data.personalDetails.gender && (
                                        <p className="text-[10px] w-[48%]">
                                            <span className="font-semibold">
                                                Gender:
                                            </span>{" "}
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

                    {/* LINKS */}
                    {data?.links?.length > 0 && (
                        <div className="flex flex-col gap-3">

                            <SectionTitle title="Links" />

                            <div className="flex flex-col gap-1">

                                {data.links.map((link, i) => (
                                    link.url && (
                                        <p
                                            key={i}
                                            className="text-[10px] text-blue-700 break-all"
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

                            <SectionTitle title="Languages" />

                            <div className="flex flex-wrap gap-[2%]">

                                {data.languages.map((lang, i) => (
                                    <div
                                        key={i}
                                        className="
                                            border
                                            border-gray-400
                                            px-[3%]
                                            py-[1%]
                                            rounded-full
                                        "
                                    >
                                        <p className="text-[10px]">
                                            {lang}
                                        </p>
                                    </div>
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
        <div className="flex flex-col gap-1">

            <h2 className="text-[15px] font-bold uppercase tracking-[1px] text-[#1f1f1f]">
                {title}
            </h2>

            <div className="w-full border-b border-gray-500"></div>

        </div>
    );
}