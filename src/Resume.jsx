import React from "react";
import { resumeMap } from "./resumeList.js";

const Resume = () => {
  const resumeItems = [];

  resumeMap.forEach((object, key) => {
    resumeItems.push(
      <div key={key} id="resume-item" className="mb-6 pl-4 border-l-2 border-accent">
        <h4 className="text-lg lato-bold text-slate-700">
          {object.publication}
          <span className="text-slate-400 font-normal"> · {object.title}</span>
        </h4>
        <p className="text-slate-600">{object.text}</p>
      </div>
    );
  });

  return (
    <div className="mx-5 mb-5">
      <h2 className="sm:text-3xl sm:mx-5 sm:text-left text-center text-3xl lato-thin text-slate-900">
        <span className="text-accent">{`>>`}</span> where I've worked
      </h2>
      <div className="sm:ml-5 mt-5">{resumeItems.reverse()}</div>
    </div>
  );
};

export default Resume;
