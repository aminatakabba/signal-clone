import * as firebase from 'firebase'
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCMiIt4lMbFvmDUv5-tUjg7u-anWaEHcKE",
  authDomain: "signal-clone-f0b80.firebaseapp.com",
  projectId: "signal-clone-f0b80",
  storageBucket: "signal-clone-f0b80.appspot.com",
  messagingSenderId: "404886937606",
  appId: "1:404886937606:web:4723577a695d6f31456387",
  measurementId: "G-RKL94QG78P"
};

let app;

if(firebase.apps.length == 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };