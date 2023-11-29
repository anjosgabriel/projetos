// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7jHJPLWFOyZaoC9UsKDlFG1c2-OPz3hw",
  authDomain: "construfeliz-80ad2.firebaseapp.com",
  projectId: "construfeliz-80ad2",
  storageBucket: "construfeliz-80ad2.appspot.com",
  messagingSenderId: "955293160328",
  appId: "1:955293160328:web:5f0a6ee1ee6431f68f603d",
  measurementId: "G-51SF6V2484"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);