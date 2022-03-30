import { useEffect, useState } from "react"
import initAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged, signOut, signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";

initAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider()

    const signInGoogle = () => {
       return signInWithPopup(auth, googleProvider)
            .catch(error => {
                setError(error.message);
            })
    }

    const LogOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
        })
    }

    const createUserEmailAndPassword = () => {
        return createUserWithEmailAndPassword(auth, userName, email, password)
            
    }


    const signInEmailAndPassword = () => {
        signInWithEmailAndPassword(auth,  email, password)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
        })
   }

     
    useEffect(() => {
     onAuthStateChanged(auth, user => {
            if (user) {
                console.log("insider state change", user)
                setUser(user)
            } 
            else {
                setUser({})
          }  
       })
       
    })



    return {
        
        user,
        error,
        email,
        password,
        userName,
        auth, 
        setUserName,
        setEmail,
        setPassword,
        signInGoogle,
        LogOut,
        signInEmailAndPassword,
        createUserEmailAndPassword
    }
}
export default useFirebase;