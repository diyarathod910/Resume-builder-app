"use client";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";

export default function ModernTemplate({ data }) {

    if (!data) return null;

    return (

        <div className="flex justify-center ">

            {/* A4 PAGE */}
            <div className="w-full bg-white flex  font-sans text-[#333]">

                {/* LEFT SIDEBAR */}
                <div className="w-[40%] bg-[#f4b183] px-5 py-10 flex flex-col">

                    {/* LOGO BOX */}
                    <div className="w-16 h-16 bg-[#ff6b00] flex items-center justify-center text-white font-bold text-xl mx-auto">
                        {data?.name?.slice(0, 1)}
                        {data?.name?.split(" ")[1]?.slice(0, 1)}
                    </div>

                    {/* NAME */}
                    <div className="mt-8">
                        <h1 className="text-[28px] font-extrabold uppercase leading-11 tracking-tight">
                            {data.name?.split(" ")[0]}
                            <br />
                            {data.name?.split(" ")[1]}
                        </h1>
                    </div>
                    <p className="text-[15px] black ">{data.profession}</p>

                    {/* CONTACT */}
                    <div className="mt-5 space-y-4 text-[13px]">

                        <div className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center text-[10px]">
                                <MdEmail></MdEmail>
                            </div>
                            <p>{data.email}</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center text-[10px]">
                                <BsFillTelephoneFill></BsFillTelephoneFill>
                            </div>
                            <p>{data.phone}</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center text-[10px]">
                                <IoLocationSharp></IoLocationSharp>
                            </div>
                            <p>{data.location}</p>
                        </div>

                    </div>

                    {/* EDUCATION */}
                    <div className="mt-5">

                        <h2 className="text-[15px] font-bold uppercase tracking-wide">
                            Education
                        </h2>

                        <div className="mt-5 space-y-5">

                            {data.education?.map((edu, i) => (

                                <div key={i}>

                                    <p className="font-bold text-[13px]">
                                        {edu.school}
                                    </p>

                                    <p className="italic text-[12px] mt-1">
                                        {edu.degree}
                                    </p>

                                    <p className="text-[11px] mt-1">
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

                            ))}

                        </div>

                    </div>

                    {/* SKILLS */}
                    <div className="mt-5">

                        <h2 className="text-[15px] font-bold uppercase tracking-wide">
                            Skills
                        </h2>

                        <div className="mt-2 space-y-4">

                            {data.skills?.map((skill, i) => (

                                <div key={i}>

                                    <p className="text-[12px] mb-1">
                                        • {skill}
                                    </p>


                                </div>

                            ))}

                        </div>

                    </div>

                </div>

                {/* RIGHT SIDE */}
                <div className="w-[60%] flex flex-col">

                    {/* TOP SUMMARY */}
                    <div className="bg-[#f5e8df] px-5 py-14">

                        <h2 className="text-[12px] font-bold tracking-[3px] uppercase text-gray-700">
                            Resume Objective
                        </h2>

                        <p className="mt-5 text-[13px] leading-6 text-gray-700">
                            {data.summary}
                        </p>

                    </div>

                    {/* CONTENT */}
                    <div className="px-5 py-5 flex-1">

                        {/* WORK HISTORY */}
                        <div>

                            <h2 className="text-[15px] font-bold uppercase tracking-wide">
                                Work History
                            </h2>

                            <div className="mt-3 space-y-3">

                                {data.experience?.map((job, i) => (

                                    <div key={i}>

                                        <div className="flex justify-between items-start">

                                            <div>

                                                {/* FIRST LINE */}
                                                <h3 className="font-bold text-[14px]">
                                                    {job.company} - {job.title}
                                                </h3>

                                                {/* SECOND LINE */}
                                                <p className="italic text-[12px] text-gray-600 mt-1">

                                                    {job.location}

                                                    {" • "}

                                                    {job.startMonth} {job.startYear}

                                                    {" - "}

                                                    {job.present
                                                        ? "Present"
                                                        : `${job.endMonth} ${job.endYear}`
                                                    }

                                                </p>

                                            </div>

                                        </div>

                                        <p className="text-[12px] leading-6 mt-3 whitespace-pre-line">
                                            {job.description}
                                        </p>

                                    </div>

                                ))}

                            </div>

                        </div>

                        {/* CERTIFICATIONS */}
                        {data.certifications?.length > 0 && (

                            <div className="mt-12">

                                <h2 className="text-[15px] font-bold uppercase tracking-wide">
                                    Certification
                                </h2>

                                <div className="mt-5 space-y-4">

                                    {data.certifications.map((cert, i) => (

                                        <div key={i}>

                                            <p className="font-semibold text-[13px]">
                                                • {cert.title}
                                            </p>

                                            <p className="text-[12px] text-gray-500 mt-1">
                                                {cert.year}
                                            </p>

                                        </div>

                                    ))}

                                </div>

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

                        {/* LANGUAGES */}
                        {data.languages?.length > 0 && (

                            <div className="mt-12">

                                <h2 className="text-[15px] font-bold uppercase tracking-wide">
                                    Languages
                                </h2>

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

        </div>

    );
}

/* SECTION TITLE */
function SectionTitle({ title }) {
    return (
        <div className="flex">
            <div className="flex "></div>

            <h2 className="text-[15px] font-bold uppercase tracking-wide">
                {title}
            </h2>


        </div>
    );
}