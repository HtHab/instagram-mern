import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB3dcYpuqpRXvfWmWTvfbtcSb93RD0pixU",
  authDomain: "instagram-mern-clone-c2869.firebaseapp.com",
  projectId: "instagram-mern-clone-c2869",
  storageBucket: "instagram-mern-clone-c2869.appspot.com",
  messagingSenderId: "838485886974",
  appId: "1:838485886974:web:4cf09f4fbede953906a2af",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const firestore = firebase.firestore();

export { db, auth, storage, firestore };
