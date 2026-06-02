"use client";

import Image from "next/image";

export default function RecruitersSection() {

    const logos = [
        "/logos/tcs.png",
        "/logos/microsoft.png",
        "/logos/deloitte.png",
        "/logos/amazon.png",
        "/logos/accenture.png",
        "/logos/netflix.png",
        "/logos/google.png",
        "/logos/uber.png",
        "/logos/spotify.png",
        "/logos/forbes.png",
    ];

    return (

        <section className="w-full py-30 bg-[#F8FAFC] overflow-hidden">

            {/* HEADING */}
            <div className="w-full flex flex-col items-center gap-4.5 mb-17.5">

                <span className="text-[20px] font-bold tracking-[3px] text-[#4F46E5] uppercase">

                    Companies

                </span>

                <h2 className="text-[64px] font-extrabold text-[#0F172A]">

                    Our Top Recruiters

                </h2>

            </div>

            <div className="w-full overflow-hidden py-7.5 relative">

                {/* LEFT FADE */}
                <div className="absolute left-0 top-0 w-45 h-full bg-linear-to-r from-[#F8FAFC] to-transparent z-10"></div>

                {/* RIGHT FADE */}
                <div className="absolute right-0 top-0 w-45 h-full bg-linear-to-l from-[#F8FAFC] to-transparent z-10"></div>

                {/* MOVING LOGOS */}
                <div className="flex w-max animate-marquee gap-7">

                    {[...logos, ...logos].map((logo, index) => (

                        <div
                            key={index}
                            className="w-65 h-30 bg-white rounded-[22px] border border-[#E2E8F0] flex items-center justify-center shrink-0"
                        >

                            <img
                                src={logo}
                                alt="company"
                                className="w-40 object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
                            />

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );
}