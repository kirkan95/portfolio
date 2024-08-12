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
      <h2 className="text-3xl lato-thin ">{`>> where I've worked`}</h2>
      <div className="ml-5 mt-5">{resumeItems}</div>
    </div>
  );
};

export default Resume;
