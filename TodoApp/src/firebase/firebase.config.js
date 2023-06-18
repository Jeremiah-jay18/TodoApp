
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
;

const firebaseConfig = {
  apiKey: "AIzaSyC5NuaXdX-oSE7IDEHnLzdV_8zZ-HUAIeg",
  authDomain: "todo-7b65b.firebaseapp.com",
  projectId: "todo-7b65b",
  storageBucket: "todo-7b65b.appspot.com",
  messagingSenderId: "482563117785",
  appId: "1:482563117785:web:04994083a3d53b964124c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
