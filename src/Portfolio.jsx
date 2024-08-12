import React from "react";
import { portfolioMap } from "./portfolio";

const Portfolio = () => {
  const portfolioItems = [];

  portfolioMap.forEach((object, key) => {
    portfolioItems.push(
      <a href={object.url} target="_blank" rel="noreferrer">
        <div
          id="portfolio-item"
          className="mx-5 mb-10 hover:scale-105 opacity-80 hover:opacity-100 transition-all cursor-pointer"
          key={key}
        >
          <div
            id="portfolio-content"
            className="flex flex-col gap-[5px] sm:flex sm:flex-row sm:gap-5 "
          >
            <div id="portfolio-img" className="shrink-0">
              <img
                src={object.imgSrc}
                alt={object.name}
                className="aspect-square h-[300px] "
              />
            </div>
            <div id="portfolio-text">
              <h3 className="lato-bold text-lg text-slate-100">
                {object.name}
              </h3>
              <p className="text-balance">{object.text}</p>
              <p className="sm:pl-5">
                <span className="text-slate-100">{`>> `}</span>What I made:{" "}
                {object.contribution}
              </p>
            </div>
          </div>
        </div>
      </a>
    );
  });

  return (
    <div id="portfolio-container" className="mb-20">
      <div id="subhed" className=" mt-20 mb-5">
        <h2 className="sm:text-3xl text-3xl lato-thin mx-5 text-slate-900">{`>> my work`}</h2>
      </div>
      <div id="portfolio-list">{portfolioItems}</div>
    </div>
  );
};

export default Portfolio;
