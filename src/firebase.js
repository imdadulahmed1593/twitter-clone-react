import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB9hld-lCuo2EoPGUJmZ5x5Tp9oH7DqLw4",
  authDomain: "twitter-clone-react-ef901.firebaseapp.com",
  databaseURL: "https://twitter-clone-react-ef901.firebaseio.com",
  projectId: "twitter-clone-react-ef901",
  storageBucket: "twitter-clone-react-ef901.appspot.com",
  messagingSenderId: "860111609602",
  appId: "1:860111609602:web:85574c6d945cbb420d6c1b",
  measurementId: "G-M1VXBFSLBD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
