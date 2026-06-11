import React from "react";
import { portfolioMap } from "./portfolio";

const Portfolio = () => {
  const portfolioItems = [];

  portfolioMap.forEach((object, key) => {
    const inner = (
      <div
        id="portfolio-item"
        className={`mx-5 mb-[100px] sm:mb-10 ${object.type === "hidden" ? "opacity-80" : "sm:hover:scale-105 opacity-80 hover:opacity-100 transition-all cursor-pointer"}`}
      >
        <div
          id="portfolio-content"
          className="flex flex-col gap-[5px] sm:flex sm:flex-row sm:gap-5"
        >
          {object.imgSrc && (
            <div id="portfolio-img" className="shrink-0">
              <img
                src={object.imgSrc}
                alt={object.name}
                className="aspect-square w-100 sm:h-[300px] object-cover shadow-md"
              />
            </div>
          )}
          <div id="portfolio-text">
            <div className="flex items-center gap-2 mb-1">
              {object.outlet && (
                <span className="lato-bold text-xs text-slate-400 uppercase tracking-widest">
                  {object.outlet}
                </span>
              )}
              {object.type === "hidden" && (
                <span className="lato-regular text-xs text-slate-500 bg-slate-200 px-2 py-0.5 rounded-sm uppercase tracking-wide">
                  Internal Tool
                </span>
              )}
            </div>
            <h3 className="lato-bold text-lg text-slate-700">{object.name}</h3>
            <p className="text-balance text-slate-600">{object.text}</p>
            <p className="mt-5">
              <span className="lato-bold-italic text-slate-500">What I made:</span>{" "}
              <span className="lato-regular-italic text-slate-500">{object.contribution}</span>
            </p>
          </div>
        </div>
      </div>
    );

    portfolioItems.push(
      object.url ? (
        <a key={key} href={object.url} target="_blank" rel="noreferrer">
          {inner}
        </a>
      ) : (
        <div key={key}>{inner}</div>
      )
    );
  });

  return (
    <div id="portfolio-container" className="mb-20">
      <div id="subhed" className="mt-20 mb-5">
        <h2 className="sm:text-3xl sm:mx-5 sm:text-left text-center text-3xl lato-thin text-slate-900">
          <span className="text-accent">{`>>`}</span> my work
        </h2>
      </div>
      <div id="portfolio-list">{portfolioItems}</div>
    </div>
  );
};

export default Portfolio;
