import { useState } from "react";
import "./App.css";
import HeroBanner from "./components/HeroBanner";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <HeroBanner />
    </>
  );
}

export default App;
