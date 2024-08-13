import React from "react";
import { portfolioMap } from "./portfolio";

const Portfolio = () => {
  const portfolioItems = [];

  portfolioMap.forEach((object, key) => {
    portfolioItems.push(
      <a href={object.url} target="_blank" rel="noreferrer">
        <div
          id="portfolio-item"
          className="mx-5 mb-[100px] sm:mb-10 sm:hover:scale-105 opacity-80 hover:opacity-100 transition-all cursor-pointer"
          key={key}
        >
          <div
            id="portfolio-content"
            className="flex flex-col gap-[5px] sm:flex sm:flex-row sm:gap-5 "
          >
            <div id="portfolio-img" className="shrink-0">
              <img
                src={`${import.meta.env.BASE_URL + object.imgSrc}`}
                alt={object.name}
                className="aspect-square w-100 sm:h-[300px] border-8 border-white"
              />
            </div>
            <div id="portfolio-text">
              <h3 className="lato-bold text-lg text-slate-100">
                {object.name}
              </h3>
              <p className="text-balance">{object.text}</p>
              <p className="mt-5">
                <span className="lato-bold-italic">What I made:</span>{" "}
                <span className="lato-regular-italic">
                  {object.contribution}
                </span>
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
        <h2 className="sm:text-3xl sm:mx-5 sm:text-left text-center text-3xl lato-thin text-slate-900">
          <span className="hidden sm:inline">{`>>`}</span> my work
        </h2>
      </div>
      <div id="portfolio-list">{portfolioItems}</div>
    </div>
  );
};

export default Portfolio;
