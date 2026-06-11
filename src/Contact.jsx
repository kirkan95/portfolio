import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaBluesky, FaSquareXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <div>
      <div id="subhed" className="text-3xl lato-thin mx-5 mt-20 mb-5">
        <h2 className="sm:text-3xl sm:mx-5 sm:text-left text-center text-3xl lato-thin text-slate-900 mb-5">
          <span className="text-accent">{`>>`}</span> get in touch
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
          <FaLinkedin className="w-10 h-10 text-slate-400 hover:text-accent transition-colors duration-200" />
        </a>
        <a href="https://x.com/kirkland_an" target="_blank" rel="noreferrer">
          <FaSquareXTwitter className="w-10 h-10 text-slate-400 hover:text-accent transition-colors duration-200" />
        </a>
        <a
          href="https://bsky.app/profile/kirklandan.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaBluesky className="w-10 h-10 text-slate-400 hover:text-accent transition-colors duration-200" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
