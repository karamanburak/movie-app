import {
    GoogleAuthProvider,
    TwitterAuthProvider,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signInWithRedirect,
    signOut,
    updateProfile
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../auth/firebase";
import { useNavigate } from "react-router-dom";
import { toastSuccessNotify } from "../helpers/toastNotify";

//! create context \\
const AuthContext = createContext()

//! context provider \\ 
const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState("")
    const navigate = useNavigate()

    const register = async (email, password, displayName) => {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        await updateProfile(auth.currentUser, {
            displayName: displayName
        })
        navigate("/")
        toastSuccessNotify("Registred!")
    }
    const login = async (email, password) => {
        await signInWithEmailAndPassword(auth, email, password)
        navigate("/")
        toastSuccessNotify("Logged in!")


    }

    const logout = () => {
        signOut(auth)
        toastSuccessNotify("Logged out!")
    }

    const signGoogleProvider = async () => {
        try {
            const provider = new GoogleAuthProvider();
           await signInWithPopup(auth, provider)
            navigate("/")
        } catch (error) {
            console.log(error);
        }
    }
    const signTwitterProvider = async () => {
        try {
            const provider = new TwitterAuthProvider();          
            await signInWithPopup(auth, provider)
            navigate("/")
        } catch (error) {
            console.log(error);
        }
    }

    const userObserver = () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const { email, displayName, photoURL } = user;
                setCurrentUser({ email, displayName, photoURL })
            } else {
                // User is signed out
                // ...
                setCurrentUser(false)
            }
        });
    }
    console.log(currentUser);
    useEffect(() => {
        userObserver()
    }, [])

    return <AuthContext.Provider value={{
        currentUser,
        register,
        login,
        logout,
        signGoogleProvider,
        signTwitterProvider
    }}>{children}</AuthContext.Provider>
}

//* consumer with custom hook \\ 
export const useAuthContext = () => {
    return useContext(AuthContext)
}

export default AuthContextProvider;