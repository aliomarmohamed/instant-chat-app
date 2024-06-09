import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey: "AIzaSyAF39eInNnk7HG0t25w9qroG1Fwh1PSnoM",
    authDomain: "instantchat-765ee.firebaseapp.com",
    projectId: "instantchat-765ee",
    storageBucket: "instantchat-765ee.appspot.com",
    messagingSenderId: "410874229954",
    appId: "1:410874229954:web:4fe04978c7ce09201c775b"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


