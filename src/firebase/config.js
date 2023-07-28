import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJplt1ssCLwwK7Hx-SO0HrAhruJFNrAEI",
  authDomain: "andybikesv2.firebaseapp.com",
  projectId: "andybikesv2",
  storageBucket: "andybikesv2.appspot.com",
  messagingSenderId: "809099274836",
  appId: "1:809099274836:web:0fdf665924183d1a759bc1"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);



