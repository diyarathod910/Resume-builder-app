
import puppeteer from "puppeteer";
import { BASE_URL } from "@/app/config/api";

export async function POST(req) {

    try {

        const resumeData = await req.json();

        const browser = await puppeteer.launch({
            headless: true,
        });

        const page = await browser.newPage();

        await page.goto(`${BASE_URL}/resume-print`, {
            waitUntil: "networkidle0",
        });

        await page.evaluate((data) => {

            localStorage.setItem(
                "resumeData",
                JSON.stringify(data)
            );

        }, resumeData);

        await page.reload({
            waitUntil: "networkidle0",
        });

        await new Promise((resolve) =>
            setTimeout(resolve, 2000)
        );

        const pdf = await page.pdf({
            format: "A4",
            printBackground: true,
            margin: {
                top: "0",
                right: "0",
                bottom: "0",
                left: "0",
            },
        });

        await browser.close();

        return new Response(pdf, {
            headers: {
                "Content-Type": "application/pdf",
                "Content-Disposition":
                    "attachment; filename=resume.pdf",
            },
        });

    } catch (error) {

        console.log(error);

        return new Response("Failed", {
            status: 500,
        });

    }
}