import initializeAuthentication from "../Compoents/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const auth = getAuth()

    const registerUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const logInProcess = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message)
            })
    };

    useEffect(() => {
        const unSubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
        })
        return unSubscribed;

    }, [auth]);

    const handelSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch((error) => {
                setError(error.message)
            });
    }

    return { registerUser, logInProcess, handelSignOut, user, error }

}
export default useFirebase;