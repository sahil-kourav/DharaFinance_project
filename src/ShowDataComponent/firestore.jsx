import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBonq1dGVMO3BxG-lde8aRj-MwuzChcGPs",
  authDomain: "dharadb-7583c.firebaseapp.com",
  projectId: "dharadb-7583c",
  storageBucket: "dharadb-7583c.firebasestorage.app",
  messagingSenderId: "422213686313",
  appId: "1:422213686313:web:a255395aa7ed4375bcb838",
  measurementId: "G-6ZXELDD3L8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);