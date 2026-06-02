import Link from "next/link"
export default function Footer() {
    return (
        <>
            <footer className="w-full bg-[#180028] px-[8%] py-22.5">

                <div className="w-full flex justify-between gap-[8%] flex-wrap">

                    {/* LEFT SIDE */}
                    <div className="w-[40%] flex flex-col gap-10">

                        {/* LOGO */}

                        <Link href="/" className="flex items-center gap-3.5 ">

                            <div className="w-14.5 h-14 rounded-2xl bg-[#191970] flex items-center justify-center">

                                <span className="text-white text-[26px] font-bold">
                                    Z
                                </span>

                            </div>

                            <h1 className="text-[28px] font-bold text-[#F5F5F5]">
                                Zety
                            </h1>

                        </Link>


                        {/* DESCRIPTION */}
                        <p className="text-[#F5F5F5] text-[18px] leading-10 font-medium">

                            We are indie developers based in Austria – Mozart,
                            not kangaroos. Our mission: Empower job seekers worldwide.
                            We are here to make your journey smoother, more enjoyable
                            and ultimately more successful.

                        </p>

                        {/* SOCIALS */}
                        <div className="flex items-center gap-6.5 flex-wrap">

                            <h2 className="text-white text-[22px] font-semibold">
                                Tell your friends about us
                            </h2>

                            <div className="flex items-center gap-6">

                                <i className="fa-solid fa-envelope text-white text-[28px] hover:text-[#60A5FA] transition-all duration-300 cursor-pointer"></i>

                                <i className="fa-brands fa-linkedin text-white text-[28px] hover:text-[#60A5FA] transition-all duration-300 cursor-pointer"></i>

                                <i className="fa-brands fa-telegram text-white text-[28px] hover:text-[#60A5FA] transition-all duration-300 cursor-pointer"></i>

                                <i className="fa-brands fa-facebook text-white text-[28px] hover:text-[#60A5FA] transition-all duration-300 cursor-pointer"></i>

                                <i className="fa-brands fa-whatsapp text-white text-[28px] hover:text-[#60A5FA] transition-all duration-300 cursor-pointer"></i>

                                <i className="fa-brands fa-x-twitter text-white text-[28px] hover:text-[#60A5FA] transition-all duration-300 cursor-pointer"></i>

                                <i className="fa-brands fa-reddit text-white text-[28px] hover:text-[#60A5FA] transition-all duration-300 cursor-pointer"></i>

                            </div>

                        </div>

                        {/* COPYRIGHT */}
                        <p className="text-[#E2E8F0] text-[18px] mt-2.5">
                            © 2026 Your Resume Builder
                        </p>

                    </div>

                    {/* RIGHT SIDE */}
                    <div className="w-[45%] flex justify-between gap-20">

                        {/* PRODUCT */}
                        <div className="flex flex-col gap-7">

                            <h1 className="text-white text-[28px] font-bold">
                                PRODUCT
                            </h1>

                            <div className="flex flex-col gap-5.5">

                                <p className="text-[#F1F5F9] text-[22px] hover:text-[#60A5FA] transition-all duration-300 cursor-pointer">
                                    Resume Templates
                                </p>

                                <p className="text-[#F1F5F9] text-[22px] hover:text-[#60A5FA] transition-all duration-300 cursor-pointer">
                                    Resume Builder
                                </p>

                                <p className="text-[#F1F5F9] text-[22px] hover:text-[#60A5FA] transition-all duration-300 cursor-pointer">
                                    PDF Download
                                </p>

                                <p className="text-[#F1F5F9] text-[22px] hover:text-[#60A5FA] transition-all duration-300 cursor-pointer">
                                    ATS Friendly Resume
                                </p>

                                <p className="text-[#F1F5F9] text-[22px] hover:text-[#60A5FA] transition-all duration-300 cursor-pointer">
                                    Live Preview
                                </p>

                            </div>

                        </div>

                        {/* COMPANY */}
                        <div className="flex flex-col gap-7">

                            <h1 className="text-white text-[28px] font-bold">
                                COMPANY
                            </h1>

                            <div className="flex flex-col gap-5.5">

                                <p className="text-[#F1F5F9] text-[22px] hover:text-[#60A5FA] transition-all duration-300 cursor-pointer">
                                    About
                                </p>

                                <p className="text-[#F1F5F9] text-[22px] hover:text-[#60A5FA] transition-all duration-300 cursor-pointer">
                                    Pricing
                                </p>

                                <p className="text-[#F1F5F9] text-[22px] hover:text-[#60A5FA] transition-all duration-300 cursor-pointer">
                                    Contact
                                </p>

                                <p className="text-[#F1F5F9] text-[22px] hover:text-[#60A5FA] transition-all duration-300 cursor-pointer">
                                    Terms of Service
                                </p>

                                <p className="text-[#F1F5F9] text-[22px] hover:text-[#60A5FA] transition-all duration-300 cursor-pointer">
                                    Privacy Policy
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </footer>
        </>
    )
}