import firebase from "firebase/compat/app"
import 'firebase/compat/firestore';
import "firebase/compat/auth"
  
const app = firebase.initializeApp({
    apiKey: "AIzaSyCSc7whBNgd5-8D5dp3hBTpdEDgRTPjTJA",
    authDomain: "chrometrust.firebaseapp.com",
    projectId: "chrometrust",
    storageBucket: "chrometrust.appspot.com",
    messagingSenderId: "239013785880",
    appId: "1:239013785880:web:c673419cd54fa3577f6e6d"
  })
    
var db = firebase.firestore();

export const auth = app.auth()
export default db;