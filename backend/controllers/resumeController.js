
const Resume = require("../models/Resume.js");

const puppeteer = require("puppeteer-core");
const chromium = require("@sparticuz/chromium");



// CREATE RESUME
exports.createResume = async (req, res) => {

    try {

        const {
            userId,
            title,
            template,
            resumeData
        } = req.body;

        const resume = await Resume.create({

            userId,

            title,

            template,

            resumeData

        });

        res.status(201).json({

            success: true,

            resume

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};



// GET USER RESUMES
exports.getUserResumes = async (req, res) => {

    try {

        const { userId } = req.params;

        const resumes = await Resume.find({ userId })
            .sort({ createdAt: -1 });

        res.status(200).json({

            success: true,

            resumes

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};



// GET SINGLE RESUME
exports.getSingleResume = async (req, res) => {

    try {

        const { id } = req.params;

        const resume = await Resume.findById(id);

        res.status(200).json({

            success: true,

            resume

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};



// UPDATE RESUME
exports.updateResume = async (req, res) => {

    try {

        const { id } = req.params;

        const updatedResume = await Resume.findByIdAndUpdate(

            id,

            req.body,

            { new: true }

        );

        res.status(200).json({

            success: true,

            updatedResume

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};



// DELETE RESUME
exports.deleteResume = async (req, res) => {

    try {

        const { id } = req.params;

        await Resume.findByIdAndDelete(id);

        res.status(200).json({

            success: true,

            message: "Resume Deleted"

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

exports.downloadResumePdf = async (req, res) => {
    try {

        const resumeData = req.body;

        const browser = await puppeteer.launch({

            args: [
                ...chromium.args,
                "--no-sandbox",
                "--disable-setuid-sandbox",
            ],

            executablePath:
                await chromium.executablePath(),

            headless: "new",

        });
        console.log("Chromium loaded:", chromium);
        console.log(
            "ExecutablePath type:",
            typeof chromium.executablePath
        );

        const page = await browser.newPage();

        // Your frontend URL
        await page.goto(
            "https://resume-builder-app-puce.vercel.app/resume-print",


            {
                waitUntil: "networkidle0",
            }
        );

        await page.evaluate((data) => {

            localStorage.setItem(
                "resumeData",
                JSON.stringify(data)
            );

        }, resumeData);

        await page.reload({
            waitUntil: "networkidle0",
        });

        await new Promise(resolve =>
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

        res.set({
            "Content-Type": "application/pdf",
            "Content-Disposition":
                "attachment; filename=resume.pdf",
        });

        return res.send(pdf);

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};