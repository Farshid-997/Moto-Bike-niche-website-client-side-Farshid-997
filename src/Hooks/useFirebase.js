import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword,signOut,onAuthStateChanged,signInWithEmailAndPassword,signInWithPopup, GoogleAuthProvider } from "firebase/auth";
initializeFirebase();
const  useFirebase=()=>{
const [user,setUser]=useState({})
const [authError,setAuthError]=useState('')
const[isLoading,setIsLoading]=useState(true)
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const googleSignIn=()=>{
    setIsLoading(true)
    return signInWithPopup(auth, googleProvider)
}
const registerUser=(email,password)=>{
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
  
   setAuthError('')
  })
  .catch((error) => {
  
    setAuthError(error.message);
    
  }).finally(()=>{
      setIsLoading(false)
  });
}
const loginUser=(email,password,location,history)=>{
    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
  
    const destination=location?.state?.from||'/'
    history.replace(destination)
    setAuthError('')
  
  })
  .catch((error) => {
  
    setAuthError(error.message);
  }).finally(()=>{
    setIsLoading(false)
});

}
useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          
         
       setUser(user)
        } else {
          setUser({})
        }
        setIsLoading(false)
      });
},[])

const logOut=()=>{
    setIsLoading(true)
    signOut(auth).then(() => {
        
      }).catch((error) => {
       
      }).finally(()=>{
        setIsLoading(false)
    });
      
}

return{
    user,
    isLoading,
    registerUser,
    logOut,
    authError,
    loginUser,
    googleSignIn
}
}
export default useFirebase;