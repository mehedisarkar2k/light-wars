import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../components/Login/Firebase/Firebase.init";

initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState();

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const googleSignIn = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const githubSignIn = () => {
    setIsLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  const emailPassSignIn = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const createUserWithEmail = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .then(() => setIsLoading(false))
      .then(() => setMessage("You have successfully logged out."));
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });

    return () => unsubscribed;
  }, [auth]);

  useEffect(() => {
    fetch(`https://light-wars.herokuapp.com/user/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data));
  }, [user.email]);

  return {
    user,
    message,
    isLoading,
    name,
    auth,
    admin,
    email,
    password,
    googleSignIn,
    githubSignIn,
    emailPassSignIn,
    createUserWithEmail,
    setMessage,
    setName,
    signOutUser,
    setEmail,
    setPassword,
    setIsLoading,
  };
};

export default useFirebase;
