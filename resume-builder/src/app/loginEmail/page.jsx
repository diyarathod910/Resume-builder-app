"use client";

import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { BASE_URL } from "../config/api";

export default function LoginEmail() {

    const router = useRouter();

    const [email, setEmail] =
        useState("");

    const [password, setPassword] =
        useState("");

    const handleLogin = async () => {

        try {

            const response =
                await axios.post(
                    `${BASE_URL}/email-login`,
                    {
                        email,
                        password
                    }
                );

            console.log(response.data);

            // STORE USER

            localStorage.setItem(
                "user",
                JSON.stringify(response.data.user)
            );

            // REDIRECT

            router.push("/dashboard");

        } catch (error) {

            console.log(error);

            if (
                error.response &&
                error.response.data.message
            ) {

                alert(
                    error.response.data.message
                );

            } else {

                alert("Login failed");

            }

        }

    };

    return (

        <div className="fixed inset-0 bg-black/40 z-50 overflow-y-auto">

            <div className="min-h-screen flex items-center justify-center px-4 py-6">

                <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl bg-white rounded-3xl lg:rounded-[35px] p-6 sm:p-8 lg:px-10 lg:py-10">

                    {/* CLOSE */}
                    <button
                        onClick={() => router.push("/dashboard")}
                        className="absolute top-4 right-5 lg:top-6 lg:right-8 text-3xl lg:text-[40px] text-gray-400 hover:text-black cursor-pointer"
                    >
                        ×
                    </button>

                    {/* HEADING */}
                    <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#1b083d] text-center">
                        Login
                    </h1>

                    {/* EMAIL */}
                    <div className="mt-8 lg:mt-10">

                        <p className="text-lg sm:text-xl lg:text-[22px] font-semibold text-[#1b083d] mb-3 lg:mb-4">
                            Email
                        </p>

                        <input
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full h-13 sm:h-14 lg:h-15 bg-[#f3f3f7] rounded-2xl px-5 lg:px-6 text-base lg:text-[18px] outline-none"
                        />

                    </div>

                    {/* PASSWORD */}
                    <div className="mt-6 lg:mt-10">

                        <p className="text-lg sm:text-xl lg:text-[22px] font-semibold text-[#1b083d] mb-3 lg:mb-4">
                            Password
                        </p>

                        <input
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full h-13 sm:h-14 lg:h-15 bg-[#f3f3f7] rounded-2xl px-5 lg:px-6 text-base lg:text-[18px] outline-none"
                        />

                    </div>

                    {/* LOGIN BUTTON */}
                    <button
                        onClick={handleLogin}
                        className="w-full h-13 sm:h-14 lg:h-15 bg-[#22003f] rounded-2xl text-white text-lg sm:text-xl lg:text-[25px] font-semibold mt-8 lg:mt-12 hover:opacity-90 cursor-pointer"
                    >
                        Login
                    </button>

                    {/* FORGOT PASSWORD */}
                    <p className="text-base sm:text-lg lg:text-[20px] font-semibold text-[#3f3f3f] mt-6 lg:mt-10 cursor-pointer">
                        Forgot password?
                    </p>

                    {/* DIVIDER */}
                    <div className="flex items-center gap-4 lg:gap-6 mt-5">

                        <div className="flex-1 h-px bg-gray-300"></div>

                        <p className="text-base lg:text-[20px] text-gray-500">
                            OR
                        </p>

                        <div className="flex-1 h-px bg-gray-300"></div>

                    </div>

                    {/* GOOGLE LOGIN */}
                    <button
                        className="w-full h-13 sm:h-14 lg:h-15 border border-gray-300 rounded-2xl flex items-center justify-center gap-3 lg:gap-5 text-base sm:text-lg lg:text-[23px] font-medium mt-6 lg:mt-8 hover:shadow-md cursor-pointer"
                    >
                        <FcGoogle className="text-3xl lg:text-[38px]" />

                        Continue with Google
                    </button>

                    {/* SIGNUP */}
                    <p className="text-center text-base sm:text-lg lg:text-[20px] text-gray-700 mt-8 lg:mt-10">

                        Don't have an account?

                        <span
                            onClick={() => router.push("/signup")}
                            className="font-bold text-[#1b083d] ml-2 lg:ml-3 cursor-pointer"
                        >
                            Sign up
                        </span>

                    </p>

                </div>

            </div>

        </div>

    );

}