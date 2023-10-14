import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";
import app from '../firebase/firebase.init'

export let AuthContext = createContext(null);
let auth = getAuth(app);

const AuthProvider = ({children}) => {
    let user = { displayName: "Mahdi hasan"}
    let registerUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    let authValues = {
        user,
        registerUser,
    }
    return (
        <AuthContext.Provider value={authValues}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider