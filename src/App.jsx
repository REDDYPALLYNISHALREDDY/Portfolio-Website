import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Trainings from "./components/Trainings";
import ExtraCurricular from "./components/ExtraCurricular";
import Contact from "./components/Contact";
import Divider from "./components/Divider";
import Footer from "./components/Footer";

// src/App.jsx
// Add this import without removing existing imports.

import BackgroundFX from "./components/BackgroundFX";

function App() {
  // Inside your existing App component's return statement,
// wrap your existing website content as shown below.

  return (
    <>
      <BackgroundFX />

      <div className="app-content">
        <Navbar />
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Education />
        <Divider />
        <Projects />
        <Divider />
        <Skills />
        <Divider />
        <Trainings />
        <Divider />
        <ExtraCurricular />
        <Divider />
        <Contact />
        <Divider />
        <Footer />
      </div>
    </>
  );
}

export default App