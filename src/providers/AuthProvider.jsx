import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext()
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (name, image) =>{
        setLoading(true)
        return updateProfile(auth.currentUser, {
           displayName: name, photoURL: image
        })
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const loginUserWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    const authInfo = {
        user,
        loading,
        createUser,
        updateUser,
        loginUser,
        loginUserWithGoogle,
        logOutUser
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)

            if(currentUser){
                axios.post('https://artistry-moth-school-server.vercel.app/jwt', {email: currentUser?.email})
                .then(data => {
                    console.log(data.data.token)
                    localStorage.setItem('access-token', data.data.token)
                    setLoading(false)
                })
            }
            else{
                localStorage.removeItem('access-token')
            }

        })

        // Stop observing while unmounting
        return () => {
            return unsubscribe
        }
    }, [])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;