"use client";

import { useState, useEffect } from "react";


import { useParams } from "next/navigation";

import axios from "axios";

import BuilderSidebar from "../components/builder/BuilderSidebar";

import PersonalInfoStep from "../components/steps/PersonalInfoStep";
import ExperienceStep from "../components/steps/ExperienceStep";
import EducationStep from "../components/steps/EducationStep";
import SkillsStep from "../components/steps/SkillsStep";
import SummaryStep from "../components/steps/SummaryStep";
import FinalizeStep from "../components/steps/FinalizeStep";
import OptionalSectionRenderer from "../components/steps/OptionalSectionRenderer";


import ClassicTemplate from "../components/temp/temp-1";
import ModernTemplate from "../components/temp/ModernTemplate";
import BlueSidebarTemplate from "../components/temp/BlueSidebarTemplate";
import CorporateTemplate from "../components/temp/CorporateTemplate";
import ProfessionalTemplate from "../components/temp/ProfessionalTemplate";
import SimplePrfessionalTemplate from "../components/temp/SimpleProfessionalTemplate";
import ATSFriendlyTemplate from "../components/temp/ATSFriendlyTemplate";
import CreativeTemplate from "../components/temp/CreativeTemplate";
import ModernFancyTemplate from "../components/temp/ModernFancyTemplate";

import { BASE_URL } from "../config/api";

