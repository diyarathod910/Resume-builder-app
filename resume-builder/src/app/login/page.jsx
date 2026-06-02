"use client";

import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineMail } from "react-icons/md";
import { auth } from "../firebase/firebase";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import axios from "axios";

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
                    "http://localhost:8080/google-signup",
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

        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-999">

            <div className="w-105 bg-white rounded-4xl p-12 relative shadow-2xl">

                {/* Close */}
                <button
                    onClick={closeModal}
                    className="absolute top-5 right-6 text-[34px] text-gray-400 hover:text-black transition-all cursor-pointer"
                >
                    ×
                </button>

                <h1 className="text-[36px] font-bold text-center text-[#191970]">
                    Login
                </h1>

                <div className="flex flex-col gap-5 mt-12">

                    {/* Google */}
                    <button onClick={handleGoogleLogin} className="h-17.5 cursor-pointer border border-gray-300 rounded-2xl flex items-center justify-center gap-4 text-[20px] font-medium hover:bg-gray-50 transition-all">

                        <FcGoogle className="text-[32px]" />

                        Continue with Google

                    </button>

                    {/* Email */}
                    <button onClick={() => router.push("/loginEmail")} className="h-17.5 border border-gray-300 rounded-2xl flex items-center justify-center gap-4 text-[20px] font-medium hover:bg-gray-50 transition-all">

                        <MdOutlineMail className="text-[30px] text-[#191970]" />

                        Login with Email

                    </button>

                </div>

                <p className="text-center text-[18px] text-gray-500 mt-10">

                    Don’t have an account?

                    <span onClick={() => router.push("/signup")} className="text-[#191970] font-semibold ml-2 cursor-pointer">
                        Sign up
                    </span>

                </p>

            </div>

        </div>

    )
}