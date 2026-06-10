"use client"
import Nav from "./components/header/nav";
import { Inter } from "next/font/google";
import Link from "next/link";


import { IoGift } from "react-icons/io5";
import { BsShieldLock } from "react-icons/bs";
import { LuFileCheck } from "react-icons/lu";
import StepsSection from "./components/UI/StepSectionUI";
import TemplateGridUI from "./components/UI/TemplateGridUI";
import RecruitersSection from "./components/UI/RecruiterSectionUI";
import FAQSection from "./components/UI/FAQSectionUI";
import Footer from "./components/UI/FooterUI";

const inter = Inter({
  subsets: ["latin"],
});

export default function Home() {

  return (
    <>
      <div className={inter.className} >
        <div className="w-full flex items-center justify-center flex-col bg-linear-to-br from-[#191970] via-[#312E81] to-[#4338CA] scroll-smooth ">
          <Nav></Nav>
          <section className="w-full flex justify-center mt-24 md:mt-32 lg:mt-[9%] px-4 sm:px-6 lg:px-0">

            {/* MAIN CONTAINER */}
            <div className="w-full lg:w-[90%] flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-[5%] mt-6 lg:mt-[3%]">

              {/* LEFT CONTENT */}
              <div className="w-full lg:w-[50%] flex flex-col gap-6 lg:gap-8 text-center lg:text-left">

                {/* SMALL TITLE */}
                <p className="text-sm sm:text-base md:text-lg lg:text-[20px] font-medium tracking-[1px] text-white uppercase">
                  FREE ONLINE RESUME BUILDER
                </p>

                {/* MAIN HEADING */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-tight lg:leading-23.75 font-black text-white">

                  Build a job-winning resume for free

                </h1>

                {/* DESCRIPTION */}
                <div className="flex flex-col gap-3.5">

                  <p className="text-lg sm:text-xl md:text-2xl lg:text-[26px] text-[#CBD5E1] leading-8 lg:leading-10">
                    Your first resume is 100% free forever.
                  </p>

                  <p className="text-lg sm:text-xl md:text-2xl lg:text-[26px] text-[#CBD5E1] leading-8 lg:leading-10">
                    Unlimited downloads. No hidden fees.
                  </p>

                  <p className="text-lg sm:text-xl md:text-2xl lg:text-[26px] text-[#CBD5E1] leading-8 lg:leading-10">
                    Yes, really 🚀
                  </p>

                </div>

                {/* BUTTON */}
                <div className="pt-2.5">

                  <Link href="/templates">

                    {/* <button className="px-10.5 py-6 rounded-[22px] bg-linear-to-r from-[#2563EB] via-[#3B82F6] to-[#60A5FA] text-white text-[28px] font-bold hover:scale-[1.03] transition-all duration-300 shadow-xl">

                      Get started for free ✨

                    </button> */}
                    {/* LIGHT BLUE PREMIUM GRADIENT */}
                    <button
                      className="bg-linear-to-r from-[#38BDF8] via-[#3B82F6] to-[#6366F1] text-white px-6 sm:px-8 lg:px-10 py-4 lg:py-6 rounded-[26px] text-lg sm:text-xl lg:text-[28px] font-bold shadow-2xl hover:scale-[1.03] transition-all duration-300"
                    >
                      Get started for free ✨
                    </button>

                  </Link>

                </div>

                {/* USERS */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-4 lg:pt-6">

                  {/* IMAGES */}
                  <div className="flex items-center">

                    <img
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      className="w-12 h-12 sm:w-14 sm:h-14 lg:w-17 lg:h-17 rounded-full border-4 border-white object-cover"
                    />

                    <img
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      className="w-12 h-12 sm:w-14 sm:h-14 lg:w-17 lg:h-17 rounded-full border-4 border-white object-cover -ml-4.5"
                    />

                    <img
                      src="https://randomuser.me/api/portraits/women/68.jpg"
                      className="w-12 h-12 sm:w-14 sm:h-14 lg:w-17 lg:h-17 rounded-full border-4 border-white object-cover -ml-4.5"
                    />

                    <img
                      src="https://randomuser.me/api/portraits/women/22.jpg"
                      className="w-12 h-12 sm:w-14 sm:h-14 lg:w-17 lg:h-17 rounded-full border-4 border-white object-cover -ml-4.5"
                    />

                    <img
                      src="https://randomuser.me/api/portraits/men/75.jpg"
                      className="w-12 h-12 sm:w-14 sm:h-14 lg:w-17 lg:h-17 rounded-full border-4 border-white object-cover -ml-4.5"
                    />

                  </div>

                  {/* TEXT */}
                  <p className="text-lg sm:text-xl lg:text-[30px] font-semibold text-[#CBD5E1]">
                    Trusted by 5.3 million users
                  </p>

                </div>

              </div>

              {/* RIGHT SIDE */}
              <div className="w-full lg:w-[45%] relative flex justify-center">

                {/* MAIN RESUME */}
                <div className="w-full max-w-125 lg:w-[85%] bg-white rounded-[28px] overflow-hidden shadow-2xl border border-[#E2E8F0]">

                  <img
                    src="templates/creative.png"
                    alt="resume"
                    className="w-full object-cover"
                  />

                </div>

                {/* FLOATING CARD */}
                <div className="hidden md:flex absolute bottom-20 lg:bottom-35 left-0 lg:-left-10 bg-white shadow-2xl rounded-3xl px-4 lg:px-6 py-3 lg:py-4 items-center gap-3 border border-[#E2E8F0]">
                  <div className="flex flex-col gap-1.5">

                    <h3 className="text-base lg:text-[20px] font-bold text-[#0F172A]">
                      Andrew Irwin
                    </h3>

                    <p className="text-xs lg:text-[14px] text-[#64748B]">
                      Product Manager
                    </p>

                    <div className="flex gap-1 text-[18px]">
                      ⭐⭐⭐⭐⭐
                    </div>

                  </div>

                  <div className="w-13.5 h-13.5 rounded-full bg-[#FF6B5A] flex items-center justify-center text-white text-[36px] font-bold">
                    P
                  </div>

                </div>

                {/* TIKTOK CARD */}
                <div className="hidden lg:block absolute -bottom-15 -left-20 bg-white shadow-2xl rounded-3xl px-6 py-4 border border-[#E2E8F0]">

                  <p className="text-base lg:text-[18px] text-[#0F172A] leading-7 lg:leading-9">
                    Powerful websites I wish I knew earlier:
                    <br />
                    This one is a LIFESAVER 😭
                  </p>

                  <div className="flex items-center justify-between pt-1">

                    <p className="text-base lg:text-[18px] text-[#0F172A] leading-7 lg:leading-9">
                      @maedeh.davami | 1.8 million views
                    </p>

                    <div className="text-[22px]">
                      🎵
                    </div>

                  </div>

                </div>

              </div>

            </div>
          </section>
          <section className="w-full flex justify-center mt-16 md:mt-24 lg:mt-[10%] pb-12 md:pb-16 lg:pb-[5%]">

            <div className="w-[95%] flex flex-col md:flex-row items-center justify-between gap-10 md:gap-6 lg:gap-0 py-6 md:py-8 lg:py-10">

              {/* ITEM 1 */}
              <div className="flex flex-col items-center text-center gap-4 md:gap-5 w-full md:w-[32%]">

                <IoGift
                  size={40}
                  className="text-white md:w-11.25 md:h-11.25 lg:w-12.5 lg:h-12.5"
                />

                <p className="text-lg sm:text-xl md:text-[22px] lg:text-[26px] text-[#CBD5E1] leading-7 md:leading-8 lg:leading-10 w-full sm:w-[70%] lg:w-[60%]">

                  1st Resume, Free Forever

                </p>

              </div>

              {/* ITEM 2 */}
              <div className="flex flex-col items-center text-center gap-4 md:gap-5 w-full md:w-[32%]">

                <BsShieldLock
                  size={40}
                  className="text-white md:w-11.25 md:h-11.25 lg:w-12.5 lg:h-12.5"
                />

                <p className="text-lg sm:text-xl md:text-[22px] lg:text-[26px] text-[#CBD5E1] leading-7 md:leading-8 lg:leading-10 w-full sm:w-[70%] lg:w-[60%]">

                  Privacy & GDPR Compliant

                </p>

              </div>

              {/* ITEM 3 */}
              <div className="flex flex-col items-center text-center gap-4 md:gap-5 w-full md:w-[32%]">

                <LuFileCheck
                  size={40}
                  className="text-white md:w-11.25 md:h-11.25 lg:w-12.5 lg:h-12.5"
                />

                <p className="text-lg sm:text-xl md:text-[22px] lg:text-[26px] text-[#CBD5E1] leading-7 md:leading-8 lg:leading-10 w-full sm:w-[70%] lg:w-[60%]">

                  Professional Templates

                </p>

              </div>

            </div>

          </section>

          <StepsSection></StepsSection>

          <TemplateGridUI></TemplateGridUI>

          <RecruitersSection></RecruitersSection>

          <FAQSection></FAQSection>
          <Footer></Footer>
        </div >

      </div >
    </>
  );
}
