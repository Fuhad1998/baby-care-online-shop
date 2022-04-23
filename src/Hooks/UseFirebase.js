import initializeAuthentication from "../Component/Firebase/Firebase.initialize";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signOut, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

initializeAuthentication();
const UseFirebase = () => {
    const [user, setUser] = useState({});
    const [isloding, setIsloding] = useState(true);
  const [admin, setAdmin] = useState(false)
  const [carts, setCarts] = useState([])





    const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();


  const registerUser = (email, password, name) => {
    setIsloding(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // saveUser(email, name, 'POST')
        const user = userCredential.user;
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        
      })
      .finally(() => setIsloding(false));
  };


  const loginUser = (email, password, location, history) =>{
    setIsloding(true)
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const destination = location?.state?.from || '/';
        history.replace(destination);
      
      const user = userCredential.user;
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    })
    .finally(() => setIsloding(false));

  }


  const signInUsingGoole = (location, history) =>{
    setIsloding(true)
    signInWithPopup(auth, googleProvider)
    .then((result) => {
        const user = result.user;
        // saveUser(user.email, user.displayName, 'PUT')
        const destination = location?.state?.from || '/';
        history.replace(destination);
      

      
    }).catch((error) => {
      
      const errorCode = error.code;
      const errorMessage = error.message;
      
      const email = error.email;
     
      const credential = GoogleAuthProvider.credentialFromError(error);
      
    })
    .finally(() => setIsloding(false));

  }


  const logOut = () =>{
    setIsloding(true)
    signOut(auth).then(() => {
        
      }).catch((error) => {
       
      })
      .finally(() => setIsloding(false));
  }







  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          
          
          setUser(user)
          
        } else {
          setUser({})
        }
        setIsloding(false)
      });
      return () => unsubscribe;
  }, [])




  const handelAddToCart = (products) =>{
    const newCart = [...carts, products]
    setCarts(newCart)
  }


  // let navigate = useNavigate();
  // function handleClick(order) {
  //   navigate("/purchase");
  //   console.log(order)
  // }


    return{
        loginUser,
        signInUsingGoole,
        registerUser,
        logOut,
        user,
        isloding,
        handelAddToCart,
        carts,
       
    }

};

export default UseFirebase;
