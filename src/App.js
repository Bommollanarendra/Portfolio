import "./App.css";
import React from "react";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Bot from "./Components/Bot";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Project from "./Components/Project";

function App() {
  return (
    <div>
      <Navbar />
      <Bot />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
