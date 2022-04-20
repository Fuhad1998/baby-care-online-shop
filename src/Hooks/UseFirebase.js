import React, { useState } from 'react';

import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signOut, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import initializeAuthentication from '../Component/Firebase/Firebase.initialize';


initializeAuthentication();





const UseFirebase = () => {
    const [user, setUser] = useState({});


    const auth = getAuth();

    return {
        user,
    }
};

export default UseFirebase;