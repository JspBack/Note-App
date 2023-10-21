// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFPzfopQVhH7O7ImGjBI5qAxAE9MVaCL8",
  authDomain: "note-app-f34a9.firebaseapp.com",
  projectId: "note-app-f34a9",
  storageBucket: "note-app-f34a9.appspot.com",
  messagingSenderId: "114675245610",
  appId: "1:114675245610:web:aa373b70cb9963c88e1953",
  measurementId: "G-RW8BDZTVEX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
