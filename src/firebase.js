import firebase from "firebase";

const firebaseConfig = {
   apiKey: "AIzaSyB6pn7419a9LpBBUI4tNs5SYq3HLY-P6bA",
   authDomain: "slack-clone-challenge-3b2a8.firebaseapp.com",
   projectId: "slack-clone-challenge-3b2a8",
   storageBucket: "slack-clone-challenge-3b2a8.appspot.com",
   messagingSenderId: "331288104504",
   appId: "1:331288104504:web:85de0460f2a1f6ea2720cd",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
