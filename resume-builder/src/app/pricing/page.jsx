"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import Nav from "../components/header/nav";
import FAQSectionWhite from "../components/UI/FAQSectionWhiteUI";
import Footer from "../components/UI/FooterUI";

export default function PricingPage() {

    const plans = [

        {
            name: "Free",
            price: "$0",
            description: "Perfect for getting started with professional resumes.",
            features: [
                "1 Resume",
                "Modern Templates",
                "Live Resume Preview",
                "ATS-Friendly Layouts",
                "PDF Download",
            ],
            button: "Get Started",
            popular: false,
        },

        {
            name: "Pro",
            price: "$9",
            duration: "/month",
            description: "Everything you need for unlimited resume creation.",
            features: [
                "Unlimited Resumes",
                "All Premium Templates",
                "Unlimited PDF Downloads",
                "Priority Support",
                "Modern Design Templates",
                "ATS Optimization",
                "Resume Editing Anytime",
            ],
            button: "Upgrade Now",
            popular: true,
        },

        {
            name: "Teams",
            price: "$29",
            duration: "/month",
            description: "Best for colleges, teams, and organizations.",
            features: [
                "Everything in Pro",
                "Team Access",
                "Shared Workspace",
                "Admin Dashboard",
                "Priority Assistance",
                "Unlimited Usage",
            ],
            button: "Upgrade Now",
            popular: false,
        },

    ];

    return (
        <>


            <Nav></Nav>

            <section className="w-full min-h-screen bg-linear-to-br from-[#191970] via-[#312E81] to-[#4338CA] px-4 sm:px-6 md:px-10 lg:px-[5%] py-20 lg:py-35 flex justify-center">

                {/* MAIN CONTAINER */}
                <div className="w-full max-w-7xl flex flex-col items-center gap-12 md:gap-16 lg:gap-22 mt-10 lg:mt-[5%]">

                    {/* TOP CONTENT */}
                    <div className="w-full flex flex-col items-center text-center gap-6">

                        <span className="px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[18px] font-semibold text-[#C7D2FE] tracking-[2px] uppercase">

                            Pricing Plans

                        </span>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-tight lg:leading-22.5 font-extrabold text-white w-full lg:w-[80%]">

                            Simple pricing for every career stage

                        </h1>

                        <p className="text-base sm:text-lg md:text-xl lg:text-[24px] leading-7 md:leading-9 lg:leading-10.5 text-[#CBD5E1] max-w-4xl">

                            Build professional resumes with modern templates, ATS-friendly layouts, and instant PDF downloads.

                        </p>

                    </div>

                    {/* PRICING CARDS */}
                    <div className="w-full flex flex-wrap justify-center items-stretch gap-6 lg:gap-8">

                        {plans.map((plan, index) => (

                            <div
                                key={index}
                                className="group relative w-full sm:w-[80%] md:w-[48%] xl:w-[31%] rounded-[34px] border border-white/10 overflow-hidden backdrop-blur-xl bg-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.18)] transition-all duration-500 hover:bg-white hover:border-white hover:-translate-y-3 hover:shadow-[0_20px_80px_rgba(99,102,241,0.35)]"
                            >

                                {/* POPULAR BADGE */}
                                {plan.popular && (

                                    <div className="absolute top-5 right-5 bg-linear-to-r from-[#38BDF8] to-[#6366F1] px-4 py-2 rounded-full text-white text-sm font-semibold shadow-lg">

                                        Most Popular

                                    </div>

                                )}

                                {/* CARD CONTENT */}
                                <div className="w-full flex flex-col gap-8 h-full p-6 md:p-8 lg:p-10">

                                    {/* PLAN INFO */}
                                    <div className="flex flex-col gap-4">

                                        <h2 className="text-2xl md:text-3xl lg:text-[36px] font-bold text-white group-hover:text-[#191970] transition-all duration-500">

                                            {plan.name}

                                        </h2>

                                        <div className="flex items-end gap-2">

                                            <span className="text-5xl sm:text-6xl lg:text-[74px] leading-none font-extrabold text-white group-hover:text-[#0F172A] transition-all duration-500">

                                                {plan.price}

                                            </span>

                                            <span className="text-base md:text-lg lg:text-[22px] mb-2 text-[#CBD5E1] group-hover:text-[#64748B] transition-all duration-500">

                                                {plan.duration}

                                            </span>

                                        </div>

                                        <p className="text-base md:text-lg lg:text-[20px] leading-7 lg:leading-8 text-[#E2E8F0] group-hover:text-[#64748B] transition-all duration-500">

                                            {plan.description}

                                        </p>

                                    </div>

                                    {/* FEATURES */}
                                    <div className="w-full flex flex-col gap-5">

                                        {plan.features.map((feature, i) => (

                                            <div
                                                key={i}
                                                className="flex items-center gap-4"
                                            >

                                                <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 bg-white/10 group-hover:bg-[#EEF2FF] transition-all duration-500">

                                                    <Check className="w-4 h-4 text-white group-hover:text-[#191970] transition-all duration-500" />

                                                </div>

                                                <p className="text-sm md:text-base lg:text-[18px] text-[#E2E8F0] group-hover:text-[#334155] transition-all duration-500">

                                                    {feature}

                                                </p>

                                            </div>

                                        ))}

                                    </div>

                                    {/* BUTTON */}
                                    <div className="mt-auto pt-5">



                                        <Link href="/">

                                            <button
                                                className="w-full py-3 md:py-4 lg:py-5 rounded-[22px] text-base md:text-lg lg:text-[20px] font-bold text-white bg-linear-to-r from-[#38BDF8] via-[#3B82F6] to-[#6366F1] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_15px_50px_rgba(59,130,246,0.45)]"
                                            >

                                                {plan.button}

                                            </button>

                                        </Link>



                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>
            <FAQSectionWhite></FAQSectionWhite>
            <Footer></Footer>
        </>
    );
}