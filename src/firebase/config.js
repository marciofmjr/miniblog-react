import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCPN2GPAjkYYGRSzjBkxQ2eTnujXTGHemQ",
  authDomain: "miniblog-react-902ce.firebaseapp.com",
  projectId: "miniblog-react-902ce",
  storageBucket: "miniblog-react-902ce.appspot.com",
  messagingSenderId: "452543052686",
  appId: "1:452543052686:web:42d0691e5a9f6c094d82df",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
