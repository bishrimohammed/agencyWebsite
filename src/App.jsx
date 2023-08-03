import { useState } from "react";
import Nav from "./components/Nav";
import "./App.css";
import Header from "./components/Header";
import Feature from "./components/Feature";
import Discover from "./components/Discover";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <Header />
      <Feature />
      <Discover />
    </>
  );
}

export default App;
