// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDsX03sGQq0L1aShsFK-RL46vS7EMyMx0",
  authDomain: "all-info-app-2344b.firebaseapp.com",
  projectId: "all-info-app-2344b",
  storageBucket: "all-info-app-2344b.appspot.com",
  messagingSenderId: "167600456260",
  appId: "1:167600456260:web:57d8ac0b67923a23b9f211",
  measurementId: "G-MGZHFSQPHV",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
