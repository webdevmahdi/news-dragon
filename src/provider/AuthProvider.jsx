import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.init'

let auth = getAuth(app);

export let AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    let [ user, setUser ] = useState(null)
    let [ loading, setLoading ] = useState(true);

    let registerUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    let signInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // let updateUserProfile = ( name, photoUrl) => {
    //     setLoading(true)
    //     return updateProfile(auth.currentUser, { displayName: name , photoURL: photoUrl })
    // }

    let signOutUser = () => {
        setLoading(true)
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })

        // stop obserbing
        return () => {
            unsubscribe();
        }
    }, [])

    let authValues = {
        user,
        loading,
        registerUser,
        signInUser,
        signOutUser,
        // updateUserProfile

    }
    return (
        <AuthContext.Provider value={authValues}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider