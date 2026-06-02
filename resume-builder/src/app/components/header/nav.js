"use client";

import { Button } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Nav() {

    const router = useRouter();
    const [isScrolled, setIsScrolled] = useState(false);
    const [user, setUser] = useState(null);

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

        <header className={`w-full fixed top-0 left-0 z-50 flex justify-center transition-all duration-300 ${isScrolled ? "py-3.5  " : "py-6 bg-transparent"}`}>

            {/* NAVBAR */}
            <div className={`w-[95%] flex items-center justify-between rounded-3xl px-6 py-4.5 transition-all duration-300 ${isScrolled ? "bg-white" : "bg-[#ffffffd9] backdrop-blur-md"}`}>

                {/* LOGO */}
                <Link href="/" className="flex items-center gap-3.5 w-[20%]">

                    <div className="w-14.5 h-14 rounded-2xl bg-[#191970] flex items-center justify-center">

                        <span className="text-white text-[26px] font-bold">
                            Z
                        </span>

                    </div>

                    <h1 className="text-[28px] font-bold text-[#191970]">
                        Zety
                    </h1>

                </Link>

                {/* MENUS */}
                <nav className="flex items-center gap-15">

                    <Link href="/" className="text-[20px] font-medium text-gray-500 hover:text-[#191970] transition-all">
                        Resume Builder
                    </Link>

                    <button onClick={() => {
                        document.getElementById("templates")
                            ?.scrollIntoView({
                                behavior: "smooth"
                            });
                    }} className="text-[20px] font-medium text-gray-500 hover:text-[#191970] transition-all cursor-pointer">
                        Resume Templates
                    </button>

                    <Link href="/pricing" className="text-[20px] font-medium text-gray-500 hover:text-[#191970] transition-all">
                        Pricing
                    </Link>

                    <Link href="/about" className="text-[20px] font-medium text-gray-500 hover:text-[#191970] transition-all">
                        About
                    </Link>

                </nav>

                {/* BUTTONS */}
                <div className="flex items-center  gap-4 w-[25%]">

                    {
                        !user && (

                            <button onClick={() => router.push("/login")} className="px-8.5 py-4 rounded-[18px] border-2 border-[#191970] text-[#191970] text-[20px] font-semibold hover:bg-[#191970] hover:text-white transition-all cursor-pointer">
                                Login
                            </button>

                        )
                    }



                    <button onClick={() => router.push("/dashboard")} className="px-8.5 py-4 rounded-[18px] bg-[#191970] text-white text-[20px] font-semibold hover:scale-[1.03] transition-all cursor-pointer">
                        My Account
                    </button>

                </div>

            </div>

        </header>

    );
}