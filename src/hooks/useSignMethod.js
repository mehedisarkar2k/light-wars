import { getAuth } from "@firebase/auth";
import { useHistory, useLocation } from "react-router";
import useAuth from "./useAuth";

const useSignMethod = () => {
  const { googleSignIn, emailPassSignIn, createUserWithEmail, setIsLoading } =
    useAuth();

  const location = useLocation();
  const redirect_uri = location.state?.from || "/home";
  const history = useHistory();

  const handleGoogleSignIn = () => {
    setIsLoading(true);
    googleSignIn()
      .then(() => {
        // history.push(redirect_uri);
      })
      .catch((error) => {
        setIsLoading(false);
      })
      .finally(() => {
        const user = getAuth().currentUser;
        setIsLoading(false);
        user?.email
          ? history.push(redirect_uri)
          : history.push(location.state?.from);
      });
  };

  // const handleGithubSignIn = () => {
  //   setIsLoading(true);
  //   githubSignIn()
  //     .then(() => {
  //       // history.push(redirect_uri);
  //     })
  //     .catch((error) => {
  //       setIsLoading(false);
  //       setMessage(error.message);
  //     })
  //     .finally(() => {
  //       const user = getAuth().currentUser;
  //       setIsLoading(false);
  //       user?.email
  //         ? history.push(redirect_uri)
  //         : history.push(location.state?.from);
  //     });
  // };

  const handleEmailPassSignIn = () => {
    setIsLoading(true);
    emailPassSignIn()
      .then(() => {
        // history.push(redirect_uri);
      })
      .catch((error) => {
        setIsLoading(false);
      })
      .finally(() => {
        const user = getAuth().currentUser;
        setIsLoading(false);
        user?.email
          ? history.push(redirect_uri)
          : history.push(location.state?.from);
      });
  };

  const handleNewUserWithEmail = (email, password, fullName) => {
    console.log(fullName);
    createUserWithEmail(email, password)
      .then((result) => {
        // updateUser();
      })
      .catch((error) => {
        setIsLoading(false);
      })
      .finally(() => {
        const user = getAuth().currentUser;
        setIsLoading(false);
        user?.email
          ? history.push(redirect_uri)
          : history.push(location.state?.from);
      });
  };

  return {
    handleGoogleSignIn,
    handleEmailPassSignIn,
    handleNewUserWithEmail,
  };
};

export default useSignMethod;
