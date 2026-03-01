import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Divider from "./components/Divider";
import Footer from "./components/Footer";

function App() {
  return (
    <>
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
      <Contact />
      <Divider />
      <Footer />
    </>
  )
}

export default App