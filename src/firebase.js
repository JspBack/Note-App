import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

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
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);

const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const email = result.user.email;
      const photo = result.user.photoURL;
      const name = result.user.displayName;

      localStorage.setItem("email", email);
      localStorage.setItem("photo", photo);
      localStorage.setItem("name", name);
    })
    .catch((error) => {
      console.log(error);
    });
};

export { db, app, signInWithGoogle };
