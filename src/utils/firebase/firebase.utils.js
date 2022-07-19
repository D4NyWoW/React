import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBdc8ygM4Ug0y6g0ZQjrpqq9iKeghZzmao",
    authDomain: "true-upgrade-271811.firebaseapp.com",
    projectId: "true-upgrade-271811",
    storageBucket: "true-upgrade-271811.appspot.com",
    messagingSenderId: "426252923024",
    appId: "1:426252923024:web:1fa7282d5787a431fa2815"
  };

  // Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
 prompt: "select_account"
});

export const auth = getAuth();
export const SignInWithGooglePopup = () => signInWithPopup(auth, provider);