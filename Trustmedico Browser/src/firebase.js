import firebase from "firebase/compat/app"
import 'firebase/compat/firestore';
import "firebase/compat/auth"
  
const app = firebase.initializeApp({
    apiKey: "AIzaSyBNps55n8XN4rAO1z7KWtSOmyv0nFXJDTA",
    authDomain: "trustmedicos-c3f2a.firebaseapp.com",
    projectId: "trustmedicos-c3f2a",
    storageBucket: "trustmedicos-c3f2a.appspot.com",
    messagingSenderId: "413045498012",
    appId: "1:413045498012:web:2618f942d2ec53cb968d59",
    measurementId: "G-98BGDR20BN"
  })
    
var db = firebase.firestore();

export const auth = app.auth()
export default db;