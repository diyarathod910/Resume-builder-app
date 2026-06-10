"use client";

import Link from "next/link";
import { FileText, Plus, EllipsisVertical, ShieldCheck, FilePenLine } from "lucide-react";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Menu, X, } from "lucide-react";

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
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <>
            {/* SIDEBAR */}

            <>
                {/* MOBILE MENU BUTTON */}
                <button
                    onClick={() => setSidebarOpen(true)}
                    className="lg:hidden fixed top-5 left-5 z-50 p-3 rounded-xl bg-white shadow-lg"
                >
                    <Menu size={24} />
                </button>

                {/* MOBILE SIDEBAR */}
                {sidebarOpen && (
                    <>
                        {/* BACKDROP */}
                        <div
                            className="fixed inset-0 bg-black/50 z-40"
                            onClick={() => setSidebarOpen(false)}
                        />

                        {/* DRAWER */}
                        <div className="fixed left-0 top-0 w-[280px] h-screen bg-[#191970] z-50 px-6 py-8 flex flex-col justify-between">

                            {/* CLOSE */}
                            <button
                                onClick={() => setSidebarOpen(false)}
                                className="absolute top-5 right-5"
                            >
                                <X className="text-white" />
                            </button>

                            {/* TOP */}
                            <div>

                                {/* LOGO */}
                                <div
                                    className="flex items-center gap-3 mb-16 cursor-pointer"
                                    onClick={() => {
                                        router.push("/");
                                        setSidebarOpen(false);
                                    }}
                                >
                                    <div className="w-11 h-11 rounded-2xl bg-white flex items-center justify-center text-[#191970] font-bold text-xl">
                                        Z
                                    </div>

                                    <h1 className="text-white text-2xl font-bold">
                                        Zety
                                    </h1>
                                </div>

                                {/* MENU */}
                                <div className="flex flex-col gap-4">

                                    <button className="w-full flex items-center gap-3 bg-white text-[#191970] rounded-2xl px-5 py-4 text-base font-semibold shadow-lg">
                                        <FileText size={20} />
                                        Resumes
                                    </button>

                                </div>

                            </div>

                            {/* AUTH */}
                            <div className="flex flex-col gap-5">

                                {user ? (

                                    <>
                                        <button
                                            onClick={() => {
                                                router.push("/settings");
                                                setSidebarOpen(false);
                                            }}
                                            className="w-full py-4 rounded-2xl bg-white text-[#191970] font-semibold"
                                        >
                                            Settings
                                        </button>

                                        <button
                                            onClick={() => {
                                                localStorage.removeItem("user");
                                                setUser(null);
                                                router.push("/");
                                                setSidebarOpen(false);
                                            }}
                                            className="w-full py-4 rounded-2xl bg-red-500 text-white font-semibold"
                                        >
                                            Logout
                                        </button>
                                    </>

                                ) : (

                                    <>
                                        <button
                                            onClick={() => {
                                                router.push("/login");
                                                setSidebarOpen(false);
                                            }}
                                            className="w-full py-4 rounded-2xl border border-white text-white font-semibold"
                                        >
                                            Login
                                        </button>

                                        <button
                                            onClick={() => {
                                                router.push("/signup");
                                                setSidebarOpen(false);
                                            }}
                                            className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold"
                                        >
                                            Signup
                                        </button>
                                    </>

                                )}

                            </div>

                        </div>
                    </>
                )}

                {/* DESKTOP SIDEBAR */}
                <div className="hidden lg:flex w-[280px] min-h-screen bg-white/10 backdrop-blur-xl border-r border-white/10 px-7 py-8 flex-col justify-between">

                    <div>

                        {/* LOGO */}
                        <div
                            className="flex items-center gap-3 mb-16 cursor-pointer"
                            onClick={() => router.push("/")}
                        >
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

                    {/* AUTH */}
                    <div className="flex flex-col gap-6">

                        {user ? (

                            <div className="relative">

                                <button
                                    onClick={() => setOpenAccountMenu(!openAccountMenu)}
                                    className="flex items-center gap-4 cursor-pointer"
                                >
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

                                    <h2 className="text-xl font-semibold text-white">
                                        My Account
                                    </h2>
                                </button>

                                {openAccountMenu && (

                                    <div className="absolute left-0 bottom-16 w-56 bg-white rounded-2xl shadow-2xl overflow-hidden z-50">

                                        <button
                                            onClick={() => router.push("/settings")}
                                            className="w-full px-6 py-4 text-left hover:bg-gray-100"
                                        >
                                            Settings
                                        </button>

                                        <button
                                            onClick={() => {
                                                localStorage.removeItem("user");
                                                setUser(null);
                                                setOpenAccountMenu(false);
                                                router.push("/");
                                            }}
                                            className="w-full px-6 py-4 text-left text-red-500 hover:bg-red-50"
                                        >
                                            Logout
                                        </button>

                                    </div>

                                )}

                            </div>

                        ) : (

                            <div className="flex flex-col gap-5">

                                <button
                                    onClick={() => router.push("/login")}
                                    className="w-full py-4 rounded-2xl border border-white text-white text-[20px] font-semibold hover:bg-white hover:text-[#191970] transition-all"
                                >
                                    Login
                                </button>

                                <button
                                    onClick={() => router.push("/signup")}
                                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-[20px] font-semibold"
                                >
                                    Signup
                                </button>

                            </div>

                        )}

                    </div>

                </div>
            </>

        </>
    )
}