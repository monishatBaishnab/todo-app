// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyChwmtEbap7aplE7nfoYYxUI2llOlTBPqw",
    authDomain: "job-task-ac5cd.firebaseapp.com",
    projectId: "job-task-ac5cd",
    storageBucket: "job-task-ac5cd.appspot.com",
    messagingSenderId: "185348651228",
    appId: "1:185348651228:web:b690a85e37821731d61c19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);