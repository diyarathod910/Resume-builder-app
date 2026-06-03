"use client";

import { useEffect, useState } from "react";
import {
    FileText,
    ShieldCheck,
    FilePenLine,
    Settings,
    User,
    Trash2,
    LogOut,
    Crown
} from "lucide-react";

import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

import DashboardSidebarUI from "../components/UI/DashboardSidebarUI";
import { BASE_URL } from "../config/api";

export default function SettingsPage() {

    const router = useRouter();

    const [user, setUser] = useState(null);

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");



    useEffect(() => {

        const storedUser =
            JSON.parse(
                localStorage.getItem("user")
            );

        if (storedUser) {

            setUser(storedUser);

            setEmail(storedUser.email);

        }

    }, []);




    // UPDATE ACCOUNT

    const handleUpdate = async () => {

        try {

            const response =
                await axios.put(
                    `${BASE_URL}/change-email/${user._id}`,
                    {
                        email,
                        password
                    }
                );

            localStorage.setItem(
                "user",
                JSON.stringify(response.data.user)
            );

            alert("Updated Successfully");

        } catch (error) {

            console.log(error);

        }

    };





    // DELETE ACCOUNT

    const handleDelete = async () => {

        try {

            await axios.delete(
                `${BASE_URL}/delete-account/${user._id}`
            );

            localStorage.removeItem("user");

            router.push("/");

        } catch (error) {

            console.log(error);

        }

    };






    // LOGOUT

    const handleLogout = () => {

        localStorage.removeItem("user");

        router.push("/");

    };






    return (

        <section className="w-full min-h-screen bg-linear-to-br from-[#191970] via-[#312E81] to-[#4338CA] flex">

            {/* SIDEBAR */}

            <DashboardSidebarUI></DashboardSidebarUI>
            {/* RIGHT */}

            <div className="w-[82%] px-16 py-14 overflow-y-auto">

                {/* TITLE */}

                <div className="mb-14">

                    <h1 className="text-white text-[56px] font-extrabold mb-3">
                        Settings
                    </h1>

                    <p className="text-white/60 text-[22px]">
                        Manage your account and preferences.
                    </p>

                </div>








                {/* CARDS */}

                <div className="flex flex-col gap-10 w-[80%]">



                    {/* PLAN */}

                    <div className="w-full rounded-[34px] bg-white/10 backdrop-blur-xl border border-white/10 p-10">

                        <div className="flex items-center gap-5">

                            <div className="w-20 h-20 rounded-3xl bg-cyan-400/20 flex items-center justify-center">

                                <Crown
                                    size={42}
                                    className="text-cyan-300"
                                />

                            </div>





                            <div>

                                <h2 className="text-white text-[34px] font-bold">
                                    Free Plan
                                </h2>

                                <p className="text-white/60 text-[18px] mt-1">
                                    Upgrade to unlock premium templates.
                                </p>

                            </div>

                        </div>





                        <button className="mt-8 px-10 h-15 rounded-2xl bg-linear-to-r from-cyan-400 to-blue-500 text-white text-[18px] font-semibold shadow-[0_10px_30px_rgba(59,130,246,0.45)] hover:scale-[1.03] transition-all cursor-pointer">

                            Upgrade Plan

                        </button>

                    </div>









                    {/* LOGIN SETTINGS */}

                    <div className="w-full rounded-[34px] bg-white/10 backdrop-blur-xl border border-white/10 p-10">

                        <h2 className="text-white text-[34px] font-bold mb-10">
                            Login & Security
                        </h2>





                        {/* EMAIL */}

                        <div className="mb-8">

                            <p className="text-white/50 text-[17px] mb-2">
                                Email Address
                            </p>

                            <h3 className="text-white text-[26px] font-semibold">
                                {user?.email}
                            </h3>

                        </div>





                        {/* INPUTS */}

                        <div className="flex flex-col gap-5">

                            <input
                                type="email"
                                value={email}
                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }
                                placeholder="Enter new email"
                                className="w-full h-17 rounded-2xl bg-white/10 border border-white/10 px-6 text-white text-[18px] outline-none placeholder:text-white/40"
                            />





                            <input
                                type="password"
                                value={password}
                                onChange={(e) =>
                                    setPassword(e.target.value)
                                }
                                placeholder="Enter new password"
                                className="w-full h-17 rounded-2xl bg-white/10 border border-white/10 px-6 text-white text-[18px] outline-none placeholder:text-white/40"
                            />





                            <button
                                onClick={handleUpdate}
                                className="w-full h-17 rounded-2xl bg-linear-to-r from-cyan-400 to-blue-500 text-white text-[20px] font-semibold shadow-[0_10px_30px_rgba(59,130,246,0.45)] hover:scale-[1.01] transition-all cursor-pointer"
                            >

                                Save Changes

                            </button>

                        </div>

                    </div>










                    {/* DELETE */}

                    <div className="w-full rounded-[34px] bg-red-500/10 backdrop-blur-xl border border-red-400/20 p-10">

                        <div className="flex items-center gap-4 mb-4">

                            <Trash2
                                size={34}
                                className="text-red-400"
                            />

                            <h2 className="text-red-300 text-[34px] font-bold">
                                Delete Account
                            </h2>

                        </div>





                        <p className="text-red-200/70 text-[18px] leading-8 ">
                            Permanently delete your account and all associated data.
                        </p>





                        <button
                            onClick={handleDelete}
                            className="mt-8 px-10 h-15 rounded-2xl bg-red-500 text-white text-[18px] font-semibold hover:bg-red-600 transition-all cursor-pointer"
                        >

                            Delete Account

                        </button>

                    </div>

                </div>

            </div>

        </section>

    );

}