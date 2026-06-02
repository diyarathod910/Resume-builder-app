
import { templates } from "@/app/Data/templates";
import Link from "next/link";

export default function TemplateGridUI() {
    return (
        <>
            <section id="templates" className="w-full py-30 px-[5%] bg-linear-to-b from-[#191970] via-[#24146b] to-[#312E81]">

                {/* HEADING */}
                <div className="w-full flex flex-col items-center gap-4.5 mb-20">

                    <h1 className="text-[64px] font-extrabold text-white text-center leading-18">

                        Choose Your Resume Template

                    </h1>

                    <p className="text-[24px] text-[#CBD5E1] text-center  leading-9.5">

                        Professional, ATS-friendly, and modern resume templates designed to help you stand out.

                    </p>

                </div>

                {/* TEMPLATE CARDS */}
                <div className="w-full flex flex-wrap justify-center gap-9.5">

                    {templates.map((template) => (

                        <Link
                            key={template.id}
                            href={`/builder?template=${template.id}`}
                            className="w-[30%]"
                        >

                            <div className="group w-full bg-white rounded-[28px] overflow-hidden border border-[#E2E8F0] shadow-[0_10px_40px_rgba(0,0,0,0.15)] hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(59,130,246,0.25)] transition-all duration-500">

                                {/* IMAGE CONTAINER */}
                                <div className="relative w-full overflow-hidden">

                                    <img
                                        src={template.image}
                                        alt={template.name}
                                        className="w-full h-135 object-cover group-hover:scale-[1.04] transition-all duration-500"
                                    />

                                    {/* OVERLAY */}
                                    <div className="absolute inset-0 bg-linear-to-t from-[#191970dd] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-7]">

                                        <button className="bg-linear-to-r  from-[#38BDF8] via-[#3B82F6] to-[#6366F1] text-white px-8.5 py-4 rounded-full text-[18px] font-semibold shadow-[0_10px_40px_rgba(59,130,246,0.45)] hover:scale-[1.05] transition-all duration-300 mb-5">

                                            Use Template

                                        </button>

                                    </div>

                                    {/* BADGE */}
                                    <div className="absolute top-4.5 left-4.5 bg-white/90 backdrop-blur-md px-4.5 py-2 rounded-full text-[14px] font-semibold text-[#191970] shadow-lg">

                                        ATS Friendly

                                    </div>

                                </div>

                                {/* CONTENT */}
                                <div className="w-full flex flex-col gap-4 p-6">

                                    <h2 className="text-[28px] leading-9.5 font-bold text-[#0F172A] group-hover:text-[#191970] transition-all duration-300">

                                        {template.name}

                                    </h2>

                                    <p className="text-[18px] leading-7.5 text-[#64748B]">

                                        Modern professional resume template with clean layout and recruiter-friendly design.

                                    </p>

                                    {/* BOTTOM BUTTON */}
                                    <button className="w-fit bg-[#EEF2FF] text-[#191970] px-6 py-3 rounded-full text-[16px] font-semibold hover:bg-[#191970] hover:text-white transition-all duration-300">

                                        Preview Template

                                    </button>

                                </div>

                            </div>

                        </Link>

                    ))}

                </div>

            </section>
        </>
    )
}