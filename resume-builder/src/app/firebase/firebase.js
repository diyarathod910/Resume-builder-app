// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCe9BS37n1i4rwQDEaJZ2KeM2-mASkM5m8",
    authDomain: "resume-builder-1e143.firebaseapp.com",
    projectId: "resume-builder-1e143",
    storageBucket: "resume-builder-1e143.firebasestorage.app",
    messagingSenderId: "177772717616",
    appId: "1:177772717616:web:c7c40bbcc33da057b36ff5",
    measurementId: "G-XCZLD2B17N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
// const analytics = getAnalytics(app);