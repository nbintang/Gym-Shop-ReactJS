import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Swiper from "./components/Swiper";
import Dropdown from "./components/Dropdown";
import Home from "./pages/Home";
import Support from "./components/Support";

export default function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Home/>
      <Support/>



      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
          </Route>
        </Switch> */}
    </Router>
  );
}
