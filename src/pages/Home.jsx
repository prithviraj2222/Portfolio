import React, { useContext, useRef } from "react";
import Hero from "../components/sections/Hero";
import Skills from "../components/sections/Skills";
import "../App.css";
import Experince from "../components/sections/Experince";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import ContactContext from "../context/contact/contactContext";

function Home() {
  const skillsRef = useRef();
  const experinceRef = useRef();
  const { contactRef } = useContext(ContactContext);

  return (
    <div className="w-screen flex flex-col items-center">
      <Hero skillsRef={skillsRef} experinceRef={experinceRef} />
      <Skills ref={skillsRef} />
      <Experince ref={experinceRef} />
      <Projects />
      <Contact ref={contactRef} />
    </div>
  );
}

export default Home;
