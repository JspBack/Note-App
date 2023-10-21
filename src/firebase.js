import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "api_key",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "", 
  measurementId: "",
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
