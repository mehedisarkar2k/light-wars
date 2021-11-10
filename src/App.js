import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import LoginIn from "./components/Login/Login/LoginIn";
import Register from "./components/Login/Login/Register";
import AboutUs from "./components/Pages/AboutUs/AboutUs";
import Explore from "./components/Pages/Explore/Explore";
import Home from "./components/Pages/Home/Home";
import NotFound from "./components/Pages/NotFound/NotFound";

function App() {
  // https://light-wars.herokuapp.com/glasses?limit=8

  return (
    <div className="flex flex-col min-h-screen font-poppins">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/explore">
            <Explore />
          </Route>

          <Route path="/about">
            <AboutUs />
          </Route>

          <Route path="/login">
            <LoginIn />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
