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

        <section className="w-full py-16 md:py-24 lg:py-30 bg-[#F8FAFC] overflow-hidden">

            {/* HEADING */}
            <div className="w-full flex flex-col items-center gap-3 md:gap-4 mb-10 md:mb-14 lg:mb-18 px-4">

                <span className="text-sm sm:text-base md:text-lg lg:text-[20px] font-bold tracking-[3px] text-[#4F46E5] uppercase">

                    Companies

                </span>

                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold text-[#0F172A] text-center">

                    Our Top Recruiters

                </h2>

            </div>

            {/* MARQUEE */}
            <div className="w-full overflow-hidden py-4 md:py-6 lg:py-8 relative">

                {/* LEFT FADE */}
                <div className="absolute left-0 top-0 w-12 sm:w-20 md:w-28 lg:w-45 h-full bg-linear-to-r from-[#F8FAFC] to-transparent z-10"></div>

                {/* RIGHT FADE */}
                <div className="absolute right-0 top-0 w-12 sm:w-20 md:w-28 lg:w-45 h-full bg-linear-to-l from-[#F8FAFC] to-transparent z-10"></div>

                {/* MOVING LOGOS */}
                <div className="flex w-max animate-marquee gap-4 md:gap-6 lg:gap-7">

                    {[...logos, ...logos].map((logo, index) => (

                        <div
                            key={index}
                            className="D w-36 h-20 sm:w-44 sm:h-24 md:w-52 md:h-28 lg:w-65 lg:h-30 bg-white rounded-xl lg:rounded-[22px] border border-[#E2E8F0] flex items-center justify-center shrink-0 shadow-sm ">

                            <img
                                src={logo}
                                alt="company"
                                className=" w-20 sm:w-24 md:w-32 lg:w-40 object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer" />

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );
}