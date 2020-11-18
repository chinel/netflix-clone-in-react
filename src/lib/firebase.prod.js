import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
//import { seedDatabase } from "../seed";

//we need to seed the database

//firebase config details

const config = {
  apiKey: "AIzaSyA34UyRztmU3EeoYUe5CBsAAGnfxewvFtM",
  authDomain: "netflix-clone-4a12f.firebaseapp.com",
  databaseURL: "https://netflix-clone-4a12f.firebaseio.com",
  projectId: "netflix-clone-4a12f",
  storageBucket: "netflix-clone-4a12f.appspot.com",
  messagingSenderId: "142801866021",
  appId: "1:142801866021:web:da29edefee401c172e5ecc",
  measurementId: "G-S53C3RSK29",
};

const firebase = Firebase.initializeApp(config);

//seedDatabase(firebase);
export { firebase };
