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
            button: "Contact Us",
            popular: false,
        },

    ];

    return (
        <>


            <Nav></Nav>

            <section className="w-full min-h-screen bg-linear-to-br from-[#191970] via-[#312E81] to-[#4338CA] px-[5%] py-35 flex justify-center">

                {/* MAIN CONTAINER */}
                <div className="w-full  flex flex-col items-center gap-22.5 mt-[5%]">

                    {/* TOP CONTENT */}
                    <div className="w-full flex flex-col items-center text-center gap-6">

                        <span className="px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[18px] font-semibold text-[#C7D2FE] tracking-[2px] uppercase">

                            Pricing Plans

                        </span>

                        <h1 className="text-[68px] leading-22.5 font-extrabold text-white w-[80%]">

                            Simple pricing for every career stage

                        </h1>

                        <p className="text-[24px] leading-10.5 text-[#CBD5E1] ">

                            Build professional resumes with modern templates, ATS-friendly layouts, and instant PDF downloads.

                        </p>

                    </div>

                    {/* PRICING CARDS */}
                    <div className="w-full flex justify-center items-stretch gap-8.5 flex-wrap">

                        {plans.map((plan, index) => (

                            <div
                                key={index}
                                className={`relative w-[31%] rounded-[34px] border overflow-hidden backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 ${plan.popular
                                    ? "bg-white shadow-[0_20px_80px_rgba(99,102,241,0.35)] border-white"
                                    : "bg-white/10 border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.18)]"
                                    }`}
                            >

                                {/* POPULAR BADGE */}
                                {plan.popular && (

                                    <div className="absolute top-5.5 right-5.5 bg-linear-to-r from-[#38BDF8] to-[#6366F1] px-4.5 py-2 rounded-full text-white text-[14px] font-semibold shadow-lg">

                                        Most Popular

                                    </div>

                                )}

                                {/* CARD CONTENT */}
                                <div className="w-full flex flex-col gap-8.5 p-10.5 h-full">

                                    {/* PLAN INFO */}
                                    <div className="flex flex-col gap-4.5">

                                        <h2 className={`text-[36px] font-bold ${plan.popular ? "text-[#191970]" : "text-white"
                                            }`}>

                                            {plan.name}

                                        </h2>

                                        <div className="flex items-end gap-2">

                                            <span className={`text-[74px] leading-18.5 font-extrabold ${plan.popular ? "text-[#0F172A]" : "text-white"
                                                }`}>

                                                {plan.price}

                                            </span>

                                            <span className={`text-[22px] mb-2.5 ${plan.popular ? "text-[#64748B]" : "text-[#CBD5E1]"
                                                }`}>

                                                {plan.duration}

                                            </span>

                                        </div>

                                        <p className={`text-[20px] leading-8.5 ${plan.popular ? "text-[#64748B]" : "text-[#E2E8F0]"
                                            }`}>

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

                                                <div className={`w-7.5 h-7.5 rounded-full flex items-center justify-center shrink-0 ${plan.popular
                                                    ? "bg-[#EEF2FF]"
                                                    : "bg-white/10"
                                                    }`}>

                                                    <Check className={`w-4.5 h-4.5 ${plan.popular
                                                        ? "text-[#191970]"
                                                        : "text-white"
                                                        }`} />

                                                </div>

                                                <p className={`text-[18px] ${plan.popular ? "text-[#334155]" : "text-[#E2E8F0]"
                                                    }`}>

                                                    {feature}

                                                </p>

                                            </div>

                                        ))}

                                    </div>

                                    {/* BUTTON */}
                                    <div className="mt-auto pt-5">

                                        <Link href="/builder">

                                            <button className={`w-full py-5 rounded-[22px] text-[20px] font-bold transition-all duration-300 ${plan.popular
                                                ? "bg-linear-to-r from-[#38BDF8] via-[#3B82F6] to-[#6366F1] text-white hover:shadow-[0_15px_50px_rgba(59,130,246,0.45)] hover:scale-[1.02]"
                                                : "bg-white text-[#191970] hover:bg-[#E2E8F0]"
                                                }`}>

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