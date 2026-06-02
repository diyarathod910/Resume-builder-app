"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function BuilderSidebar({
    currentStep,
    setStep,
}) {
    const router = useRouter();
    const steps = [
        "Heading",
        "Work history",
        "Education",
        "Skills",
        "Summary",
        "Finalize",

    ];

    return (
        <div className="w-57.5 bg-linear-to-b from-[#191970] via-[#1E1B4B] to-[#0F172A] min-h-screen px-7 py-10 text-white">

            {/* LOGO */}
            <Link href="/" className="flex items-center gap-3.5 mb-[5%]">

                <div className="w-14.5 h-14 rounded-2xl bg-white flex items-center justify-center">

                    <span className="text-[#191970] text-[26px] font-bold">
                        Z
                    </span>

                </div>

                <h1 className="text-[28px] font-bold text-white">
                    Zety
                </h1>

            </Link>
            <div className="relative ">

                {/* LINE */}
                <div className="absolute left-4.5 top-5 bottom-0 border-l border-dashed border-[#6b7da1]" />

                {steps.map((step, index) => {

                    const stepNumber = index + 1;

                    const isCompleted =
                        currentStep > stepNumber;

                    const isActive =
                        currentStep === stepNumber;

                    return (
                        <div
                            key={index}
                            className="flex items-center gap-4 mb-9 mt-10 cursor-pointer"
                            onClick={() => setStep(stepNumber)}
                        >

                            {/* CIRCLE */}
                            <div
                                className={`
                                    relative z-10
                                    w-9 h-9
                                    rounded-full
                                    flex items-center justify-center
                                    text-[18px]
                                    font-semibold
                                    border-2
                                    transition-all
                                    

                                    ${isCompleted
                                        ? "bg-white text-[#031b44] border-white"
                                        : isActive
                                            ? "bg-white text-[#191970] shadow-[0_0_25px_rgba(255,255,255,0.35)]"
                                            : "bg-transparent text-white border-[#7184a7]"
                                    }
                                `}
                            >
                                {isCompleted ? "✓" : stepNumber}
                            </div>

                            {/* TEXT */}
                            <p
                                className={`
                                    text-[17px]
                                    ${isCompleted || isActive
                                        ? "text-white font-semibold"
                                        : "text-[#d9e3f4]"
                                    }
                                `}
                            >
                                {step}
                            </p>

                        </div>
                    );
                })}
            </div>
        </div>
    );
}