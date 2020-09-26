import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAALtpKh7S0b_192u3CPO2zsynN56467A4",
  authDomain: "clone-b9990.firebaseapp.com",
  databaseURL: "https://clone-b9990.firebaseio.com",
  projectId: "clone-b9990",
  storageBucket: "clone-b9990.appspot.com",
  messagingSenderId: "883097745069",
  appId: "1:883097745069:web:25e22cddcc6781fb9df824",
  measurementId: "G-JHL30Z0GC2",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
