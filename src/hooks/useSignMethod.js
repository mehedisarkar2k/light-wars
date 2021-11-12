import { getAuth } from "@firebase/auth";
import { useHistory, useLocation } from "react-router";
import useAuth from "./useAuth";

const useSignMethod = () => {
  const {
    auth,
    googleSignIn,
    emailPassSignIn,
    createUserWithEmail,
    setIsLoading,
  } = useAuth();

  const location = useLocation();
  const redirect_uri = location.state?.from || "/home";
  const history = useHistory();

  const handleGoogleSignIn = () => {
    setIsLoading(true);
    googleSignIn()
      .then((result) => {
        // history.push(redirect_uri);
        fetch(`https://light-wars.herokuapp.com/users`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            name: result.user.displayName,
            email: result.user.email,
          }),
        })
          .then((res) => res.json())
          .then((data) => {});
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
    createUserWithEmail(email, password)
      .then((result) => {
        auth.currentUser.displayName = fullName;

        fetch(`https://light-wars.herokuapp.com/users`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ name: fullName, email: email }),
        })
          .then((res) => res.json())
          .then((data) => {});
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
