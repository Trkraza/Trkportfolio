// import components
import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import { useEffect } from "react";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Hireme />
      <Skills />
      <Certificates/>
      <Projects />
      <Education />
      <Contact />
      <footer className="p-3 text-center bg-gray">
        <h6 className="mb-3">Touheed Razaq</h6>
        <p>trkraza © All CopyRights Reserved 2023</p>
      </footer>
    </div>
  );
};

export default App;
