import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Video from "./components/Projects/Video";
import Contact from "./components/Contact/Contact";
import Resume from "./components/Resume/Resume";
import NotFound from "./NotFound";
import HomeTest from "./components/Home/HomeTest";

function App() {
  document.title = "Dheeraj Gupta - Resume";
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exac={true} element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/video/:vidname" element={<Video />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/home-test" element={<HomeTest />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
