import React, {  createContext, useEffect, useState } from 'react';
import  {getAuth,createUserWithEmailAndPassword,
        signInWithEmailAndPassword,updateProfile,
        onAuthStateChanged,signOut,signInWithPopup, GoogleAuthProvider
         } 
       from 'firebase/auth';

import app from '../Firebase/firebase.config';
const auth = getAuth(app);
export const AuthContext = createContext();

const Authprovider = ({children}) => {
    const [user,setUser] = useState({});
    const [loading,setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();

    //1. create user with email and password (register)
    const registerWithEmailAndPassword = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    //2.update name and photo url of register user 
    const updateNameAndPhoto = (name,photoURL)=>{
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:photoURL
        });
    }

    //3. login user with email and password
    const loginWithEmailAndPassword = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }

    //4. loginwith google provider 

    const loginWithGoogleProvider = ()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider);
    }

    //5.register with google provider 
    const registerWithGoogleProvider = ()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider);
    }

    //6.logout user 

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth); 
    }


    // store current user info when login or register 

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
             setUser(currentUser);
             setLoading(false);
        });

        return ()=>{
            return unsubscribe();
        }
    },[]);

    const authInfo = {user,registerWithEmailAndPassword,
                     loginWithEmailAndPassword,logOut,loading,
                     updateNameAndPhoto,loginWithGoogleProvider,
                     registerWithGoogleProvider
                     }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;
