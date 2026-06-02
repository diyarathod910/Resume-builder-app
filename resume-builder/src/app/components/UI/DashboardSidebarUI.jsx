"use client";

import Link from "next/link";
import { FileText, Plus, EllipsisVertical, ShieldCheck, FilePenLine } from "lucide-react";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardSidebarUI() {

    const router = useRouter();

    const [user, setUser] = useState(null);

    const [openAccountMenu, setOpenAccountMenu] =
        useState(false);

    useEffect(() => {

        const storedUser =
            localStorage.getItem("user");

        if (storedUser) {

            setUser(
                JSON.parse(storedUser)
            );

        }

    }, []);

    const [openLogin, setOpenLogin] = useState(false);
    const [openSignup, setOpenSignup] = useState(false);
    return (
        <>
            {/* SIDEBAR */}

            <div className="w-[18%] min-h-screen bg-white/10 backdrop-blur-xl border-r border-white/10 px-7 py-8 flex flex-col justify-between">

                <div>

                    {/* LOGO */}

                    <div className="flex items-center gap-3 mb-16 cursor-pointer" onClick={() => router.push("/")}>
                        <div className="w-13 h-13 rounded-2xl bg-white flex items-center justify-center text-[#191970] font-bold text-[24px] shadow-lg">
                            Z
                        </div>

                        <h1 className="text-white text-[34px] font-bold">
                            Zety
                        </h1>
                    </div>

                    {/* MENU */}

                    <div className="flex flex-col gap-4">

                        <button className="w-full flex items-center gap-3 bg-white text-[#191970] rounded-2xl px-5 py-4 text-[19px] font-semibold shadow-lg cursor-pointer">
                            <FileText size={22} />
                            Resumes
                        </button>

                       
                    </div>

                </div>

                {/* AUTH BUTTONS */}


                <div className="flex flex-col gap-6">

                    {/* LOGIN / SIGNUP */}

                    {
                        user ? (

                            <div className="relative mt-10 overflow-visible">

                                {/* ACCOUNT BUTTON */}

                                <button
                                    onClick={() =>
                                        setOpenAccountMenu(
                                            !openAccountMenu
                                        )
                                    }
                                    className="flex items-center gap-4 cursor-pointer"
                                >

                                    {/* ICON BOX */}

                                    <div className="w-14 h-14 rounded-[14px] bg-[#D9D9D9] flex items-center justify-center">

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-8 h-8 text-gray-500"
                                        >

                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                            />

                                        </svg>

                                    </div>

                                    {/* TEXT */}

                                    <div className="flex flex-col items-start">

                                        <h2 className="text-[24px] font-semibold text-white">
                                            My Account
                                        </h2>

                                    </div>

                                </button>

                                {/* POPUP */}

                                {
                                    openAccountMenu && (

                                        <div className="absolute left-0 bottom-15 w-55 bg-white rounded-[22px] shadow-2xl overflow-hidden z-50">

                                            {/* SETTINGS */}

                                            <button onClick={() => router.push("/settings")}
                                                className="w-full h-15 flex items-center gap-4 px-6 border-b border-gray-200 hover:bg-gray-100 transition-all cursor-pointer"
                                            >

                                                {/* ICON */}

                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="w-7 h-7 text-gray-600"
                                                >

                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M10.5 6h3m-7.5 6h12m-9 6h6"
                                                    />

                                                </svg>

                                                <span className="text-[22px] text-gray-700 font-medium">
                                                    Settings
                                                </span>

                                            </button>

                                            {/* LOGOUT */}

                                            <button
                                                onClick={() => {

                                                    localStorage.removeItem("user");

                                                    setUser(null);

                                                    setOpenAccountMenu(false);

                                                    router.push("/");

                                                }}
                                                className="w-full h-15 flex items-center gap-4 px-6 hover:bg-red-50 transition-all cursor-pointer"
                                            >

                                                {/* ICON */}

                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="w-7 h-7 text-red-500"
                                                >

                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3-3l-3-3m3 3l-3 3m3-3H9"
                                                    />

                                                </svg>

                                                <span className="text-[22px] text-red-500 font-medium">
                                                    Logout
                                                </span>

                                            </button>

                                        </div>

                                    )
                                }

                            </div>

                        ) : (

                            <div className="flex flex-col gap-5 mt-10">

                                {/* LOGIN */}

                                <button
                                    onClick={() =>
                                        router.push("/login")
                                    }
                                    className="w-full py-4 rounded-2xl border border-white text-white text-[20px] font-semibold hover:bg-white hover:text-[#191970] transition-all duration-300 cursor-pointer"
                                >

                                    Login

                                </button>

                                {/* SIGNUP */}

                                <button
                                    onClick={() =>
                                        router.push("/signup")
                                    }
                                    className="w-full py-4 rounded-2xl bg-linear-to-r from-cyan-400 to-blue-500 text-white text-[20px] font-semibold shadow-[0_10px_30px_rgba(59,130,246,0.5)] hover:scale-[1.03] transition-all duration-300 cursor-pointer"
                                >

                                    Signup

                                </button>

                            </div>

                        )
                    }

                </div>

            </div>

        </>
    )
}