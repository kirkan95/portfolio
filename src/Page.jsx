import React from "react";
import About from "./About";
import Skills from "./Skills.jsx";
import Portfolio from "./Portfolio.jsx";
import Resume from "./Resume.jsx";
import Contact from "./Contact.jsx";
import Copyright from "./Copyright.jsx";

const Page = () => {
  return (
    <div id="layout" className="max-w-screen-md mx-auto">
      <About />
      <Skills />
      <Portfolio />
      <Resume />
      <Contact />
      <Copyright />
    </div>
  );
};

export default Page;
