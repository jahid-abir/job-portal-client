import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../Firebase/firebase.init';

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loader,setLoader] = useState(true)

    const createUser = (email,password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const loginUser = (email,password) =>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleProvider = new GoogleAuthProvider()

    const googleLogin = () =>{
        setLoader(true)
        return signInWithPopup(auth,googleProvider)
    }

    const logOut = () =>{
        setLoader(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoader(false)
        })
        return () => unsubscribe()
    },[])
    const authInfo = {
        user,
        loader,
        createUser,
        loginUser,
        logOut,
        googleLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;