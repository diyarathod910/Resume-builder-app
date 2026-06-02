"use client";

import { FcGoogle } from "react-icons/fc";
import { MdOutlineEmail } from "react-icons/md";
import { useRouter } from "next/navigation";
import { auth } from "../firebase/firebase";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

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

                "http://localhost:8080/google-signup",

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
        <div className="fixed inset-0 bg-black/45 backdrop-blur-[2px] flex justify-center items-center z-50 px-5">

            <div className="w-full max-w-130   bg-white rounded-4xl px-12 py-14 shadow-2xl relative">

                {/* CLOSE BUTTON */}
                <button
                    onClick={closeModal}
                    className="absolute top-6 right-7 text-[40px] text-gray-400 hover:text-[#191970] transition-all cursor-pointer"
                >
                    ×
                </button>

                {/* HEADING */}
                <h1 className="text-[38px] font-bold text-center text-[#191970] leading-none mb-14">
                    Create account
                </h1>

                {/* GOOGLE BUTTON */}
                <button onClick={handleGoogleSignup} className="w-full h-19.5 border border-gray-300 rounded-[18px] flex items-center justify-center gap-5 text-[31px] font-medium hover:border-[#191970] hover:shadow-lg transition-all cursor-pointer">

                    <FcGoogle className="text-[38px]" />

                    <span className="text-[22px] text-black">
                        Continue with Google
                    </span>

                </button>

                {/* EMAIL BUTTON */}
                <button onClick={() => router.push("/signUpEmail")} className="w-full h-19.5 border border-gray-300 rounded-[18px] flex items-center justify-center gap-5 text-[31px] font-medium mt-6 hover:border-[#191970] hover:shadow-lg transition-all cursor-pointer">

                    <MdOutlineEmail className="text-[38px] text-[#191970]" />

                    <span className="text-[22px] text-black">
                        Sign up with Email
                    </span>

                </button>

                {/* TERMS */}
                <p className="text-[18px] text-gray-500 leading-8.5 mt-10 text-center">
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
                <div className="flex justify-center items-center gap-3 mt-12">

                    <p className="text-[22px] text-gray-500">
                        Already have an account?
                    </p>

                    <button
                        onClick={() => router.push("/login")}
                        className="text-[22px] font-bold text-[#191970] hover:underline cursor-pointer"
                    >
                        Login
                    </button>

                </div>

            </div>

        </div>
    );
}