import { useEffect, useState } from "react"
import initAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged, signOut, signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";

initAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const[login, isLogin] = useState(false)
    const auth = getAuth();

    

    const signInGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
       return signInWithPopup(auth, googleProvider)
         .catch(error => {
                setError(error.message);
            })   
    }//signinGoogle

    const LogOut = () => {
        signOut(auth)
            .then(() => {})
    }//LogOut
     
    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            } 
            else {
                setUser({})
          }  
       })//onAuthStageChange
        return () => unsubscribe;
    },[])//useEffect



    return {
        auth,
        user,
        email,
        login,
        error,
        password,
        LogOut,
        isLogin,
        setEmail,
        setError,
        setPassword,
        signInGoogle,
        signInWithEmailAndPassword,
        createUserWithEmailAndPassword
    }//return
}//useFirebase
export default useFirebase;