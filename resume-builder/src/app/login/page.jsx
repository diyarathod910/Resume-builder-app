"use client";

import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineMail } from "react-icons/md";
import { auth } from "../firebase/firebase";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import axios from "axios";
import { BASE_URL } from "../config/api";

export default function LoginModal() {

    const router = useRouter();

    const closeModal = () => {

        router.push("/dashboard");
    };

    const handleGoogleLogin = async () => {

        try {

            const provider =
                new GoogleAuthProvider();

            const result =
                await signInWithPopup(
                    auth,
                    provider
                );

            const googleUser =
                result.user;

            // SEND TO BACKEND

            const response =
                await axios.post(
                    `${BASE_URL}/google-signup`,
                    {
                        name: googleUser.displayName,

                        email: googleUser.email,

                        image: googleUser.photoURL
                    }
                );

            // STORE USER

            localStorage.setItem(
                "user",
                JSON.stringify(response.data.user)
            );

            // REDIRECT

            router.push("/dashboard");

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4 py-6 z-[999]">

            <div className="relative w-full max-w-md lg:max-w-[420px] bg-white rounded-3xl lg:rounded-4xl p-6 sm:p-8 lg:p-12 shadow-2xl">

                {/* CLOSE BUTTON */}
                <button
                    onClick={closeModal}
                    aria-label="Close login modal"
                    className="absolute top-4 right-5 text-3xl text-gray-400 hover:text-black transition-all cursor-pointer"
                >
                    ×
                </button>

                {/* TITLE */}
                <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-center text-[#191970]">
                    Login
                </h1>

                {/* BUTTONS */}
                <div className="flex flex-col gap-4 sm:gap-5 mt-8 sm:mt-10 lg:mt-12">

                    {/* GOOGLE LOGIN */}
                    <button
                        onClick={handleGoogleLogin}
                        className="h-14 sm:h-16 lg:h-[70px] border border-gray-300 rounded-2xl flex items-center justify-center gap-3 sm:gap-4 text-base sm:text-lg lg:text-[20px] font-medium hover:bg-gray-50 transition-all cursor-pointer"
                    >
                        <FcGoogle className="text-[28px] sm:text-[30px] lg:text-[32px]" />

                        Continue with Google
                    </button>

                    {/* EMAIL LOGIN */}
                    <button
                        onClick={() => router.push("/loginEmail")}
                        className="h-14 sm:h-16 lg:h-[70px] border border-gray-300 rounded-2xl flex items-center justify-center gap-3 sm:gap-4 text-base sm:text-lg lg:text-[20px] font-medium hover:bg-gray-50 transition-all cursor-pointer"
                    >
                        <MdOutlineMail className="text-[26px] sm:text-[28px] lg:text-[30px] text-[#191970]" />

                        Login with Email
                    </button>

                </div>

                {/* FOOTER */}
                <p className="text-center text-sm sm:text-base lg:text-[18px] text-gray-500 mt-8 sm:mt-10">

                    Don't have an account?

                    <span
                        onClick={() => router.push("/signup")}
                        className="text-[#191970] font-semibold ml-2 cursor-pointer hover:underline"
                    >
                        Sign up
                    </span>

                </p>

            </div>

        </div>

    )
}