"use client";
import Nav from "../components/header/nav";
import TemplateGridUI from "../components/UI/TemplateGridUI";
import Footer from "../components/UI/FooterUI";

export default function TemplatesPage() {
    return (
        <>
            <section className="w-full flex items-center justify-center flex-col bg-linear-to-br from-[#191970] via-[#312E81] to-[#4338CA] scroll-smooth ">
                <Nav />
                <div className="mt-[5%]">
                    <TemplateGridUI />
                </div>
                <Footer></Footer>
            </section>


        </>
    );
}