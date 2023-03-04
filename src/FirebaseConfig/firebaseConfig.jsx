// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHCPDin9avHYCbaGvC0AefFzVm4_V6DGg",
  authDomain: "travel-app-ed323.firebaseapp.com",
  projectId: "travel-app-ed323",
  storageBucket: "travel-app-ed323.appspot.com",
  messagingSenderId: "353061532555",
  appId: "1:353061532555:web:ff1be6acfcd4a247dc358e",
  measurementId: "G-1TM6Z109KY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
