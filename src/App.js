import "./App.css";
import useFirebase from "./hooks/useFirebase";

function App() {
  // https://light-wars.herokuapp.com/glasses?limit=8

  const { user, googleSignIn, userSignOut } = useFirebase();

  return (
    <div className="flex flex-col min-h-screen font-poppins">
      <h1 className="font-grandHotel text-5xl font-medium tracking-wider text-red-500">
        Hello Light Wars {user?.displayName}
      </h1>
      <button onClick={googleSignIn} className="btn">
        Google
      </button>
      <button onClick={userSignOut} className="btn">
        Sign Out
      </button>
      <p>
        this is a paragraph.. gain a paragraph. How about you dear? how fell you
        now?
      </p>
    </div>
  );
}

export default App;
