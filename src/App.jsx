import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="app">

      {/* Navigation */}
      <Navbar />

      {/* Main Portfolio Content */}
      <main>

        {/* Hero / Introduction */}
        <Hero />

        {/* About Me */}
        <About />

        {/* What I Can Do */}
        <Services />

        {/* Technical Skills */}
        <Skills />

        {/* Projects */}
        <Projects />

        {/* Education */}
        <Education />

        {/* Contact */}
        <Contact />

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;