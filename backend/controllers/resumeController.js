
const Resume = require("../models/Resume.js");


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