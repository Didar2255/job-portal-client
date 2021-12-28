import initializeAuthentication from "../Compoents/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth()

    const registerUser = (email, password, name, location, navigate) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const newUser = { email, displayName: name }
                setUser(newUser)
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                const destination = location?.state?.from || '/home'
                navigate(destination)
                setError('')

            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    };

    const logInProcess = (email, password, location, navigate) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
                const destination = location?.state?.from || '/home'
                navigate(destination)
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    };

    useEffect(() => {
        setIsLoading(true)
        const unSubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
        return unSubscribed;

    }, [auth]);

    const handelSignOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    };

    return { registerUser, logInProcess, handelSignOut, user, error, isLoading }

}
export default useFirebase;