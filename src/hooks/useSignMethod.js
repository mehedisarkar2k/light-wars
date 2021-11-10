import { getAuth } from "@firebase/auth";
import { useHistory, useLocation } from "react-router";
import useAuth from "./useAuth";

const useSignMethod = () => {
  const {
    googleSignIn,
    githubSignIn,
    emailPassSignIn,
    createUserWithEmail,
    setIsLoading,
    name,
    setMessage,
    message,
  } = useAuth();

  const location = useLocation();
  const redirect_uri = location.state?.from || "/home";
  const history = useHistory();

  const updateUser = () => {
    const user = getAuth().currentUser;
    if (user) {
      user.displayName = name;
    }
  };

  const handleGoogleSignIn = () => {
    setIsLoading(true);
    googleSignIn()
      .then(() => {
        // history.push(redirect_uri);
      })
      .catch((error) => {
        setIsLoading(false);
        setMessage(error.message);
      })
      .finally(() => {
        const user = getAuth().currentUser;
        setIsLoading(false);
        user?.email
          ? history.push(redirect_uri)
          : history.push(location.state?.from);
      });
  };

  const handleGithubSignIn = () => {
    setIsLoading(true);
    githubSignIn()
      .then(() => {
        // history.push(redirect_uri);
      })
      .catch((error) => {
        setIsLoading(false);
        setMessage(error.message);
      })
      .finally(() => {
        const user = getAuth().currentUser;
        setIsLoading(false);
        user?.email
          ? history.push(redirect_uri)
          : history.push(location.state?.from);
      });
  };

  const handleEmailPassSignIn = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailPassSignIn()
      .then(() => {
        // history.push(redirect_uri);
      })
      .catch((error) => {
        setIsLoading(false);
        setMessage(error.message);
      })
      .finally(() => {
        const user = getAuth().currentUser;
        setIsLoading(false);
        user?.email
          ? history.push(redirect_uri)
          : history.push(location.state?.from);
      });
  };

  const handleNewUserWithEmail = (e) => {
    e.preventDefault();
    if (!message) {
      createUserWithEmail()
        .then((result) => {
          updateUser();
        })
        .catch((error) => {
          setIsLoading(false);
          setMessage(error.message);
        })
        .finally(() => {
          const user = getAuth().currentUser;
          setIsLoading(false);
          user?.email
            ? history.push(redirect_uri)
            : history.push(location.state?.from);
        });
    }
  };

  return {
    handleGoogleSignIn,
    handleGithubSignIn,
    handleEmailPassSignIn,
    handleNewUserWithEmail,
  };
};

export default useSignMethod;
