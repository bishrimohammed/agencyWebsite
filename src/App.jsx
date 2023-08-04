import { useState } from "react";
import NavbarTop from "./components/NavbarTop";
import "./App.css";
import Header from "./components/Header";
import Feature from "./components/Feature";
import Discover from "./components/Discover";
import Services from "./components/Services";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavbarTop />
      <Header />
      <Feature />
      <Discover />
      <Services />
    </>
  );
}

export default App;
