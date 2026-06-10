"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQSection() {

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

        <section className="w-full py-16 md:py-24 lg:py-30 bg-linear-to-br from-[#191970] via-[#312E81] to-[#4338CA] flex justify-center px-4 sm:px-6 lg:px-[5%]">

            <div className="w-full flex flex-col items-center gap-10 md:gap-14 lg:gap-18">

                {/* HEADING */}
                <div className="w-full flex flex-col items-center gap-3 md:gap-4 text-center">

                    <span className="text-sm sm:text-base lg:text-[18px] font-semibold tracking-[3px] uppercase text-[#A5B4FC]">

                        FAQ

                    </span>

                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[58px] font-extrabold text-white leading-tight lg:leading-17.5">

                        Frequently Asked Questions

                    </h2>

                    <p className="text-base sm:text-lg md:text-xl lg:text-[20px] text-[#CBD5E1] leading-7 lg:leading-8.5 max-w-3xl">

                        Everything you need to know about creating professional resumes using our builder.

                    </p>

                </div>

                {/* FAQ CONTAINER */}
                <div className="w-full flex flex-col gap-4 md:gap-5">

                    {faqs.map((faq, index) => (

                        <div
                            key={index}
                            className="w-full bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.18)] transition-all duration-300"
                        >

                            {/* QUESTION */}
                            <button
                                onClick={() =>
                                    setOpenIndex(
                                        openIndex === index ? null : index
                                    )
                                }
                                className="w-full flex items-center justify-between gap-4 px-5 md:px-8 lg:px-10 py-5 md:py-6 lg:py-8 text-left"
                            >

                                <h3 className="text-lg sm:text-xl md:text-[22px] lg:text-[24px] font-semibold text-white">

                                    {faq.question}

                                </h3>

                                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-linear-to-br from-[#60A5FA] to-[#818CF8] flex items-center justify-center shrink-0">

                                    {openIndex === index ? (

                                        <Minus className="text-white w-4 h-4 md:w-5 md:h-5" />

                                    ) : (

                                        <Plus className="text-white w-4 h-4 md:w-5 md:h-5" />

                                    )}

                                </div>

                            </button>

                            {/* ANSWER */}
                            <div
                                className={`overflow-hidden transition-all duration-500 ${openIndex === index
                                        ? "max-h-125 opacity-100 pb-5 md:pb-8"
                                        : "max-h-0 opacity-0"
                                    }`}
                            >

                                <p className="px-5 md:px-8 lg:px-10 text-sm sm:text-base lg:text-[18px] leading-7 lg:leading-8.5 text-[#E2E8F0]">

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