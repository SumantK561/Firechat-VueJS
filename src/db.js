// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/database";

const config = {
  apiKey: "AIzaSyBIDl-1mC0W1zHFxUPL_1I_BcRn9_Od0ZM",
  authDomain: "firechat-1ee8f.firebaseapp.com",
  projectId: "firechat-1ee8f",
  storageBucket: "firechat-1ee8f.appspot.com",
  messagingSenderId: "429219070886",
  appId: "1:429219070886:web:229bb4c3d49fb61694c567"
}

const db = firebase.initializeApp(config);
export default db;
