import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import "./index.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black`}
      >
        <Header />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
