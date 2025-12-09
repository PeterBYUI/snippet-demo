import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCnmZ7JnOE3uk6pzpp5QD9rpPaOSK4HTx4",
  authDomain: "snippet-demo-20dd4.firebaseapp.com",
  projectId: "snippet-demo-20dd4",
  storageBucket: "snippet-demo-20dd4.firebasestorage.app",
  messagingSenderId: "1043495785470",
  appId: "1:1043495785470:web:bd9e22e89e195e823e26af",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize the databse
export const db = getFirestore(app);

// Initialize Firebase Auth
export const auth = getAuth();
