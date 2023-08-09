import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBp3Yo9KDMfj34lRRT16BLNsNlx4PvvB_E",
  authDomain: "hedman-e5a44.firebaseapp.com",
  projectId: "hedman-e5a44",
  storageBucket: "hedman-e5a44.appspot.com",
  messagingSenderId: "810124240785",
  appId: "1:810124240785:web:5f23107ac4481873555c30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Use 'app' to get the auth object

export { app, auth, firebaseConfig }; // Export 'app' and 'auth'
