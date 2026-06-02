"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

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

export default function BuilderPage() {

    const searchParams = useSearchParams();

    const params = useParams();

    const template =
        searchParams.get("template");

    const [currentStep, setCurrentStep] = useState(1);


    useEffect(() => {

        const fetchResume = async () => {

            try {

                // IF URL HAS ID

                if (!params?.id) return;

                const response =
                    await axios.get(
                        `http://localhost:8080/single-resume/${params.id}`
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

        selectedTemplate:
            template || "classic",

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


    return (
        <div className="flex h-screen overflow-hidden bg-linear-to-br from-[#F8FAFC] to-[#EEF2FF]">

            {/* SIDEBAR */}
            <BuilderSidebar
                currentStep={currentStep}
                setStep={setCurrentStep}
            />
            {/* FORM SECTION */}
            <div className="flex-1 overflow-y-auto px-10 py-12">

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

                {
                    currentStep === 6 && (
                        <FinalizeStep
                            resumeData={resumeData}
                            selectedSections={selectedSections}
                            setSelectedSections={setSelectedSections}
                            handleNext={handleFinalizeNext}
                            resumeId={params?.id}
                        />
                    )
                }

                {
                    typeof currentStep === "string" && (
                        <OptionalSectionRenderer
                            currentStep={currentStep}
                            resumeData={resumeData}
                            setResumeData={setResumeData}
                            handleNext={handleOptionalNext}
                            selectedSections={selectedSections}
                            setSelectedSections={setSelectedSections}
                        />
                    )
                }

            </div>
            {/* LIVE PREVIEW */}
            <div className="w-[45%] overflow-y-auto border-l bg-white p-10">

                <SelectedTemplate
                    data={resumeData}
                />

            </div>

        </div>
    );
}