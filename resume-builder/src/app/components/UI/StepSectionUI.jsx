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

        <section className="w-full bg-[#F8FAFC] flex justify-center py-16 md:py-24 lg:py-30 px-4 sm:px-6 md:px-10 lg:px-[5%]">

            {/* MAIN CONTAINER */}
            <div className="w-full flex flex-col gap-16 md:gap-24 lg:gap-30">

                {/* HEADING */}
                <div className="flex flex-col gap-4 md:gap-5">

                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[74px] leading-tight lg:leading-21 font-black text-[#0F172A]">

                        Create a professional resume in minutes

                    </h2>

                    <p className="text-lg sm:text-xl md:text-2xl lg:text-[28px] leading-8 md:leading-9 lg:leading-10.5 text-[#64748B] max-w-5xl">

                        Build ATS-friendly resumes easily with beautiful templates and live preview.

                    </p>

                </div>

                {/* STEPS */}
                <div className="flex flex-col gap-16 md:gap-24 lg:gap-30">

                    {steps.map((step, index) => (

                        <div
                            key={index}
                            className={`w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                                }`}
                        >

                            {/* IMAGE */}
                            <div className="w-full lg:w-1/2">

                                <div className="bg-white rounded-[38px] p-6 shadow-xl border border-[#E2E8F0]">

                                    <Image
                                        src={step.image}
                                        alt={step.title}
                                        width={1200}
                                        height={800}
                                        className="w-full rounded-3xl"
                                    />

                                </div>

                            </div>

                            {/* CONTENT */}
                            <div className="w-full lg:w-1/2 flex flex-col gap-6">

                                <div className="w-20 h-20 rounded-[24px] bg-gradient-to-br from-[#38BDF8] via-[#3B82F6] to-[#6366F1] flex items-center justify-center text-white shadow-xl">

                                    {step.icon}

                                </div>

                                <h3 className="text-4xl lg:text-[72px] leading-none font-black text-[#191970]">

                                    {step.number}. {step.title}

                                </h3>

                                <p className="text-xl lg:text-[30px] leading-relaxed text-[#64748B]">

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