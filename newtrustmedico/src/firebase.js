import { getAuth, onAuthStateChanged } from '@firebase/auth'
import firebase from "firebase/compat/app"
import { useState, useEffect, useContext, createContext } from 'react'

export const firebaseApp = firebase.initializeApp({ 
  apiKey: "AIzaSyBNps55n8XN4rAO1z7KWtSOmyv0nFXJDTA",
  authDomain: "trustmedicos-c3f2a.firebaseapp.com",
  projectId: "trustmedicos-c3f2a",
  storageBucket: "trustmedicos-c3f2a.appspot.com",
  messagingSenderId: "413045498012",
  appId: "1:413045498012:web:2618f942d2ec53cb968d59",
  measurementId: "G-98BGDR20BN" 
})

export const AuthContext = createContext()

export const AuthContextProvider = props => {
  const [user, setUser] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), setUser, setError)
    return () => unsubscribe()
  }, [])
  return <AuthContext.Provider value={{ user, error }} {...props} />
}

export const useAuthState = () => {
  const auth = useContext(AuthContext)
  return { ...auth, isAuthenticated: auth.user != null }
}

var db = firebase.firestore();

export default db;