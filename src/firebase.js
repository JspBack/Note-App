import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFPzfopQVhH7O7ImGjBI5qAxAE9MVaCL8",
  authDomain: "note-app-f34a9.firebaseapp.com",
  projectId: "note-app-f34a9",
  storageBucket: "note-app-f34a9.appspot.com",
  messagingSenderId: "114675245610",
  appId: "1:114675245610:web:aa373b70cb9963c88e1953",
  measurementId: "G-RW8BDZTVEX",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db, app };
