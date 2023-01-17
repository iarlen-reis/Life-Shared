import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu1ChbLfDH8vI0hOJu8ufcFOF4j2NYpzU",
  authDomain: "mini-blog-89231.firebaseapp.com",
  projectId: "mini-blog-89231",
  storageBucket: "mini-blog-89231.appspot.com",
  messagingSenderId: "644937699932",
  appId: "1:644937699932:web:e5b61eeaf25ecef60e0c99",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
