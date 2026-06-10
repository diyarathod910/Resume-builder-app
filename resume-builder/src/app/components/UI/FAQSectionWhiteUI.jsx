"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQSectionWhite() {

    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "Is this resume builder free?",
            answer: "Yes. You can create and preview your professional resume completely free using our modern templates."
        },
        {
            question: "Can I download my resume as PDF?",
            answer: "Absolutely. You can download your resume in high-quality PDF format instantly."
        },
        {
            question: "Are these templates ATS-friendly?",
            answer: "Yes. Zety exports clean, text-based PDFs with embedded fonts and simple structure, so ATS tools can read your resume without issues—even with two-column templates; if you're worried about very old systems, it's safest to pick a one-column layout.In practice, what matters most is that a human can quickly skim your resume, so focus on clear headings, relevant keywords, and impact- focused bullets"
        },
        {
            question: "Do I need design skills to create a resume?",
            answer: "No. Just fill in your information and choose a template — everything is professionally designed for you."
        },
        {
            question: "Can I edit my resume later?",
            answer: "Yes. You can come back anytime and continue editing your resume."
        },
        {
            question: "Why is Zety free?",
            answer: "Zety is built by a small, independent team focused on delivering a truly free resume builder that helps people worldwide get hired. We fund development through optional paid features like saving multiple versions or AI writing assistance. As a result, our free plan remains generous, with unlimited watermark-free PDFs, full template access, and full design control."
        },
        {
            question: "How does Zety protect my data?",
            answer: "Zety is privacy-first and commited to GDPR-compliance. We don't use third-party tracking cookies or sell your personal data. You own your content and can delete your account and data at any time. For details."
        }
    ];

    return (

        <section className="w-full bg-[#F8FAFC] py-16 md:py-24 lg:py-35 px-4 sm:px-6 md:px-10 lg:px-[5%] flex justify-center">

            {/* MAIN CONTAINER */}
            <div className="w-full max-w-7xl flex flex-col gap-10 md:gap-14 lg:gap-17">

                {/* HEADING */}
                <div className="w-full flex flex-col items-center text-center gap-3 md:gap-4">

                    <span className="text-sm md:text-base lg:text-[18px] font-semibold tracking-[2px] md:tracking-[3px] uppercase text-[#4F46E5]">

                        FAQ

                    </span>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-tight lg:leading-19 font-extrabold text-[#0F172A]">

                        Frequently Asked Questions

                    </h2>

                    <p className="text-base md:text-lg lg:text-[22px] leading-7 md:leading-8 lg:leading-9 text-[#64748B] max-w-3xl">

                        Everything you need to know about creating professional resumes using our builder.

                    </p>

                </div>

                {/* FAQ LIST */}
                <div className="w-full flex flex-col gap-4 md:gap-5">

                    {faqs.map((faq, index) => (

                        <div
                            key={index}
                            className="w-full bg-white border border-[#E2E8F0] rounded-2xl md:rounded-[28px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                        >

                            {/* QUESTION */}
                            <button
                                onClick={() =>
                                    setOpenIndex(openIndex === index ? null : index)
                                }
                                className="w-full flex items-center justify-between gap-4 px-5 md:px-8 lg:px-10 py-5 md:py-6 lg:py-7 text-left"
                            >

                                <h3 className="text-lg md:text-xl lg:text-[24px] font-semibold text-[#191970]">

                                    {faq.question}

                                </h3>

                                {/* ICON */}
                                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-linear-to-r from-[#38BDF8] via-[#3B82F6] to-[#6366F1] flex items-center justify-center shrink-0 shadow-lg">

                                    {openIndex === index ? (

                                        <Minus className="w-4 h-4 md:w-5 md:h-5 text-white" />

                                    ) : (

                                        <Plus className="w-4 h-4 md:w-5 md:h-5 text-white" />

                                    )}

                                </div>

                            </button>

                            {/* ANSWER */}
                            <div
                                className={`overflow-hidden transition-all duration-500 ${openIndex === index
                                        ? "max-h-100 opacity-100"
                                        : "max-h-0 opacity-0"
                                    }`}
                            >

                                <p className="px-5 md:px-8 lg:px-10 pb-6 md:pb-8 text-sm md:text-base lg:text-[18px] leading-7 md:leading-8 text-[#64748B]">

                                    {faq.answer}

                                </p>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );
}