const express = require("express");

const router = express.Router();

module.exports = (router) => {

    const Auth = require("../controllers/authController.js");

    const Resume = require("../controllers/resumeController.js");



    // GOOGLE SIGNUP
    router.post("/google-signup", Auth.googleSignup);


    router.post("/email-signup", Auth.emailSignup);

    // email login

    router.post("/email-login", Auth.emailLogin);


    router.delete(
        "/delete-account/:id",
        Auth.deleteAccount
    );




    // CHANGE EMAIL + PASSWORD
    
    router.put(
        "/change-email/:id",
        Auth.changeEmailAndPassword
    );



    // CREATE RESUME
    router.post("/create-resume", Resume.createResume);



    // GET USER RESUMES
    router.get("/user-resumes/:userId", Resume.getUserResumes);



    // GET SINGLE RESUME
    router.get("/single-resume/:id", Resume.getSingleResume);



    // UPDATE RESUME
    router.put("/update-resume/:id", Resume.updateResume);



    // DELETE RESUME
    router.delete("/delete-resume/:id", Resume.deleteResume);

}