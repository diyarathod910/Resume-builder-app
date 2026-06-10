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
        <div className="hidden lg:block w-64 bg-linear-to-b from-[#191970] via-[#1E1B4B] to-[#0F172A] min-h-screen px-6 py-8 text-white shrink-0">

            {/* LOGO */}
            <Link href="/" className="flex items-center gap-3 mb-10">

                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">

                    <span className="text-[#191970] text-2xl font-bold">
                        Z
                    </span>

                </div>

                <h1 className="text-2xl font-bold">
                    Zety
                </h1>

            </Link>

            <div className="relative">

                {/* LINE */}
                <div className="absolute left-4 top-5 bottom-0 border-l border-dashed border-[#6b7da1]" />

                {steps.map((step, index) => {

                    const stepNumber = index + 1;

                    const isCompleted = currentStep > stepNumber;
                    const isActive = currentStep === stepNumber;

                    return (
                        <div
                            key={index}
                            onClick={() => setStep(stepNumber)}
                            className="flex items-center gap-4 mb-8 cursor-pointer"
                        >

                            {/* CIRCLE */}
                            <div
                                className={`
                            relative z-10
                            w-8 h-8
                            rounded-full
                            flex items-center justify-center
                            text-sm
                            font-semibold
                            border-2
                            transition-all

                            ${isCompleted
                                        ? "bg-white text-[#031b44] border-white"
                                        : isActive
                                            ? "bg-white text-[#191970] border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                                            : "bg-transparent text-white border-[#7184a7]"
                                    }
                        `}
                            >
                                {isCompleted ? "✓" : stepNumber}
                            </div>

                            {/* TEXT */}
                            <p
                                className={`
                            text-base
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