import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyApOU1q6rYnlrwVSZCNLMaVciFqnKLQLrM",
  authDomain: "programmerscollege-836ed.firebaseapp.com",
  projectId: "programmerscollege-836ed",
  storageBucket: "programmerscollege-836ed.appspot.com",
  messagingSenderId: "509596485020",
  appId: "1:509596485020:web:7ff314d1ee91473eae7459",
  measurementId: "G-QKPX1XFJR0"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);