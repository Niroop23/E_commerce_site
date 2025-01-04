import React from "react";
import returnIcon from "/src/assets/return.svg"; // Importing the image

const PolicySec = () => {
  return (
    <div className="bg-slate-500 ">
      <div className="flex flex-col justify-center gap-12 text-center sm:flex-row  sm:gap-2  text-xs sm:text-sm md:text-base text-gray-700 py-20 ">
        <div className="flex flex-col gap-2 items-center md:flex-row lg:gap-5 lg:items-start">
          <img
            src={returnIcon}
            alt="30 Days Return"
            className="max-w-10 md:max-w-20 "
          />
          <section>
            <p className="font-semibold text-black">
              <b>30 Days Return</b>
            </p>
            <p
              className="text-[14px] sm:text-[16px])] text-[#fffefe]
              "
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
              labore asperiores
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PolicySec;
