import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyDyVkFSl3-ejfxjJymNxi68NSEthq13oaY",
  authDomain: "asmar-ab6e4.firebaseapp.com",
  projectId: "asmar-ab6e4",
  storageBucket: "asmar-ab6e4.appspot.com",
  messagingSenderId: "827647297313",
  appId: "1:827647297313:web:2a2f2648d4bcbfaaf92060",
  measurementId: "G-CCSM7DTFFX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export {db,storage, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword}

// file > storage > get download url -> firestore db














