
"use client";
import { useState, useEffect } from "react";
import ClassicResumeTemplate from "../components/temp/temp-1";
import ModernTemplate from "../components/temp/ModernTemplate";
import BlueSidebarTemplate from "../components/temp/BlueSidebarTemplate";
import CorporateTemplate from "../components/temp/CorporateTemplate";
import ProfessionalTemplate from "../components/temp/ProfessionalTemplate";
import SimplePrfessionalTemplate from "../components/temp/SimpleProfessionalTemplate";
import ATSFriendlyTemplate from "../components/temp/ATSFriendlyTemplate";
import CreativeTemplate from "../components/temp/CreativeTemplate";
import ModernFancyTemplate from "../components/temp/ModernFancyTemplate";

export default function ResumePrintPage() {

    // const searchParams = useSearchParams();

    // const data =
    //     searchParams.get("data");

    // const resumeData =
    //     data ? JSON.parse(decodeURIComponent(data)) : null;

    const [resumeData, setResumeData] = useState(null);

    useEffect(() => {

        const savedData =
            localStorage.getItem("resumeData");

        if (savedData) {
            setResumeData(JSON.parse(savedData));
        }

    }, []);
    if (!resumeData) return null;

    const templates = {
        classic: ClassicResumeTemplate,
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
        templates[resumeData?.selectedTemplate]
        || ClassicTemplate;


    return (

        <div >

            <SelectedTemplate data={resumeData} />

        </div>
    );
}