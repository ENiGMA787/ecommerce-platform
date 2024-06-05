
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDKnrcJxjooxMNiWLgQJVXvm7GjWUmGWhE",
  authDomain: "clone-cc16f.firebaseapp.com",
  projectId: "clone-cc16f",
  storageBucket: "clone-cc16f.appspot.com",
  messagingSenderId: "76250032931",
  appId: "1:76250032931:web:f42205d462e52623f8ba96",
  measurementId: "G-WSMLDD2DZB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };