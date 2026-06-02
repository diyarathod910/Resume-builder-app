"use client";

import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

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
                    "http://localhost:8080/email-login",
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

            <div className="min-h-screen flex justify-center items-center py-5 ">

                <div className="w-[40%] bg-white rounded-[35px] px-10 py-10 relative">

                    {/* CLOSE */}

                    <button
                        onClick={() => router.push("/dashboard")}
                        className="absolute top-6 right-8 text-[40px] text-gray-400 hover:text-black cursor-pointer"
                    >
                        ×
                    </button>

                    {/* HEADING */}

                    <h1 className="text-[42px] font-bold text-[#1b083d] text-center">

                        Login

                    </h1>

                    {/* EMAIL */}

                    <div className="mt-10">

                        <p className="text-[22px] font-semibold text-[#1b083d] mb-4">

                            Email

                        </p>

                        <input
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                            className="w-full h-15 bg-[#f3f3f7] rounded-[18px] px-6 text-[18px] outline-none"
                        />

                    </div>

                    {/* PASSWORD */}

                    <div className="mt-10">

                        <p className="text-[22px] font-semibold text-[#1b083d] mb-4">

                            Password

                        </p>

                        <input
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                            className="w-full h-15 bg-[#f3f3f7] rounded-[18px] px-6 text-[18px] outline-none"
                        />

                    </div>

                    {/* LOGIN BUTTON */}

                    <button
                        onClick={handleLogin}
                        className="w-full h-15 bg-[#22003f] rounded-[18px] text-white text-[25px] font-semibold mt-12 hover:opacity-90 cursor-pointer"
                    >

                        Login

                    </button>

                    {/* FORGOT */}

                    <p className="text-[20px] font-semibold text-[#3f3f3f] mt-10 cursor-pointer">

                        Forgot password?

                    </p>

                    {/* DIVIDER */}

                    <div className="flex items-center gap-6 mt-5">

                        <div className="flex-1 h-px bg-gray-300"></div>

                        <p className="text-[20px] text-gray-500">

                            OR

                        </p>

                        <div className="flex-1 h-px bg-gray-300"></div>

                    </div>

                    {/* GOOGLE */}

                    <button className="w-full h-15 border border-gray-300 rounded-[18px] flex items-center justify-center gap-5 text-[23px] font-medium mt-8 hover:shadow-md cursor-pointer">

                        <FcGoogle className="text-[38px]" />

                        Continue with Google

                    </button>

                    {/* SIGNUP */}

                    <p className="text-center text-[20px] text-gray-700 mt-10">

                        Don't have an account?

                        <span
                            onClick={() =>
                                router.push("/signup")
                            }
                            className="font-bold text-[#1b083d] ml-3 cursor-pointer"
                        >

                            Sign up

                        </span>

                    </p>

                </div>

            </div>

        </div>

    );

}