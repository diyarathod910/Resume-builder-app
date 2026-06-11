"use client";

import { Button } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";


export default function Nav() {

    const router = useRouter();
    const [isScrolled, setIsScrolled] = useState(false);
    const [user, setUser] = useState(null);
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {

        const handleScroll = () => {

            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);




    }, []);
    useEffect(() => {

        const storedUser =
            JSON.parse(localStorage.getItem("user"));

        if (storedUser) {
            setUser(storedUser);
        }

    }, []);


    return (

        <header
            className={`w-full max-w-full rounded-3xl fixed top-0 left-0 z-50 flex justify-center transition-all px-4 md:px-6 py-4 duration-300 ${isScrolled ? "py-3" : "py-5"
                }`}
        >
            <div
                className={`w-[95%] rounded-3xl transition-all duration-300 ${isScrolled
                    ? "bg-white shadow-lg"
                    : "bg-[#ffffffd9] backdrop-blur-md"
                    }`}
            >
                {/* TOP NAVBAR ROW */}
                <div className="w-full flex items-center justify-between px-4 md:px-6 py-4">

                    {/* LOGO */}
                    <Link href="/" className="flex items-center gap-3 shrink-0">
                        <div className="w-11 h-11 md:w-14 md:h-14 rounded-2xl bg-[#191970] flex items-center justify-center">
                            <span className="text-white text-xl md:text-[26px] font-bold">
                                Z
                            </span>
                        </div>

                        <h1 className="text-xl md:text-[28px] font-bold text-[#191970]">
                            Zety
                        </h1>
                    </Link>

                    {/* DESKTOP NAVIGATION */}
                    <nav className="hidden lg:flex items-center gap-8 xl:gap-15">

                        <Link
                            href="/"
                            className="text-base xl:text-[20px] font-medium text-gray-500 hover:text-[#191970] transition-all"
                        >
                            Resume Builder
                        </Link>

                        <Link
                            href="/templates"
                            className="text-base xl:text-[20px] font-medium text-gray-500 hover:text-[#191970] transition-all cursor-pointer "
                        >
                            Resume Templates
                        </Link>

                        <Link
                            href="/pricing"
                            className="text-base xl:text-[20px] font-medium text-gray-500 hover:text-[#191970] transition-all"
                        >
                            Pricing
                        </Link>

                        <Link
                            href="/about"
                            className="text-base xl:text-[20px] font-medium text-gray-500 hover:text-[#191970] transition-all"
                        >
                            About
                        </Link>

                    </nav>

                    {/* DESKTOP BUTTONS */}
                    <div className="hidden lg:flex items-center gap-4">

                        {!user && (
                            <button
                                onClick={() => router.push("/login")}
                                className="px-6 xl:px-8 py-3 xl:py-4 rounded-[18px] border-2 border-[#191970] text-[#191970] text-base xl:text-[20px] font-semibold hover:bg-[#191970] hover:text-white transition-all cursor-pointer"
                            >
                                Login
                            </button>
                        )}

                        <button
                            onClick={() => router.push("/dashboard")}
                            className="px-6 xl:px-8 py-3 xl:py-4 rounded-[18px] bg-[#191970] text-white text-base xl:text-[20px] font-semibold hover:scale-[1.03] transition-all cursor-pointer"
                        >
                            My Account
                        </button>

                    </div>

                    {/* MOBILE MENU BUTTON */}
                    <button
                        onClick={() => setMobileMenu(!mobileMenu)}
                        className="lg:hidden text-[#191970] shrink-0"
                    >
                        {mobileMenu ? (
                            <X size={30} />
                        ) : (
                            <Menu size={30} />
                        )}
                    </button>

                </div>

                {/* MOBILE MENU */}
                {mobileMenu && (
                    <div className="lg:hidden border-t border-gray-200 w-full">

                        <div className="flex flex-col px-6 py-6 gap-5">

                            <Link
                                href="/"
                                onClick={() => setMobileMenu(false)}
                                className="text-lg font-medium text-gray-700"
                            >
                                Resume Builder
                            </Link>

                            <button
                                onClick={() => {
                                    document
                                        .getElementById("templates")
                                        ?.scrollIntoView({
                                            behavior: "smooth",
                                        });

                                    setMobileMenu(false);
                                }}
                                className="text-left text-lg font-medium text-gray-700"
                            >
                                Resume Templates
                            </button>

                            <Link
                                href="/pricing"
                                onClick={() => setMobileMenu(false)}
                                className="text-lg font-medium text-gray-700"
                            >
                                Pricing
                            </Link>

                            <Link
                                href="/about"
                                onClick={() => setMobileMenu(false)}
                                className="text-lg font-medium text-gray-700"
                            >
                                About
                            </Link>

                            <div className="flex flex-col gap-3 pt-3">

                                {!user && (
                                    <button
                                        onClick={() => {
                                            router.push("/login");
                                            setMobileMenu(false);
                                        }}
                                        className="w-full py-3 rounded-xl border-2 border-[#191970] text-[#191970] font-semibold"
                                    >
                                        Login
                                    </button>
                                )}

                                <button
                                    onClick={() => {
                                        router.push("/dashboard");
                                        setMobileMenu(false);
                                    }}
                                    className="w-full py-3 rounded-xl bg-[#191970] text-white font-semibold"
                                >
                                    My Account
                                </button>

                            </div>

                        </div>

                    </div>
                )}
            </div>
        </header>

    );
}