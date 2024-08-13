import React from "react";
import { resumeMap } from "./resumeList.js";

const Resume = () => {
  const resumeItems = [];

  resumeMap.forEach((object, key) => {
    resumeItems.push(
      <div id="resume-item" className="mb-5">
        <h4 className="text-lg lato-bold text-slate-200">
          {object.publication}
          <span className="text-slate-300"> • {object.title}</span>
        </h4>
        <p>{object.text}</p>
      </div>
    );
  });

  return (
    <div className="mx-5 mb-5">
      <h2 className="sm:text-3xl sm:mx-5 sm:text-left text-center text-3xl lato-thin text-slate-900">
        <span className="hidden sm:inline">{`>>`}</span> where I've worked
      </h2>
      <div className="ml-5 mt-5">{resumeItems.reverse()}</div>
    </div>
  );
};

export default Resume;
