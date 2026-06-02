// import CertificationStep from "./CertificationStep";
// import LinksStep from "./LinkStep";
// import PersonalDetailsStep from "./PersonalDetailsStep";
// import AdditionalInfoStep from "./AdditionalInfoStep";

// export default function OptionalSectionRenderer({
//     currentStep,
//     resumeData,
//     setResumeData,
//     handleNext,
// }) {

//     switch (currentStep) {

//         case "certifications":
//             return (
//                 <CertificationStep
//                     resumeData={resumeData}
//                     setResumeData={setResumeData}
//                     handleNext={handleNext}
//                 />
//             );

//         case "links":
//             return (
//                 <LinksStep
//                     resumeData={resumeData}
//                     setResumeData={setResumeData}
//                     handleNext={handleNext}
//                 />
//             );

//         case "personalInfo":
//             return (
//                 <PersonalDetailsStep
//                     resumeData={resumeData}
//                     setResumeData={setResumeData}
//                     handleNext={handleNext}
//                 />
//             );

//         case "additionalInfo":
//             return (
//                 <AdditionalInfoStep
//                     resumeData={resumeData}
//                     setResumeData={setResumeData}
//                     handleNext={handleNext}
//                 />
//             );

//         default:
//             return <div>No Section</div>;
//     }
// }
import CertificationStep from "./CertificationStep";
import LinksStep from "./LinkStep";
import PersonalDetailsStep from "./PersonalDetailsStep";
import AdditionalInfoStep from "./AdditionalInfoStep";
import LanguageStep from "./LanguageStep";

export default function OptionalSectionRenderer({
    currentStep,
    resumeData,
    setResumeData,
    handleNext,
    selectedSections,
    setSelectedSections,
}) {

    console.log("CURRENT STEP:", currentStep);

    switch (currentStep) {

        case "certifications":
            return (
                <CertificationStep
                    resumeData={resumeData}
                    setResumeData={setResumeData}
                    handleNext={handleNext}
                    selectedSections={selectedSections}
                    setSelectedSections={setSelectedSections}
                />
            );

        case "links":
            return (
                <LinksStep
                    resumeData={resumeData}
                    setResumeData={setResumeData}
                    handleNext={handleNext}
                    selectedSections={selectedSections}
                    setSelectedSections={setSelectedSections}
                />
            );

        case "personalDetails":
            return (
                <PersonalDetailsStep
                    resumeData={resumeData}
                    setResumeData={setResumeData}
                    handleNext={handleNext}
                    selectedSections={selectedSections}
                    setSelectedSections={setSelectedSections}
                />
            );

        case "additionalInfo":
            return (
                <AdditionalInfoStep
                    resumeData={resumeData}
                    setResumeData={setResumeData}
                    handleNext={handleNext}
                    selectedSections={selectedSections}
                    setSelectedSections={setSelectedSections}
                />
            );
        case "languages":
            return (

                <LanguageStep
                    resumeData={resumeData}
                    setResumeData={setResumeData}
                    handleNext={handleNext}
                    selectedSections={selectedSections}
                    setSelectedSections={setSelectedSections}
                />
            );



        default:
            return (
                <div className="text-red-500 text-3xl">
                    No Section Found
                </div>
            );
    }
}