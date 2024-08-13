import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
  return (
    <div>
      <div id="subhed" className="text-3xl lato-thin mx-5 mt-20 mb-5">
        <h2 className="sm:text-3xl sm:mx-5 sm:text-left text-center text-3xl lato-thin text-slate-900 mb-5">
          <span className="hidden sm:inline">{`>>`}</span> get in touch
        </h2>
      </div>
      <div
        id="contact-area"
        className="mb-20 flex flex-row align-middle sm:align-left gap-5 justify-center"
      >
        <a
          href="https://www.linkedin.com/in/kirkland-an-bb806442/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <FaLinkedin className="w-10 h-10" />
        </a>
        <a href="https://x.com/kirkland_an" target="_blank" rel="noreferrer">
          <FaTwitterSquare className="w-10 h-10" />
        </a>

        <a href="mailto:kirkland.an@globe.com">
          <IoMdMail className="w-10 h-10" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
