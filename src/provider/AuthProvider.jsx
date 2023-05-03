import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
const gitProvider = new GithubAuthProvider();
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user,setUser]=useState(null)
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleSignIn= ()=>{
        return signInWithPopup(auth,googleProvider)
    }
    const githubLogIn=()=>{
        return signInWithPopup(auth,gitProvider)
    }
    const logOut =()=>{
        return signOut(auth)
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,loggedUser=>{
            setUser(loggedUser)
        })
        return ()=>{
            unSubscribe()
        }
    },[])
    const authInfo = { user, createUser, signIn , googleSignIn,logOut,githubLogIn }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;