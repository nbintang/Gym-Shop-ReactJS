import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Error from "./pages/Error";
import Main from "./Main";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import Login from "./pages/Login";

export default function App() {
  useEffect(() => {
    Aos.init({
      duration: 500
    });
  },[]);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
        <Route path= "/login">
          <Login/>
        </Route>
        <Route path="*">
          <Error/>
        </Route>
      </Switch>
    </Router>
  );
}
