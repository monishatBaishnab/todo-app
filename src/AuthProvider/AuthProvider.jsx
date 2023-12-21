import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import PropTypes from 'prop-types';

export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    

    const handleAction = (action, ...params) => {
        setIsLoading(true);
        return action(auth, ...params);
    }

    const updateUser = (name, image) => updateProfile(auth.currentUser, {
        displayName: name, photoURL: image
    })

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);
            setIsLoading(false);
        })
        return () => unSubscribe();
    }, [])

    const authInfo = {
        signUpWithEmailAndPass: (email, password) => handleAction(createUserWithEmailAndPassword, email, password),
        signInWithEmailAndPass: (email, password) => handleAction(signInWithEmailAndPassword, email, password),
        signInWithGoogle: () => handleAction(signInWithPopup, googleProvider),
        updateUser,
        signOutUser: () => handleAction(signOut),
        user,
        isLoading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider;