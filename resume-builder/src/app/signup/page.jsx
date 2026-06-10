"use client";

import { FcGoogle } from "react-icons/fc";
import { MdOutlineEmail } from "react-icons/md";
import { useRouter } from "next/navigation";
import { auth } from "../firebase/firebase";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { BASE_URL } from "../config/api";

export default function SignupModal() {
    const router = useRouter();

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

        } catch (error) {

            console.log(error);

        }

    };

    const closeModal = () => {

        router.push("/dashboard");
    };

    return (
        <div className="fixed inset-0 bg-black/45 backdrop-blur-[2px] flex justify-center items-center z-50 px-4 sm:px-5 py-6 overflow-y-auto">

            <div className="w-full max-w-[520px] bg-white rounded-3xl sm:rounded-4xl px-6 sm:px-8 md:px-12 py-8 sm:py-10 md:py-14 shadow-2xl relative">

                {/* CLOSE BUTTON */}
                <button
                    onClick={closeModal}
                    className="absolute top-4 sm:top-6 right-5 sm:right-7 text-3xl sm:text-[40px] text-gray-400 hover:text-[#191970] transition-all cursor-pointer"
                >
                    ×
                </button>

                {/* HEADING */}
                <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#191970] mb-8 sm:mb-12">
                    Create Account
                </h1>

                {/* GOOGLE BUTTON */}
                <button
                    onClick={handleGoogleSignup}
                    className="w-full h-14 sm:h-16 md:h-18 border border-gray-300 rounded-2xl flex items-center justify-center gap-3 sm:gap-4 hover:border-[#191970] hover:shadow-lg transition-all cursor-pointer"
                >
                    <FcGoogle className="text-3xl sm:text-4xl" />

                    <span className="text-base sm:text-lg md:text-[22px] font-medium text-black">
                        Continue with Google
                    </span>
                </button>

                {/* EMAIL BUTTON */}
                <button
                    onClick={() => router.push("/signUpEmail")}
                    className="w-full h-14 sm:h-16 md:h-18 border border-gray-300 rounded-2xl flex items-center justify-center gap-3 sm:gap-4 mt-4 sm:mt-6 hover:border-[#191970] hover:shadow-lg transition-all cursor-pointer"
                >
                    <MdOutlineEmail className="text-3xl sm:text-4xl text-[#191970]" />

                    <span className="text-base sm:text-lg md:text-[22px] font-medium text-black">
                        Sign up with Email
                    </span>
                </button>

                {/* TERMS */}
                <p className="text-sm sm:text-base md:text-[18px] text-gray-500 leading-6 sm:leading-7 mt-6 sm:mt-8 text-center">
                    By creating an account, you agree to our

                    <span className="text-[#191970] font-medium cursor-pointer hover:underline">
                        {" "}Terms of Service
                    </span>

                    {" "}and

                    <span className="text-[#191970] font-medium cursor-pointer hover:underline">
                        {" "}Privacy Policy
                    </span>
                </p>

                {/* LOGIN SWITCH */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-3 mt-8 sm:mt-10">

                    <p className="text-base sm:text-lg md:text-[20px] text-gray-500">
                        Already have an account?
                    </p>

                    <button
                        onClick={() => router.push("/login")}
                        className="text-base sm:text-lg md:text-[20px] font-bold text-[#191970] hover:underline cursor-pointer"
                    >
                        Login
                    </button>

                </div>

            </div>

        </div>
    );
}