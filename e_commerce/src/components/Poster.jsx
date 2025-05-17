import React from "react";
import { Link } from "react-router-dom";
import posterImage from "/src/assets/poster.svg";

const Poster = () => {
  return (
    <section
      className="flex flex-col item-center  sm:flex-row border border-gray-400 bg-[#a6afb9] "
      aria-label="Product Poster"
    >
      <div className="w-full sm:w-1/2 flex flex-col items-center justify-center p-4 sm:p-8">
        <header className="text-center">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 md:w-11 h-[2px] bg-gray-500"></span>
            <p className="text-gray-800 font-medium text-sm md:text-base">
              BESTSELLERS
            </p>
          </div>
          <h1 className="prata-regular text-2xl sm:text-3xl  text-gray-900 mb-4">
            LATEST COLLECTION
          </h1>
          <div className="flex items-center gap-2">
            <Link to="/collection" className="font-semibold py-2 px-4 rounded">
              SHOP NOW
            </Link>
            <span className="w-8 md:w-11 h-[2px] bg-gray-500"></span>
          </div>
        </header>
      </div>
      <div className="w-full sm:w-1/2 sm:max-w-md sm:max-h-[400px] flex items-center justify-center p-4 sm:p-8">
        <img
          src="/poster_rmx.svg"
          alt="Product Image"
          className="w-full h-auto max-w-full max-h-[350px] object-contain rounded-md"
        />
      </div>
    </section>
  );
};

export default Poster;