export default function BuilderPage() {



    const params = useParams();
    const [currentStep, setCurrentStep] = useState(1);

    const [showPreview, setShowPreview] = useState(false);


    useEffect(() => {

        const fetchResume = async () => {

            try {

                // IF URL HAS ID

                if (!params?.id) return;

                const response =
                    await axios.get(
                        `${BASE_URL}/single-resume/${params.id}`
                    );

                if (response.data.success) {

                    setResumeData(
                        response.data.resume.resumeData
                    );

                }

            } catch (error) {

                console.log(error);

            }

        };

        fetchResume();

    }, [params]);
    useEffect(() => {

        if (!params?.id) {

            const savedTemplate =
                localStorage.getItem("selectedTemplate");

            if (savedTemplate) {

                setResumeData(prev => ({

                    ...prev,

                    selectedTemplate: savedTemplate

                }));

            }

        }

    }, [params?.id]);
    const defaultResumeData = {

        name: "Jane Anderson",

        profession: "Buisness Analyst",

        email: "jane@example.com",

        phone: "+555555555",

        location: "Detroit, MI",

        summary:
            "Experienced cashier with 5 years in retail.",

        experience: [
            {
                title: "Cashier",

                startMonth: "Jan",

                startYear: "2023",

                endMonth: "Dec",

                endYear: "2023",

                company: "Greenpost Supermarket",

                location: "delhi",

                points: [
                    "Processed transactions quickly.",
                    "Managed daily cash drawer.",
                    "Handle whole company's accounting."
                ],
            },
        ],

        skills: [
            "Customer service",
            "Cash handling",
            "Sales techniques",
        ],

        education: [
            {
                degree: "Master Administration",

                graduationMonth: "apr",

                graduationYear: "2027",

                school: "University of Illinois",
            },
        ],

        certifications: [],

        languages: [],

        personalDetails: {

            nationality: "",

            maritalStatus: "",

            dob: "",

            gender: ""

        },

        links: [],

        selectedSections: [],

        selectedTemplate: "classic",
    };


    const [resumeData, setResumeData] = useState(defaultResumeData);

    const templates = {
        classic: ClassicTemplate,
        modern: ModernTemplate,
        blueSidebar: BlueSidebarTemplate,
        corporate: CorporateTemplate,
        professional: ProfessionalTemplate,
        simple: SimplePrfessionalTemplate,
        ats: ATSFriendlyTemplate,
        creative: CreativeTemplate,
        fency: ModernFancyTemplate
    };


    const SelectedTemplate =
        templates[
        resumeData?.selectedTemplate
        ] || ClassicTemplate;

    const [selectedSections, setSelectedSections] = useState([]);

    // const [optionalStepIndex, setOptionalStepIndex] = useState(0);
    const optionalSteps = selectedSections;
    const handleFinalizeNext = () => {

        if (optionalSteps.length > 0) {

            setCurrentStep(optionalSteps[0]);

        }

    };
    const handleOptionalNext = () => {

        setCurrentStep(6);
    };

    const steps = [
        "Personal Info",
        "Experience",
        "Education",
        "Skills",
        "Summary",
        "Finalize"
    ];


    return (
        <div className="flex min-h-screen bg-linear-to-br from-[#F8FAFC] to-[#EEF2FF]">

            {/* Desktop Sidebar */}
            <div className="hidden xl:block">
                <BuilderSidebar
                    currentStep={currentStep}
                    setStep={setCurrentStep}
                />
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col lg:flex-row">

                {/* Mobile Progress Header */}
                <div className="xl:hidden sticky top-0 z-40 bg-white border-b px-4 py-4">

                    <div className="flex justify-between items-center mb-3">

                        <div>
                            <p className="text-xs text-gray-500">
                                Step {currentStep} of 6
                            </p>

                            <h3 className="text-base font-semibold text-[#191970]">
                                {typeof currentStep === "number"
                                    ? steps[currentStep - 1]
                                    : currentStep}
                            </h3>
                        </div>

                        <div className="bg-[#191970] text-white px-3 py-1 rounded-full text-sm">
                            {typeof currentStep === "number"
                                ? Math.round((currentStep / 6) * 100)
                                : 100}
                            %
                        </div>

                    </div>

                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">

                        <div
                            className="h-full bg-linear-to-r from-cyan-400 to-blue-500 transition-all duration-500"
                            style={{
                                width:
                                    typeof currentStep === "number"
                                        ? `${(currentStep / 6) * 100}%`
                                        : "100%",
                            }}
                        />

                    </div>

                </div>

                {/* Form Section */}
                <div className="flex-1 px-4 sm:px-6 md:px-8 lg:px-10 py-6 overflow-y-auto h-screen">

                    {currentStep === 1 && (
                        <PersonalInfoStep
                            resumeData={resumeData}
                            setResumeData={setResumeData}
                            setCurrentStep={setCurrentStep}
                        />
                    )}

                    {currentStep === 2 && (
                        <ExperienceStep
                            resumeData={resumeData}
                            setResumeData={setResumeData}
                            setCurrentStep={setCurrentStep}
                        />
                    )}

                    {currentStep === 3 && (
                        <EducationStep
                            resumeData={resumeData}
                            setResumeData={setResumeData}
                            setCurrentStep={setCurrentStep}
                        />
                    )}

                    {currentStep === 4 && (
                        <SkillsStep
                            resumeData={resumeData}
                            setResumeData={setResumeData}
                            setCurrentStep={setCurrentStep}
                        />
                    )}

                    {currentStep === 5 && (
                        <SummaryStep
                            resumeData={resumeData}
                            setResumeData={setResumeData}
                            setCurrentStep={setCurrentStep}
                        />
                    )}

                    {currentStep === 6 && (
                        <FinalizeStep
                            resumeData={resumeData}
                            selectedSections={selectedSections}
                            setSelectedSections={setSelectedSections}
                            handleNext={handleFinalizeNext}
                            resumeId={params?.id}
                        />
                    )}

                    {typeof currentStep === "string" && (
                        <OptionalSectionRenderer
                            currentStep={currentStep}
                            resumeData={resumeData}
                            setResumeData={setResumeData}
                            handleNext={handleOptionalNext}
                            selectedSections={selectedSections}
                            setSelectedSections={setSelectedSections}
                        />
                    )}

                </div>

                {/* Desktop Preview */}
                <div className="hidden lg:block w-[50%] border-l bg-white p-5 overflow-y-auto">
                    <SelectedTemplate data={resumeData} />
                </div>

                {/* Mobile Preview Button */}
                <button
                    onClick={() => setShowPreview(true)}
                    className="lg:hidden fixed bottom-5 right-5 bg-[#191970] text-white px-5 py-3 rounded-xl shadow-xl z-50"
                >
                    Preview Resume
                </button>

                {/* Mobile Preview Modal */}
                {showPreview && (
                    <div className="lg:hidden fixed inset-0 z-50 bg-black/60">

                        <div className="w-full h-full bg-white overflow-y-auto">

                            <button
                                onClick={() => setShowPreview(false)}
                                className="fixed top-4 right-4 bg-[#191970] text-white px-4 py-2 rounded-lg z-50"
                            >
                                Close
                            </button>

                            <div className="p-4 pt-20">
                                <SelectedTemplate data={resumeData} />
                            </div>

                        </div>

                    </div>
                )}

            </div>

        </div>
    );
}