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
            <Nav></Nav>
            <section className="w-full min-h-screen  bg-linear-to-br from-[#191970] via-[#312E81] to-[#4338CA] px-[5%] py-20 flex justify-center overflow-hidden relative">



                {/* LEFT BLUR */}

                <div className="absolute top-[8%] -left-35 w-105 h-105 rounded-full bg-cyan-400/20 blur-[150px]"></div>

                {/* RIGHT BLUR */}

                <div className="absolute bottom-[5%] -right-30 w-105 h-105 rounded-full bg-indigo-500/20 blur-[150px]"></div>

                {/* MAIN CONTAINER */}

                <div className="w-full  flex justify-between items-start gap-[4%] relative z-10 mt-[8%]">

                    {/* LEFT SECTION */}

                    <div className="w-[44%] pt-15">

                        <p className="text-[#A5B4FC] text-[18px] uppercase tracking-[5px] font-semibold mb-7.5">
                            Final Resume Preview
                        </p>

                        <h1 className="text-[82px] leading-23 font-black text-white tracking-[-3px] mb-10.5">
                            Your professional resume is ready.
                        </h1>

                        <p className="text-[24px] leading-10.5 text-white/75  mb-15">
                            Download your ATS-friendly resume instantly or continue editing
                            anytime. Professionally designed templates crafted to impress recruiters.
                        </p>

                        {/* FEATURE CARDS */}

                        <div className="w-full flex flex-col gap-6.5 mb-17.5">

                            <div className="w-full bg-white/10 backdrop-blur-xl border border-white/10 rounded-[30px] p-7.5 flex items-start gap-6 hover:bg-white/15 transition-all duration-300">

                                <div className="min-w-16.5 h-16.5] rounded-[22px] bg-linear-to-r from-cyan-400 to-blue-500 flex items-center justify-center shadow-[0_10px_30px_rgba(59,130,246,0.45)]">

                                    <CheckCircle2 className="text-white" size={32} />

                                </div>

                                <div>

                                    <h2 className="text-white text-[30px] font-bold mb-2.5">
                                        ATS Optimized
                                    </h2>

                                    <p className="text-white/70 text-[20px] leading-8.5">
                                        Smart formatting and structure improve recruiter readability and ATS performance.
                                    </p>

                                </div>

                            </div>

                            <div className="w-full bg-white/10 backdrop-blur-xl border border-white/10 rounded-[30px] p-7.5 flex items-start gap-6 hover:bg-white/15 transition-all duration-300">

                                <div className="min-w-16.5 h-16.5] rounded-[22px] bg-linear-to-r from-purple-400 to-pink-500 flex items-center justify-center shadow-[0_10px_30px_rgba(192,132,252,0.45)]">

                                    <Sparkles className="text-white" size={32} />

                                </div>

                                <div>

                                    <h2 className="text-white text-[30px] font-bold mb-2.5">
                                        Premium Resume Design
                                    </h2>

                                    <p className="text-white/70 text-[20px] leading-8.5">
                                        Elegant layouts designed to make your profile stand out instantly.
                                    </p>

                                </div>

                            </div>

                            <div className="w-full bg-white/10 backdrop-blur-xl border border-white/10 rounded-[30px] p-7.5 flex items-start gap-6 hover:bg-white/15 transition-all duration-300">

                                <div className="min-w-16.5 h-16.5] rounded-[22px] bg-linear-to-r from-emerald-400 to-green-500 flex items-center justify-center shadow-[0_10px_30px_rgba(74,222,128,0.45)]">

                                    <ShieldCheck className="text-white" size={32} />

                                </div>

                                <div>

                                    <h2 className="text-white text-[30px] font-bold mb-2.5">
                                        Instant PDF Export
                                    </h2>

                                    <p className="text-white/70 text-[20px] leading-8.5">
                                        Download high-quality resumes with perfect spacing and formatting.
                                    </p>

                                </div>

                            </div>

                        </div>

                        {/* BUTTONS */}

                        <div className="flex items-center gap-6 flex-wrap">

                            <button
                                onClick={handleDownload}
                                className="px-12 py-6 rounded-3xl bg-linear-to-r from-cyan-400 via-blue-500 to-indigo-600 text-white text-[22px] font-bold shadow-[0_15px_40px_rgba(59,130,246,0.45)] hover:scale-[1.03] transition-all duration-300"
                            >
                                Download Resume
                            </button>

                            <button
                                onClick={() => router.push("/builder")}
                                className="px-12 py-6 rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl text-white text-[22px] font-semibold hover:bg-white hover:text-[#191970] transition-all duration-300"
                            >
                                Edit Resume
                            </button>

                        </div>

                    </div>

                    {/* RIGHT SECTION */}

                    <div className="w-[52%] flex justify-center sticky top-30">

                        <div className="w-full bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[42px] p-8.5 shadow-[0_20px_120px_rgba(0,0,0,0.35)]">

                            {/* TOP BAR */}

                            <div className="w-full flex justify-between items-center mb-8.5">

                                <div>

                                    <h2 className="text-white text-[38px] font-bold mb-2">
                                        Resume Preview
                                    </h2>

                                    <p className="text-white/60 text-[18px]">
                                        Live professional resume template
                                    </p>

                                </div>

                                <div className="px-4.5 py-2.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-[15px] font-semibold">
                                    ATS Friendly
                                </div>

                            </div>

                            {/* RESUME */}

                            <div className="w-full bg-white rounded-4xl overflow-hidden shadow-[0_20px_60px_rgba(15,23,42,0.18)] scale-[0.90] origin-top">

                                <SelectedTemplate data={resumeData} />

                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </>
    );
}