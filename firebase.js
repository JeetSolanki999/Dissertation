import * as firebase from "firebase/compat";
import "firebase/firestore";
import "firebase/auth";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAESWJjOik4dlkSiANkyNYJqmzT-eQg9j4",
  authDomain: "digi-pocket-1f456.firebaseapp.com",
  projectId: "digi-pocket-1f456",
  storageBucket: "digi-pocket-1f456.appspot.com",
  messagingSenderId: "483836732160",
  appId: "1:483836732160:web:2a6f7a919e5d2e9b3789e5",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
