"use client";

import Link from "next/link";
import { FileText, Plus, EllipsisVertical, ShieldCheck, FilePenLine } from "lucide-react";
import LoginModal from "../login/page";
import SignupModal from "../signup/page";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import axios from "axios";

import { templates } from "../Data/templates";

import DashboardSidebarUI from "../components/UI/DashboardSidebarUI";

export default function DashboardPage() {
    const router = useRouter();

    const [openLogin, setOpenLogin] = useState(false);
    const [openSignup, setOpenSignup] = useState(false);

    const [openMenuId, setOpenMenuId] =
        useState(null);

    const [resumes, setResumes] = useState([]);
    useEffect(() => {

        const fetchResumes = async () => {

            try {

                const user =
                    JSON.parse(localStorage.getItem("user"));

                // IF USER NOT LOGIN
                if (!user) return;

                const response =
                    await fetch(
                        `http://localhost:8080/user-resumes/${user._id}`
                    );

                const data = await response.json();

                if (data.success) {

                    setResumes(data.resumes);

                }

            } catch (error) {

                console.log(error);

            }

        };

        fetchResumes();

    }, []);

    const handleDeleteResume = async (id) => {

        try {

            await axios.delete(
                `http://localhost:8080/delete-resume/${id}`
            );

            // REMOVE FROM UI

            setResumes((prev) =>
                prev.filter(
                    (resume) => resume._id !== id
                )
            );

        } catch (error) {

            console.log(error);

        }

    };



    return (
        <section className="w-full min-h-screen bg-linear-to-br from-[#191970] via-[#312E81] to-[#4338CA] flex">

            <DashboardSidebarUI></DashboardSidebarUI>

            {/* MAIN CONTENT */}

            <div className="w-[82%] px-16 py-14 overflow-y-auto">

                {/* HEADER */}

                <div className="mb-14">

                    <h1 className="text-white text-[56px] font-extrabold leading-tight mb-4">
                        My Resumes
                    </h1>

                    <p className="text-white/70 text-[22px] leading-9.5 ">
                        Create professional ATS-friendly resumes with beautiful modern templates and export them instantly.
                    </p>

                </div>

                {/* CARDS */}

                <div className="flex flex-wrap gap-10">

                    {/* NEW RESUME CARD */}

                    <Link href="/templates">

                        <div className="w-[320px] h-100 rounded-[34px] border-2 border-dashed border-cyan-300/60 bg-white/5 backdrop-blur-xl flex flex-col items-center justify-center cursor-pointer hover:scale-[1.03] hover:border-cyan-300 hover:bg-white/10 transition-all duration-300">

                            <div className="w-22.5 h-22.5 rounded-full bg-linear-to-r from-cyan-400 to-blue-500 flex items-center justify-center shadow-[0_10px_30px_rgba(34,211,238,0.45)] mb-8">

                                <Plus size={42} className="text-white" />

                            </div>

                            <h2 className="text-white text-[30px] font-bold mb-3">
                                New Resume
                            </h2>

                            <p className="text-white/60 text-[18px] text-center leading-8 px-10">
                                Start building your professional resume in minutes.
                            </p>

                        </div>

                    </Link>

                    {/* RESUME LIST */}

                    {resumes.map((resume) => {

                        const templateData =
                            templates.find(
                                (t) => t.id === resume.template
                            );

                        return (

                            <div
                                key={resume._id}
                                className="w-[320px] cursor-pointer" onClick={() =>
                                    router.push(`/builder/${resume._id}`)
                                }

                            >

                                <div className="relative group">

                                    {/* PREVIEW */}

                                    <div className="w-full h-100 bg-white rounded-[34px] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.25)] border border-white/20 hover:-translate-y-2 transition-all duration-300">

                                        <img
                                            src={templateData?.image}
                                            alt={resume.title}
                                            className="w-full h-full object-cover"
                                        />

                                    </div>

                                    {/* ACTION */}
                                    <div className="absolute top-5 right-5">

                                        {/* MENU BUTTON */}

                                        <button

                                            onClick={(e) => {

                                                e.stopPropagation();

                                                setOpenMenuId(

                                                    openMenuId === resume._id
                                                        ? null
                                                        : resume._id
                                                );

                                            }}

                                            className="w-12.5 h-12.5 cursor-pointer rounded-2xl bg-white shadow-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                                        >

                                            <EllipsisVertical
                                                size={24}
                                                className="text-[#191970]"
                                            />

                                        </button>





                                        {/* DROPDOWN */}

                                        {
                                            openMenuId === resume._id && (

                                                <div className="absolute top-16 right-0 w-48  bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden z-50">

                                                    {/* UPDATE */}

                                                    <button

                                                        onClick={(e) => {

                                                            e.stopPropagation();

                                                            router.push(
                                                                `/builder/${resume._id}`
                                                            );

                                                        }}

                                                        className="w-full h-14 px-5 cursor-pointer text-left text-[17px] hover:bg-gray-100 transition-all"
                                                    >

                                                        Update Resume

                                                    </button>





                                                    {/* DELETE */}

                                                    <button

                                                        onClick={(e) => {

                                                            e.stopPropagation();

                                                            handleDeleteResume(
                                                                resume._id
                                                            );

                                                        }}

                                                        className="w-full h-14 px-5 text-left cursor-pointer text-[17px] text-red-500 hover:bg-red-50 transition-all"
                                                    >

                                                        Delete Resume

                                                    </button>

                                                </div>

                                            )
                                        }

                                    </div>

                                </div>

                                {/* INFO */}

                                <div className="mt-5 px-2">

                                    <h2 className="text-white text-[28px] font-bold mb-2">
                                        {resume.title}
                                    </h2>

                                    <p className="text-white/60 text-[18px]">
                                        Resume Template
                                    </p>

                                </div>

                            </div>

                        );

                    })}

                </div>

            </div>
            {openLogin && (
                <LoginModal setOpenLogin={setOpenLogin} />
            )}
            {openSignup && (
                <SignupModal

                />
            )}


        </section>
    );
}