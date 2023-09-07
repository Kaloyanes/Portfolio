import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAnalytics, initializeAnalytics, logEvent } from "firebase/analytics";
import { onMount } from "svelte";

const firebaseConfig = {
  apiKey: "AIzaSyCKGvJjnm3JxESI67fsJ3I6QAUSpk6lWX8",
  authDomain: "kaloyanes-portfolio.firebaseapp.com",
  projectId: "kaloyanes-portfolio",
  storageBucket: "kaloyanes-portfolio.appspot.com",
  messagingSenderId: "191853203948",
  appId: "1:191853203948:web:25121024417a2103e0b0c9",
  measurementId: "G-0L6X6Q5RER"
};


const app = initializeApp(firebaseConfig);
export const analytics = initializeAnalytics(app);
export const firestore = getFirestore(app);
// export const analytics = getAnalytics(app);

