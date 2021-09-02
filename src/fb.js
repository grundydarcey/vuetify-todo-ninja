// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase';
//import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPEVMeoIBCLmFaPo4VjviqlM10WcIsKjI",
  authDomain: "todo-ninja-81195.firebaseapp.com",
  projectId: "todo-ninja-81195",
  storageBucket: "todo-ninja-81195.appspot.com",
  messagingSenderId: "620597308945",
  appId: "1:620597308945:web:039b195659da083a910bb0",
  measurementId: "G-87DXKFBM0J"
};
firebase.initializeApp(firebaseConfig);


// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = firebase.firestore();

db.settings({ timestampsInSnapshots: true })

export default db;