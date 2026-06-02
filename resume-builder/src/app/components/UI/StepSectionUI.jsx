"use client";

import Image from "next/image";
import { LayoutTemplate, FilePenLine, Eye, Download } from "lucide-react";

export default function StepsSection() {

    const steps = [

        {
            number: "1",
            title: "Choose a template",
            description:
                "Select from modern, professional, and ATS-friendly resume templates.",
            icon: <LayoutTemplate className="w-8.5 h-8.5" />,
            image: "/images/step-template.png",
        },

        {
            number: "2",
            title: "Fill your details",
            description:
                "Add your education, experience, skills, and contact information easily.",
            icon: <FilePenLine className="w-8.5 h-8.5" />,
            image: "/images/step-form.png",
        },

        {
            number: "3",
            title: "Preview your resume",
            description:
                "See your resume update instantly while editing your information.",
            icon: <Eye className="w-8.5 h-8.5" />,
            image: "/images/step-preview.png",
        },

        {
            number: "4",
            title: "Download PDF",
            description:
                "Download your professional resume in high-quality PDF format.",
            icon: <Download className="w-8.5 h-8.5" />,
            image: "/images/step-download.png",
        },

    ];

    return (

        <section className="w-full bg-[#F8FAFC] flex justify-center py-30 px-[5%]">

            {/* MAIN CONTAINER */}
            <div className="w-full  flex flex-col gap-30">

                {/* HEADING */}
                <div className="flex flex-col gap-5.5">

                    <h2 className="text-[74px] leading-21 font-black text-[#0F172A]">

                        Create a professional resume in minutes

                    </h2>

                    <p className="text-[28px] leading-10.5 text-[#64748B] ">

                        Build ATS-friendly resumes easily with beautiful templates and live preview.

                    </p>

                </div>

                {/* STEPS */}
                <div className="flex flex-col gap-30">

                    {steps.map((step, index) => (

                        <div
                            key={index}
                            className={`w-full flex items-center justify-between gap-[7%] ${index % 2 !== 0 ? "flex-row-reverse" : ""
                                }`}
                        >

                            {/* IMAGE SIDE */}
                            <div className="w-[48%]">

                                <div className="w-full bg-white rounded-[38px] p-7.5 shadow-xl border border-[#E2E8F0]">

                                    {/* TOP TABS */}
                                    {/* <div className="flex items-center gap-4.5 mb-7.5">

                                       
                                    </div> */}

                                    {/* IMAGE */}
                                    <div className="w-full rounded-3xl overflow-hidden">

                                        <Image
                                            src={step.image}
                                            alt={step.title}
                                            width={800}
                                            height={600}
                                            className="w-full object-cover"
                                        />

                                    </div>

                                </div>

                            </div>

                            {/* CONTENT SIDE */}
                            <div className="w-[45%] flex flex-col gap-6.5">

                                {/* ICON */}
                                <div className="w-22.5 h-22.5 rounded-[28px] bg-linear-to-br from-[#38BDF8] via-[#3B82F6] to-[#6366F1] flex items-center justify-center text-white shadow-xl">

                                    {step.icon}

                                </div>

                                {/* TITLE */}
                                <h3 className="text-[64px] leading-18 font-bold text-[#191970]">

                                    {step.number}. {step.title}

                                </h3>

                                {/* DESCRIPTION */}
                                <p className="text-[28px] leading-11.5 text-[#64748B]">

                                    {step.description}

                                </p>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );
}