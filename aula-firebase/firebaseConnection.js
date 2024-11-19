// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8kO2etEYxp1uD__tWDW02MGKfvz7hgwo",
  authDomain: "projeto-firebase-97ed5.firebaseapp.com",
  projectId: "projeto-firebase-97ed5",
  storageBucket: "projeto-firebase-97ed5.firebasestorage.app",
  messagingSenderId: "606983512248",
  appId: "1:606983512248:web:94d399274745e95bd8944d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export { db };
