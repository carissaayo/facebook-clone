// Import the functions you need from the SDKs you need
import { getApp, initializeApp, getApps } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJE3jeDClin824mDDWehu-RmCK5DHtx04",
  authDomain: "facebook-clone-a5b61.firebaseapp.com",
  projectId: "facebook-clone-a5b61",
  storageBucket: "facebook-clone-a5b61.appspot.com",
  messagingSenderId: "727170611363",
  appId: "1:727170611363:web:ea861fcf1bd0b1dc0de716",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };