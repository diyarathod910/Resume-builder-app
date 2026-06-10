
import { templates } from "@/app/Data/templates";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function TemplateGridUI() {
    const router = useRouter();
    return (
        <>
            <section
                id="templates"
                className="w-full py-16 md:py-24 lg:py-30 px-4 sm:px-6 lg:px-[5%] bg-linear-to-b from-[#191970] via-[#24146b] to-[#312E81]"
            >

                {/* HEADING */}
                <div className="w-full flex flex-col items-center gap-4 md:gap-5 mb-12 md:mb-16 lg:mb-20">

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold text-white text-center leading-tight">

                        Choose Your Resume Template

                    </h1>

                    <p className="text-lg sm:text-xl md:text-2xl lg:text-[24px] text-[#CBD5E1] text-center leading-8 lg:leading-10 max-w-4xl">

                        Professional, ATS-friendly, and modern resume templates designed to help you stand out.

                    </p>

                </div>

                {/* TEMPLATE CARDS */}
                <div className="w-full flex flex-wrap justify-center gap-6 lg:gap-10">

                    {templates.map((template) => (

                        <Link
                            key={template.id}
                            href={`/builder?template=${template.id}`}
                            className="w-full sm:w-[80%] md:w-[48%] xl:w-[31%]"
                        >

                            <div className="group w-full bg-white rounded-3xl lg:rounded-[28px] overflow-hidden border border-[#E2E8F0] shadow-[0_10px_40px_rgba(0,0,0,0.15)] hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(59,130,246,0.25)] transition-all duration-500">

                                {/* IMAGE */}
                                <div className="relative w-full overflow-hidden">

                                    <img
                                        src={template.image}
                                        alt={template.name}
                                        className="w-full h-87.5 sm:h-112.5 md:h-125 lg:h-150 object-cover group-hover:scale-[1.04] transition-all duration-500"
                                    />

                                    {/* ATS BADGE */}
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-xs md:text-sm font-semibold text-[#191970] shadow-lg">

                                        ATS Friendly

                                    </div>

                                    {/* USE TEMPLATE BUTTON */}
                                    <div className="absolute bottom-5 left-1/2 -translate-x-1/2">

                                        <button
                                            onClick={(e) => {
                                                e.preventDefault();

                                                localStorage.setItem(
                                                    "selectedTemplate",
                                                    template.id
                                                );

                                                router.push("/builder");
                                            }}
                                            className="whitespace-nowrap bg-linear-to-r from-[#38BDF8] via-[#3B82F6] to-[#6366F1] text-white px-5 md:px-7 py-3 rounded-full text-sm md:text-base font-semibold shadow-[0_10px_40px_rgba(59,130,246,0.45)] hover:scale-[1.05] transition-all duration-300"
                                        >
                                            Use Template
                                        </button>

                                    </div>

                                </div>

                                {/* CONTENT */}
                                <div className="w-full flex flex-col gap-4 p-5 md:p-6">

                                    <h2 className="text-2xl md:text-[28px] font-bold text-[#0F172A] group-hover:text-[#191970] transition-all duration-300">

                                        {template.name}

                                    </h2>

                                    <p className="text-base md:text-[18px] leading-7 text-[#64748B]">

                                        Modern professional resume template with clean layout and recruiter-friendly design.

                                    </p>

                                    <button className="w-fit bg-[#EEF2FF] text-[#191970] px-5 py-3 rounded-full text-sm md:text-[16px] font-semibold hover:bg-[#191970] hover:text-white transition-all duration-300">

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