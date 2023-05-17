// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoUvap1ZBF_twfuAN1q6JUOKwUhw6ogX8",
  authDomain: "new-olx-90366.firebaseapp.com",
  databaseURL: "https://new-olx-90366-default-rtdb.firebaseio.com",
  projectId: "new-olx-90366",
  storageBucket: "new-olx-90366.appspot.com",
  messagingSenderId: "1069920454195",
  appId: "1:1069920454195:web:0c6ba46f5367bbcbaec546",
  measurementId: "G-7HKFPEGDB5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app