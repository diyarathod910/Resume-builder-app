"use client";
import Nav from "../components/header/nav";
import Footer from "../components/UI/FooterUI";

export default function AboutSection() {


    return (
        <>
            <Nav></Nav>
            <section className="w-full bg-linear-to-br from-[#191970] via-[#312E81] to-[#4338CA] px-4 sm:px-6 md:px-10 lg:px-[5%] py-20 md:py-24 lg:py-35 flex justify-center">

                {/* MAIN CONTAINER */}
                <div className="w-full lg:w-[80%] flex flex-col gap-16 md:gap-24 lg:gap-30 mt-10 md:mt-[5%]">

                    {/* SECTION 1 */}
                    <div className="w-full flex flex-col gap-6 md:gap-8 lg:gap-10">

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-tight lg:leading-19.5 font-extrabold tracking-tight text-white">

                            Why We Created Zety

                        </h1>

                        <div className="w-full flex flex-col gap-5 md:gap-6 lg:gap-7">

                            <p className="text-base sm:text-lg md:text-xl lg:text-[24px] leading-8 md:leading-10 lg:leading-11.5 text-[#E2E8F0]">

                                Writing a resume shouldn&apos;t be frustrating.
                                Yet most people still use Word or Google Docs,
                                losing hours to formatting issues and design struggles.

                            </p>

                            <p className="text-base sm:text-lg md:text-xl lg:text-[24px] leading-8 md:leading-10 lg:leading-11.5 text-[#E2E8F0]">

                                Meanwhile, free apps and AI have made many everyday tasks easier —
                                so why is resume creation still stuck in the past?

                            </p>

                            <p className="text-base sm:text-lg md:text-xl lg:text-[24px] leading-8 md:leading-10 lg:leading-11.5 text-[#E2E8F0]">

                                That&apos;s why we built
                                <span className="font-bold text-white">
                                    {" "}Zety{" "}
                                </span>
                                — a free, easy-to-use online resume builder.

                            </p>

                            <p className="text-base sm:text-lg md:text-xl lg:text-[24px] leading-8 md:leading-10 lg:leading-11.5 text-[#E2E8F0]">

                                Our goal is to create a fast, intuitive tool that&apos;s actually enjoyable to use.
                                You focus on the content —
                                we handle the structure, layout, and design.

                            </p>

                        </div>

                    </div>

                    {/* SECTION 2 */}
                    <div className="w-full flex flex-col gap-6 md:gap-8 lg:gap-10">

                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-tight lg:leading-19.5 font-extrabold tracking-tight text-white">

                            Built by a Small, Independent Team

                        </h2>

                        <div className="w-full flex flex-col gap-5 md:gap-6 lg:gap-7">

                            <p className="text-base sm:text-lg md:text-xl lg:text-[24px] leading-8 md:leading-10 lg:leading-11.5 text-[#CBD5E1]">

                                We&apos;re not backed by investors or driven by maximizing profits.
                                We&apos;re a small, quality-focused team with a user-first mindset,
                                committed to building the best truly free resume builder for everyone.

                            </p>

                            <div className="w-full flex flex-col gap-4 md:gap-5 mt-2">

                                <div className="flex items-start gap-4">

                                    <div className="w-3 h-3 rounded-full bg-[#38BDF8] mt-3 md:mt-4 shrink-0"></div>

                                    <p className="text-base sm:text-lg md:text-xl lg:text-[24px] leading-8 md:leading-10 lg:leading-11 text-[#E2E8F0]">

                                        No paywalls, no watermarks,
                                        and no surprise charges while downloading resumes.

                                    </p>

                                </div>

                                <div className="flex items-start gap-4">

                                    <div className="w-3 h-3 rounded-full bg-[#818CF8] mt-3 md:mt-4 shrink-0"></div>

                                    <p className="text-base sm:text-lg md:text-xl lg:text-[24px] leading-8 md:leading-10 lg:leading-11 text-[#E2E8F0]">

                                        Your first resume stays free forever with access to all design features.

                                    </p>

                                </div>

                                <div className="flex items-start gap-4">

                                    <div className="w-3 h-3 rounded-full bg-[#60A5FA] mt-3 md:mt-4 shrink-0"></div>

                                    <p className="text-base sm:text-lg md:text-xl lg:text-[24px] leading-8 md:leading-10 lg:leading-11 text-[#E2E8F0]">

                                        You only pay for advanced features like AI tools
                                        or managing multiple resume versions.

                                    </p>

                                </div>

                            </div>

                            <p className="text-base sm:text-lg md:text-xl lg:text-[24px] leading-8 md:leading-10 lg:leading-11.5 text-[#CBD5E1]">

                                We built Zety to support your career success —
                                not to maximize profit.

                            </p>

                        </div>

                    </div>

                    {/* SECTION 3 */}
                    <div className="w-full flex flex-col gap-6 md:gap-8 lg:gap-10">

                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-tight lg:leading-19.5 font-extrabold tracking-tight text-white">

                            Why Zety Is Different

                        </h2>

                        <div className="w-full flex flex-col gap-5 md:gap-6 lg:gap-7">

                            <p className="text-base sm:text-lg md:text-xl lg:text-[24px] leading-8 md:leading-10 lg:leading-11.5 text-[#CBD5E1]">

                                Unlike generic design tools like Canva, Word, or Adobe,
                                Zety is built specifically for resume creation —
                                not presentations, posters, or marketing graphics.

                            </p>

                            <div className="w-full flex flex-col gap-4 md:gap-5">

                                <div className="flex items-start gap-4">

                                    <div className="w-2.5 h-2.5 rounded-full bg-white mt-3 md:mt-4 shrink-0"></div>

                                    <p className="text-base sm:text-lg md:text-xl lg:text-[24px] leading-8 md:leading-10 lg:leading-11 text-[#E2E8F0]">

                                        Structured guidance so you know what to write

                                    </p>

                                </div>

                                <div className="flex items-start gap-4">

                                    <div className="w-2.5 h-2.5 rounded-full bg-white mt-3 md:mt-4 shrink-0"></div>

                                    <p className="text-base sm:text-lg md:text-xl lg:text-[24px] leading-8 md:leading-10 lg:leading-11 text-[#E2E8F0]">

                                        ATS-friendly templates recruiters actually prefer

                                    </p>

                                </div>

                                <div className="flex items-start gap-4">

                                    <div className="w-2.5 h-2.5 rounded-full bg-white mt-3 md:mt-4 shrink-0"></div>

                                    <p className="text-base sm:text-lg md:text-xl lg:text-[24px] leading-8 md:leading-10 lg:leading-11 text-[#E2E8F0]">

                                        Full layout customization without breaking readability

                                    </p>

                                </div>

                                <div className="flex items-start gap-4">

                                    <div className="w-2.5 h-2.5 rounded-full bg-white mt-3 md:mt-4 shrink-0"></div>

                                    <p className="text-base sm:text-lg md:text-xl lg:text-[24px] leading-8 md:leading-10 lg:leading-11 text-[#E2E8F0]">

                                        No design or technical skills required

                                    </p>

                                </div>

                            </div>

                            <p className="text-base sm:text-lg md:text-xl lg:text-[24px] leading-8 md:leading-10 lg:leading-11.5 text-[#CBD5E1]">

                                Unlike many so-called "free" resume tools,
                                we never block downloads,
                                watermark resumes,
                                or push misleading upgrade tactics.

                            </p>

                        </div>

                    </div>

                </div>

            </section>
            <Footer></Footer>
        </>
    )

}