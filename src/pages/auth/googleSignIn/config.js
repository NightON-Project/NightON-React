import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBinFbWHu4t_vyh8Fvvhd-S52hM969Zemc",
  authDomain: "night-on-v0.firebaseapp.com",
  projectId: "night-on-v0",
  storageBucket: "night-on-v0.appspot.com",
  messagingSenderId: "1002888241650",
  appId: "1:1002888241650:web:1b5c272ece1df503c7cb6b",
  measurementId: "G-5CTLYN0PE5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth,provider};