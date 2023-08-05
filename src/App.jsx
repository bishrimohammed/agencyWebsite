import { useState } from "react";
import NavbarTop from "./components/NavbarTop";
import "./App.css";
import Header from "./components/Header";
import Feature from "./components/Feature";
import Discover from "./components/Discover";
import Services from "./components/Services";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavbarTop />
      <Header />
      <Feature />
      <Discover />
      <Services />
      <Footer />
    </>
  );
}

export default App;
