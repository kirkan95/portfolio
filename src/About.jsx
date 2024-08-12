import React from "react";

const title = "newsroom developer";
const workplace = "Boston Globe";

const About = () => {
  // test
  return (
    <div>
      {/* <div id="image-section" className="">
        <img
          src="/cropped-profile-pic.jpg"
          className="w-64 rounded-full m-auto text-center max-h-96"
        />
      </div> */}
      <div id="header" className="mt-20">
        <h1 className="font-serif lato-bold sm:text-9xl mx-5 text-slate-800 text-6xl">
          Kirkland An
        </h1>
        <div
          id="subhed"
          className="sm:text-3xl text-lg lato-thin mx-5 text-slate-900"
        >
          {`>> ${title}, ${workplace}`}
        </div>
        <div id="intro-text">
          <p className="text-md sm:text-lg mx-5 mt-5 lato-regular text-balance text-slate-700">
            I'm a journalist who tells stories through code. I make interactive
            storytelling experiences, trackers, scrapers and news games.
          </p>
          <p className="text-md sm:text-lg mx-5 lato-regular text-balance text-slate-700">
            I think it's the most fun job in the newsroom, but I'm biased.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
