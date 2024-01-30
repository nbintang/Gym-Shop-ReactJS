import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Support from "./components/Support";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

export default function Main() {
  return (
    <>
      <Navbar></Navbar>
      <Home />
      <Support />
      <About />
      <Shop />
      <Contact />
      <Footer />
    </>
  );
}
