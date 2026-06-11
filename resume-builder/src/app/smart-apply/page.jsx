"use client"

import ClassicResumeTemplate from "../components/temp/temp-1";
import ModernTemplate from "../components/temp/ModernTemplate";
import BlueSidebarTemplate from "../components/temp/BlueSidebarTemplate";
import CorporateTemplate from "../components/temp/CorporateTemplate";
import ProfessionalTemplate from "../components/temp/ProfessionalTemplate";
import SimplePrfessionalTemplate from "../components/temp/SimpleProfessionalTemplate";
import ATSFriendlyTemplate from "../components/temp/ATSFriendlyTemplate";
import CreativeTemplate from "../components/temp/CreativeTemplate";
import ModernFancyTemplate from "../components/temp/ModernFancyTemplate";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { CheckCircle2, Sparkles, ShieldCheck } from "lucide-react";
import Nav from "../components/header/nav";
import { useParams } from "next/navigation";




export default function SmartApplyPage() {
    const router = useRouter();
    const params = useParams();

    const resumeId = params.id;

    console.log(resumeId);
    

    const [resumeData, setResumeData] = useState(null);
    useEffect(() => {

        const data = localStorage.getItem("resumeData");

        if (data) {
            setResumeData(JSON.parse(data));
        }

    }, []);
    if (!resumeData) return null;


    const templates = {
        classic: ClassicResumeTemplate,
        modern: ModernTemplate,
        blueSidebar: BlueSidebarTemplate,
        corporate: CorporateTemplate,
        professional: ProfessionalTemplate,
        simple: SimplePrfessionalTemplate,
        ats: ATSFriendlyTemplate,
        creative: CreativeTemplate,
        fency: ModernFancyTemplate
    };
    const SelectedTemplate =
        templates[resumeData?.selectedTemplate]
        || ClassicResumeTemplate;




    return (

        <>
            <div className="w-full min-h-screen bg-linear-to-br from-[#191970] via-[#312E81] to-[#4338CA] overflow-x-hidden">

                <Nav />

                <div className="w-full flex justify-center py-10 lg:py-20 mt-20 lg:mt-28">

                    <div className="w-[95%] xl:w-[90%] flex flex-col xl:flex-row justify-between items-center xl:items-start gap-10 lg:gap-16">
                        {/* LEFT */}

                        <div className="w-full xl:w-[45%] pt-0 xl:pt-12 text-center xl:text-left">

                            <p className="text-[#A5B4FC] text-[18px] uppercase tracking-[4px] font-semibold mb-8">
                                Smart Apply Technology
                            </p>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[74px] leading-tight xl:leading-20.5 font-black text-white mb-6 lg:mb-10">
                                Your resume is ready to impress recruiters.
                            </h1>

                            <p className="text-base sm:text-lg lg:text-xl xl:text-[24px] leading-7 lg:leading-10 text-white/70 mb-8 lg:mb-14">
                                Our AI-optimized templates improve readability, ATS compatibility, and recruiter engagement so you can land more interviews faster.
                            </p>

                            <div className="flex flex-col gap-8 mb-16">

                                <div className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-2xl lg:rounded-[30px] p-4 sm:p-6 lg:p-7 flex items-start gap-4 lg:gap-5">

                                    <div className="min-w-15 h-15 rounded-2xl bg-linear-to-r from-cyan-400 to-blue-500 flex items-center justify-center shadow-xl">
                                        <CheckCircle2 className="text-white" size={30} />
                                    </div>

                                    <div>

                                        <h2 className="text-white text-xl sm:text-2xl lg:text-[28px] font-bold mb-2 lg:mb-3">
                                            ATS Friendly
                                        </h2>

                                        <p className="text-white/70 text-sm sm:text-base lg:text-[20px] leading-6 lg:leading-8">
                                            Optimized structure and formatting that passes applicant tracking systems easily.
                                        </p>

                                    </div>

                                </div>

                                <div className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-[30px] p-7 flex items-start gap-5">

                                    <div className="min-w-15 h-15 rounded-2xl bg-linear-to-r from-purple-400 to-pink-500 flex items-center justify-center shadow-xl">
                                        <Sparkles className="text-white" size={30} />
                                    </div>

                                    <div>

                                        <h2 className="text-white text-xl sm:text-2xl lg:text-[28px] font-bold mb-2 lg:mb-3">
                                            Modern Design
                                        </h2>

                                        <p className="text-white/70 text-sm sm:text-base lg:text-[20px] leading-6 lg:leading-8">
                                            Professionally crafted templates that instantly make your resume stand out.
                                        </p>

                                    </div>

                                </div>

                                <div className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-[30px] p-7 flex items-start gap-5">

                                    <div className="min-w-15 h-15 rounded-2xl bg-linaer-to-r from-emerald-400 to-green-500 flex items-center justify-center shadow-xl">
                                        <ShieldCheck className="text-white" size={30} />
                                    </div>

                                    <div>

                                        <h2 className="text-white text-xl sm:text-2xl lg:text-[28px] font-bold mb-2 lg:mb-3">
                                            Recruiter Approved
                                        </h2>

                                        <p className="text-white/70 text-sm sm:text-base lg:text-[20px] leading-6 lg:leading-8">
                                            Clean layout and strategic formatting increase recruiter readability.
                                        </p>

                                    </div>

                                </div>

                            </div>

                            <div className="flex flex-col sm:flex-row items-center xl:items-start gap-4 lg:gap-6">

                                <button
                                    onClick={() =>
                                        router.push(`/final-resume?id=${resumeId || ""}`)
                                    }
                                    className="w-full sm:w-auto px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-5 rounded-xl lg:rounded-[22px] bg-linear-to-r from-cyan-400 via-blue-500 to-indigo-600 text-white text-base sm:text-lg lg:text-[22px] font-bold shadow-2xl hover:scale-105 hover:shadow-[0_15px_40px_rgba(59,130,246,0.5)] transition-all duration-300"
                                >
                                    Continue →
                                </button>

                                <button
                                    className="w-full sm:w-auto px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-5 rounded-xl lg:rounded-[22px] border border-white/20 text-white text-base sm:text-lg lg:text-[22px] font-semibold hover:bg-white hover:text-[#191970] transition-all duration-300"
                                >
                                    Change Template
                                </button>

                            </div>

                        </div>

                        {/* RIGHT */}

                        <div className="w-full xl:w-[55%] flex justify-center mt-[5%]">

                            <div className="w-full lg:w-[90%] xl:w-[85%] bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl lg:rounded-[40px] p-4 sm:p-6 lg:p-8 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">

                                <div className="flex justify-between items-center mb-8">

                                    <div>

                                        <h2 className="text-white text-2xl lg:text-[34px] font-bold">
                                            Resume Preview
                                        </h2>

                                        <p className="text-white/60 text-[18px] mt-2">
                                            Real-time professional template preview
                                        </p>

                                    </div>

                                    <div className="px-5 py-2 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-[15px] font-semibold">
                                        ATS Optimized
                                    </div>

                                </div>

                                <div className="bg-white rounded-2xl lg:rounded-[30px] overflow-auto shadow-2xl h-180">

                                    <SelectedTemplate data={resumeData} />

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div >
        </>
    );
}