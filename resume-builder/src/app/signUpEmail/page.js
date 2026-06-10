"use client";

import Image from "next/image";
import { FcGoogle } from "react-icons/fc";


import { useState } from "react";
import axios from "axios";

import { auth } from "../firebase/firebase";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { useRouter } from "next/navigation";
import { BASE_URL } from "../config/api";


export default function SignupEmailModal() {

    const router = useRouter();

    const closeModal = () => {

        router.push("/dashboard");

    };

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // EMAIL SIGNUP

    const handleSignup = async () => {

        try {

            const response =
                await axios.post(
                    `${BASE_URL}/email-signup`,
                    {
                        email,
                        password
                    }
                );

            console.log(response.data);


            // STORE USER LOCALLY
            localStorage.setItem(
                "user",
                JSON.stringify(response.data.user)
            );

            router.push("/dashboard");

        } catch (error) {

            console.log(error);


            if (
                error.response &&
                error.response.data.message ===
                "User already exists"
            ) {

                alert("Email already exists");

            } else {

                alert("Something went wrong");

            }
        }

    };

    const handleGoogleSignup = async () => {

        try {

            const provider =
                new GoogleAuthProvider();

            const result =
                await signInWithPopup(
                    auth,
                    provider
                );

            const user = result.user;

            console.log(user);

            // SEND USER TO BACKEND
            const response = await fetch(

                `${BASE_URL}/google-signup`,

                {

                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({

                        name: user.displayName,

                        email: user.email,

                        image: user.photoURL

                    })

                }

            );

            const data = await response.json();

            console.log(data);


            // STORE USER LOCALLY
            localStorage.setItem(
                "user",
                JSON.stringify(data.user)
            );

            router.push("/dashboard");

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="fixed inset-0 bg-black/40 z-50 overflow-y-auto">

            <div className="min-h-screen flex justify-center items-center py-6 px-4">

                <div className="w-full max-w-[600px] bg-white rounded-3xl sm:rounded-4xl px-6 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-10 md:py-14 relative">

                    {/* CLOSE BUTTON */}
                    <button
                        onClick={closeModal}
                        className="absolute top-4 sm:top-6 right-5 sm:right-7 text-3xl sm:text-[40px] text-gray-400 hover:text-[#191970] transition-all cursor-pointer"
                    >
                        ×
                    </button>

                    {/* TITLE */}
                    <h1 className="text-2xl sm:text-3xl md:text-[32px] font-bold text-[#22003D] text-center">
                        Signup with Email
                    </h1>

                    {/* FORM */}
                    <div className="mt-8 sm:mt-10 md:mt-14 flex flex-col gap-6 sm:gap-7">

                        {/* EMAIL */}
                        <div className="flex flex-col gap-3">

                            <label className="text-base sm:text-lg font-semibold text-[#22003D]">
                                Email
                            </label>

                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter email"
                                className="h-14 sm:h-16 md:h-17 bg-[#F3F4F8] rounded-xl px-4 sm:px-5 outline-none text-base sm:text-lg"
                            />

                        </div>

                        {/* PASSWORD */}
                        <div className="flex flex-col gap-3">

                            <label className="text-base sm:text-lg font-semibold text-[#22003D]">
                                Password
                            </label>

                            <input
                                type="password"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="h-14 sm:h-16 md:h-17 bg-[#F3F4F8] rounded-xl px-4 sm:px-5 outline-none text-base sm:text-lg"
                            />

                        </div>

                    </div>

                    {/* BUTTON */}
                    <button
                        onClick={handleSignup}
                        className="w-full h-14 sm:h-16 md:h-17 bg-[#22003D] rounded-2xl text-white text-lg sm:text-xl md:text-2xl font-semibold mt-8 sm:mt-10 cursor-pointer hover:opacity-90 transition-all"
                    >
                        Signup
                    </button>

                    {/* TERMS */}
                    <p className="text-sm sm:text-base text-[#6D7280] leading-6 sm:leading-7 mt-6 sm:mt-8 text-center">

                        By creating an account, you agree to our{" "}

                        <span className="underline cursor-pointer">
                            Terms of Service
                        </span>

                        {" "}and{" "}

                        <span className="underline cursor-pointer">
                            Privacy Policy.
                        </span>

                    </p>

                    {/* OR */}
                    <div className="flex items-center gap-4 sm:gap-5 mt-8 sm:mt-10">

                        <div className="flex-1 h-px bg-[#D9D9D9]" />

                        <span className="text-[#8A8A8A] text-lg sm:text-xl md:text-2xl">
                            OR
                        </span>

                        <div className="flex-1 h-px bg-[#D9D9D9]" />

                    </div>

                    {/* GOOGLE BUTTON */}
                    <button
                        onClick={handleGoogleSignup}
                        className="w-full h-14 sm:h-16 md:h-17 border border-[#BDBDBD] rounded-xl flex items-center justify-center gap-3 sm:gap-5 mt-8 sm:mt-10 cursor-pointer hover:shadow-md transition-all"
                    >

                        <FcGoogle className="text-3xl sm:text-[35px]" />

                        <span className="text-base sm:text-lg md:text-[20px] font-medium text-[#1B1B1B]">
                            Continue with Google
                        </span>

                    </button>

                    {/* LOGIN */}
                    <p className="text-center text-base sm:text-lg md:text-[20px] text-[#5F6368] mt-8 sm:mt-10 md:mt-14">

                        Already have an account?

                        <span
                            onClick={() => router.push("/login")}
                            className="text-[#22003D] font-semibold ml-2 cursor-pointer"
                        >
                            Login
                        </span>

                    </p>

                </div>

            </div>

        </div>

    );

}