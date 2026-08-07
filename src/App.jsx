import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from "./components/BlurBlob";

const App = () => {
  return (
    <div className="min-h-screen bg-[#050414] text-white">
      <BlurBlob
        position={{ top: "24%", left: "18%" }}
        size={{ width: "28%", height: "36%" }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f20_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f20_1px,transparent_1px)] bg-[size:18px_28px] [mask-image:radial-gradient(ellipse_65%_42%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="relative pt-20">
        <Navbar />
        <About />
        <Experience />
        <Work />
        <Skills />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
