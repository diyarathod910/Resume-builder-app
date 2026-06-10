"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";



import ClassicTemplate from "../components/temp/temp-1";
import ModernTemplate from "../components/temp/ModernTemplate";
import BlueSidebarTemplate from "../components/temp/BlueSidebarTemplate";
import CorporateTemplate from "../components/temp/CorporateTemplate";
import ProfessionalTemplate from "../components/temp/ProfessionalTemplate";
import SimplePrfessionalTemplate from "../components/temp/SimpleProfessionalTemplate";
import ATSFriendlyTemplate from "../components/temp/ATSFriendlyTemplate";
import CreativeTemplate from "../components/temp/CreativeTemplate";
import ModernFancyTemplate from "../components/temp/ModernFancyTemplate";
import { useRouter } from "next/navigation";

import { CheckCircle2, Sparkles, ShieldCheck } from "lucide-react";

import Nav from "../components/header/nav";
import { BASE_URL } from "../config/api";

export default function FinalResumePage() {
    const router = useRouter();
    // const params = useParams();

    const params = useParams();

    const resumeId = params.id;


    const [resumeData, setResumeData] = useState(null);

    useEffect(() => {
        const savedResume = localStorage.getItem("resumeData");

        if (savedResume) {
            setResumeData(JSON.parse(savedResume));
        }
    }, []);
    const templates = {
        classic: ClassicTemplate,
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
        || ClassicTemplate;

    const handleDownload = async () => {

        const user =
            JSON.parse(localStorage.getItem("user"));

        console.log(user);
        console.log(resumeData);

        if (resumeId) {

            // UPDATE EXISTING RESUME

            await axios.put(

                `${BASE_URL}/update-resume/${resumeId}`,

                {
                    title: resumeData.name,

                    template:
                        resumeData.selectedTemplate,

                    resumeData,
                }

            );

        } else {

            // CREATE NEW RESUME

            await axios.post(

                `${BASE_URL}/create-resume`,

                {
                    userId: user._id,

                    title:
                        resumeData.name,

                    template:
                        resumeData.selectedTemplate,

                    resumeData,
                }

            );

        }

        const response = await axios.post(
            `${BASE_URL}/download-pdf`,
            resumeData,
            {
                responseType: "blob",
            }
        );

        const blob = new Blob(
            [response.data],
            { type: "application/pdf" }
        );

        const url =
            window.URL.createObjectURL(blob);

        const link =
            document.createElement("a");

        link.href = url;
        link.download = "resume.pdf";

        document.body.appendChild(link);

        link.click();

        link.remove();
    };

    return (

        <>

            <section className="w-full min-h-screen bg-linear-to-br from-[#191970] via-[#312E81] to-[#4338CA] px-4 sm:px-6 lg:px-[5%] py-24 overflow-x-hidden relative">

                <Nav />

                {/* BLURS */}
                <div className="absolute top-20 -left-40 w-96 h-96 rounded-full bg-cyan-400/20 blur-[150px]" />
                <div className="absolute bottom-10 -right-40 w-96 h-96 rounded-full bg-indigo-500/20 blur-[150px]" />

                <div className=" mx-auto mt-10 lg:mt-28 relative z-10">

                    <div className="grid grid-cols-1 xl:grid-cols-[0.95fr_1.25fr] gap-12 xl:gap-16 items-start">

                        {/* LEFT SIDE */}
                        <div className="w-full">

                            {/* KEEP YOUR CURRENT LEFT CONTENT */}

                            <p className="text-[#A5B4FC] text-sm sm:text-base uppercase tracking-[4px] font-semibold mb-6">
                                Final Resume Preview
                            </p>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[82px] leading-tight font-black text-white mb-8">
                                Your professional resume is ready.
                            </h1>

                            <p className="text-base sm:text-lg lg:text-xl xl:text-[24px] leading-8 lg:leading-10 text-white/75 mb-12">
                                Download your ATS-friendly resume instantly or continue editing anytime.
                                Professionally designed templates crafted to impress recruiters.
                            </p>


                            {/* FEATURE CARDS */}
                            <div className="flex flex-col gap-5 mb-12">

                                {/* ATS */}
                                <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-5 lg:p-7 flex items-start gap-5 hover:bg-white/15 transition-all">

                                    <div className="min-w-14 h-14 rounded-2xl bg-linear-to-r from-cyan-400 to-blue-500 flex items-center justify-center shadow-xl">
                                        <CheckCircle2 className="text-white" size={28} />
                                    </div>

                                    <div>

                                        <h2 className="text-white text-xl lg:text-2xl xl:text-[30px] font-bold mb-2">
                                            ATS Optimized
                                        </h2>

                                        <p className="text-white/70 text-sm sm:text-base lg:text-lg">
                                            Smart formatting and structure improve recruiter readability and ATS performance.
                                        </p>

                                    </div>

                                </div>

                                {/* PREMIUM */}
                                <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-5 lg:p-7 flex items-start gap-5 hover:bg-white/15 transition-all">

                                    <div className="min-w-14 h-14 rounded-2xl bg-linear-to-r from-purple-400 to-pink-500 flex items-center justify-center shadow-xl">
                                        <Sparkles className="text-white" size={28} />
                                    </div>

                                    <div>

                                        <h2 className="text-white text-xl lg:text-2xl xl:text-[30px] font-bold mb-2">
                                            Premium Resume Design
                                        </h2>

                                        <p className="text-white/70 text-sm sm:text-base lg:text-lg">
                                            Elegant layouts designed to make your profile stand out instantly.
                                        </p>

                                    </div>

                                </div>

                                {/* PDF */}
                                <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-5 lg:p-7 flex items-start gap-5 hover:bg-white/15 transition-all">

                                    <div className="min-w-14 h-14 rounded-2xl bg-linear-to-r from-emerald-400 to-green-500 flex items-center justify-center shadow-xl">
                                        <ShieldCheck className="text-white" size={28} />
                                    </div>

                                    <div>

                                        <h2 className="text-white text-xl lg:text-2xl xl:text-[30px] font-bold mb-2">
                                            Instant PDF Export
                                        </h2>

                                        <p className="text-white/70 text-sm sm:text-base lg:text-lg">
                                            Download high-quality resumes with perfect spacing and formatting.
                                        </p>

                                    </div>

                                </div>

                            </div>

                            {/* YOUR BUTTONS HERE */}
                            {/* BUTTONS */}
                            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 mt-12">

                                <button
                                    onClick={handleDownload}
                                    className="w-full sm:w-auto px-8 lg:px-12 py-4 lg:py-6 rounded-3xl bg-linear-to-r from-cyan-400 via-blue-500 to-indigo-600 text-white text-lg lg:text-[22px] font-bold shadow-[0_15px_40px_rgba(59,130,246,0.45)] hover:scale-[1.03] transition-all duration-300 cursor-pointer"
                                >
                                    Download Resume
                                </button>

                                <button
                                    onClick={() => router.push("/builder")}
                                    className="w-full sm:w-auto px-8 lg:px-12 py-4 lg:py-6 rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl text-white text-lg lg:text-[22px] font-semibold hover:bg-white hover:text-[#191970] transition-all duration-300 cursor-pointer"
                                >
                                    Edit Resume
                                </button>

                            </div>

                        </div>

                        {/* RIGHT SIDE */}
                        <div className="w-full xl:sticky xl:top-8">

                            <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-4xl lg:rounded-[42px] p-4 sm:p-6 lg:p-8 shadow-[0_20px_120px_rgba(0,0,0,0.35)]">

                                {/* TOP BAR */}

                                <div className="flex flex-col sm:flex-row justify-between gap-4 sm:items-center mb-6">

                                    <div>

                                        <h2 className="text-white text-2xl lg:text-3xl font-bold">
                                            Resume Preview
                                        </h2>

                                        <p className="text-white/60 text-sm lg:text-base mt-1">
                                            Live professional resume template
                                        </p>

                                    </div>

                                    <div className="px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-sm font-semibold w-fit">
                                        ATS Friendly
                                    </div>

                                </div>

                                {/* RESUME */}

                                <div className="bg-white rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(15,23,42,0.18)]">

                                    <div className="w-full max-h-[85vh] overflow-auto">

                                        <SelectedTemplate data={resumeData} />

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </>
    );
}