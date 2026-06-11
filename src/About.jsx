import React from "react";

const title = "newsroom developer";
const workplace = "Boston Globe";

const About = () => {
  return (
    <div>
      <div id="header" className="mt-20 mx-5">
        <img
          src="/cropped-profile-pic.jpg"
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover ring-2 ring-accent/20 mb-5"
          alt="Kirkland An"
        />
        <h1 className="font-serif lato-bold sm:text-9xl text-slate-950 text-6xl">
          Kirkland An
        </h1>
        <div className="sm:text-3xl text-lg lato-thin text-slate-800">
          <span className="text-accent">{`>>`}</span> {title}, {workplace}
        </div>
        <div id="intro-text" className="mt-6">
          <p className="text-md sm:text-lg lato-regular text-balance text-slate-700">
            I'm a journalist who tells stories through code. I make interactive
            storytelling experiences, trackers, scrapers and news games.
          </p>
          <p className="text-md sm:text-lg mt-2 lato-regular text-balance text-slate-700">
            I think it's the most fun job in the newsroom, but I'm biased.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
